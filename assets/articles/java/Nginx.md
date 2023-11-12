## SNI
Eger nginx revers proxy kullaniyorsaniz spring boot projenizinle birlikte, upstream ssl handshake calismiyor olabilir.
Bu durumda yapmaniz gereken sorunun kaynagini bulmak. Bunu da en guzel sekilde ssl handshake logging leveli debug olarak 
ayarlayarak yapabilirsiniz. Asagidaki vm parametresini jvm e pass edebilirsiniz. 
```
 -Djavax.net.debug=ssl,handshake
```

Spring boot SNI kullandigi icin, asagidaki komutu calistirdiginizda certificate goremeyeceksiniz,

```
 openssl s_client -connect <server>:<port> 
```

Servername parametresini pass etmeniz gerekiyor
```
openssl s_client -connect <server>:<port> --servername <domain>
```

Ssl handsahke debug levela cektiyseniz asagidaki satiri handshake asamasinda goruyor olmaniz lazim servername parametresini
openssl komutuna verdiyseniz. 
```
Extension server_name, server_name: [type=host_name (0), value=<domain>]

```
nginx default olarak servername extensionini gondermiyor upstreame. Sizin bunu configure etmeniz lazim.
Ben asagidaki versiyon uzerinde test ettim.
```
bash-4.2# nginx -v
nginx version: nginx/1.16.1

```

Asagidaki parametreleri kullanarak bu konfigurasyonu saglayabilirsiniz:
```
proxy_ssl_name        <domain>;
proxy_ssl_server_name on;
```

## Basic Authentication
Eger api'yiniz basic authentication configurasyonu ile calisiyorsa ve nginx client certificate authenticaiton ile calisiyorsa 
subject forwarding calismayabilir. Cunku basic authentication base64 encoding kabul ediyor. Extract ettiginiz subjecti base64 encoding yapip api'ya gondermeniz gerekiyor. Bunun icin ben perl module kullandim nginx icerisinde.

*Basic authentication standart:*
base64(<username>:<password>)
 
 nginx configurasyonu:
Oncelikle modulu import etmeniz gerekiyor nginx.conf dosyanizin en basinda. Module yolunu  nginx -V ile gorebilirsiniz.
```
load_module /usr/lib64/nginx/modules/ngx_http_perl_module.so;
```

Simdi perl methodumuzu yazalim. q
```
perl_set $base64_subject 'sub {
  my $r = shift;
  $client_subject = $r->variable("ssl_client_s_dn");
  $client_subject =~ m/(O=.+)(,)(C=.+)/;
  my ($o, $d, $c) = ($1,$2,$3);
  # nginx trims whitspaces between coma and C= , no password is needed
  my $subject_with_space = $o.$d." ".$c.":";
  my $encoded = `echo $subject_with_space | base64`;
  return $encoded;
}';

```

location kisminda asagidaki gibi headeri set etmeniz gerekiyor
```
proxy_set_header Authorization        "Basic $base64_subject";
```
 

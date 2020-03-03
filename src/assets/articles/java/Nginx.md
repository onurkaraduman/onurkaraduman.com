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

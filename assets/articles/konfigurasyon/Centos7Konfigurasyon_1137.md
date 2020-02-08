<h2>Network Servisinin Yeniden Baslatilmasi</h2>

<code>sudo /etc/init.d/network restart</code>

<h2>Saat Dilimi Ayari</h2>
<pre>$ date
$ ls -l /etc/localtime</pre>
&nbsp;
<pre># timedatectl list-timezones | grep Istanbul</pre>
&nbsp;
<pre class="bash"># timedatectl set-timezone time_zone</pre>
<pre># date
 # ls -l /etc/localtime</pre>

<h2> X Forwarding Konfigürasyonu</h2>

<pre># vi /etc/ssh/sshd_config</pre>
&nbsp;

Bu satırları yourum satırı olmaktan çıkarın.
<pre>X11Forwarding yes
X11DisplayOffset 10
</pre>
&nbsp;
<pre># systemctl restart sshd</pre>
Şimdi artık MobaXTerm ile grafik arayuz programlar çalıştırabilirsiniz. Tabi ben windowstan linux ssh bağlantısı yapıyorum.
Eğer linux kullanıyorsanız aşağıdaki komut ile sunucuya bağlanabilir ve grafik arayuzlu program çalıştırdıgınızda kendi bilgisyarınızda gorebilirsiniz.
Ama windows kullanıyorsanız dedigim gibi MobaXTerm kullanabilirsiniz.
<pre>ssh -X root@server</pre>
Eğer xclock kuruluysa sisteminizde, aşağıdaki komutu çalıştırdıgınızda grafik arayuzlu saat uygulaması açılacaktır.
<pre># xclock</pre>

<h2>Kullanıcıya Sudo Hakkı Verilmesi</h2>

<pre>sudo usermod -aG wheel <span class="highlight">username</span>
</pre>

<h2>Belirli Bir Kullanici Icin SSH Login Disable Edilmesi</h2>
Kullanıcıya su harici, diğer tüm erişimleri kapatmak için.
<pre>
vi /etc/ssh/sshd_config
</pre>

Alttaki degisiklikleri yaptigimiz zaman kullaniciyi ssh loginine kapatmis olurus.
<pre>
Match User user1,user2,user3,user4
    PasswordAuthentication no
</pre>

Ama grup uzerinden bu işlemi yapmanız daha iyi olabilir. Ve su harici erişimi olmamasını istediginiz kullanıcıları bu gruba eklersiniz.
Tek tek kullanıcılar için yukardaki işlemi yapmamış olursunuz. Tabi linux konularında çok yeniyim. Eğer mümkün ise dedigim gibi grup ile yonetim best practice olabilir.

<pre>
Match Group users
    PasswordAuthentication no
</pre>
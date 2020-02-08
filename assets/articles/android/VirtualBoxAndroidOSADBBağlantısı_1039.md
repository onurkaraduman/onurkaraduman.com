Merhaba arkadaşlar bu yazımda android uygulama geliştirirken uygulamamızı denememize olanak sağlaması açısından virtualbox üzerine daha önceden kurmuş olduğumuz androidOS a nasıl bağlanıp uygulamamızı çalıştıracağımızı anlatacağım. Şunuda belirteyim, bilgisayarımda windows10 kullanıyorum.

Öncelikle VirtualBox üzerinde androidOS un kurulumu için şuradaki linkteki adımları takip edebilirsiniz:

http://www.howtogeek.com/164570/how-to-install-android-in-virtualbox/

Şu linkten ISO dosyasına ulaşabilirsiniz:

http://www.android-x86.org/download

Şimdi yapmamız gereken virtualBox üzerinde port forwarding yapmak.

Aşağıdaki ekrana ayarlar sekmesinden giriyoruz virtualBox üzerinden. Şimdi buradan Port Forwarding dialogunu açmamız gerekecek.

<a href="http://www.onurkaraduman.com/wp-content/uploads/network-settings.png"><img class="alignnone  wp-image-1041" src="http://www.onurkaraduman.com/wp-content/uploads/network-settings.png" alt="network-settings" width="533" height="350" /></a>

&nbsp;

Diyalogu açınca aşağıdaki gibi düzenlemeyi yapalım.

<a href="http://www.onurkaraduman.com/wp-content/uploads/port-forwarding.png"><img class="alignnone  wp-image-1042" src="http://www.onurkaraduman.com/wp-content/uploads/port-forwarding.png" alt="port-forwarding" width="463" height="244" /></a>

&nbsp;

Şimdi androidOS üzerinde birkaç ayar yapmamız gerekecek.  Android içerisinde eğer son versiyon 6 yı kurduysanız otomatik olarak emulator geliyor. Emulatoru açarak aşağıdaki komutları çalıştıralım.
<pre class="default prettyprint prettyprinted"><code><span class="pln">su
setprop service</span><span class="pun">.</span><span class="pln">adb</span><span class="pun">.</span><span class="pln">tcp</span><span class="pun">.</span><span class="pln">port </span><span class="lit">5555</span><span class="pln">
stop adbd
start adbd</span></code></pre>
&nbsp;

Şimdi bilgisayarımızdan bağlantıyı sağlayabiliriz.
<pre>
adb connect 127.0.0.1:5555
</pre>
dediğimiz zaman bağlantı sağlanmış olacak. Artık uygulamalrınız çalıştırabilir ve debug edebilirsiniz.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
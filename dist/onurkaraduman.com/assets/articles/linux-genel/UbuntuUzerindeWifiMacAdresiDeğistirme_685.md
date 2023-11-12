Oncelikle Macchanger-gtk programını indirmemiz <a href="http://pkgs.org/ubuntu-12.04/ubuntu-universe-i386/macchanger-gtk_1.1-4_all.deb.html">gerekiyo</a>.
indirdikten sonra

sudo apt-get  update
<pre>sudo apt-get install macchanger-gtk

//bu komutlardan sonra macchanger kurulmus oldu simdi macchanger ı calsıtıralım Alt+F2 tus kombinasyonuyla application a
gidiyoruz ve buraya macchanger-gtk yazıp gelen applicationu calıstırıyoruz.Mac adresi degistirmek icin oncelikle degistireceginiz
kartın network manager  ını kapatmanız gerekiyor.Bunu su komutla gerceklestirebiliriz

sudo ifconfig wlan0 down

bundan sonra mac adresimizi degistirebiliriz.Degistirdkten sonra tekrar
sudo ifocnfig wlan0 up 

komutuyla network manager'ı calıstırıyoruz.

</pre>
&nbsp;
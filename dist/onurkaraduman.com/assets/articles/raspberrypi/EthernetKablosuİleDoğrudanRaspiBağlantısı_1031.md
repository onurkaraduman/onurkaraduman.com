Merhaba arkadaşlar,

Sadece ethernet kablosu ile raspinize bağlantı sağlayabilir ve kullanabilirsiniz. Yani harici monitör klavye mause gerekmeden raspi ye erişebiliyorsunuz.

Yapmanız gereken SD karta raspbian kurulumu yaptıktan sonra cmdline.txt dosyasını açıp dosyanın en sonuna aşağıdaki ifadeyi ekleyin.
<pre>ip=192.168.2.16
</pre>
Artık raspi başladığı anda bu ip ye sahip olacak.

Şimdi ethernet kablosu ile raspi ve bilgisayarı birbirine bağlayalım. Ve raspi yi başlatalım. Şimdi bilgisayardan network connections panelini açalım.  Gördüğünüz gibi ethernet artık aktif olarak gözüküyor. Şimdi ethernete sağ tıklayıp properties diyelim. Sonra ipv4 kısmını açalım. Burada gerekli ip yapılandırmasını bilgisayarımız icinde yapacagız.

ip adres kısmına 192.168.2.15 olarak girelim. Ve tamam diyerek sayfaları kapatalım. Şimdi artık bilgisayarımız ile raspi aynı ağda. Putty veya mobaxterm ile artık 192.168.2.16 ip sine yani raspi ye ssh bağlantısı yapabilirsiniz.

ssh default olarak aktif olarak gelmiyor raspberry uzerinde. ssh adinda bos bir dosya olusturmaniz gerekecek cmdline.txt in bulundugu klasorde.

Eger wifi baglantisi yapmak istiyorsaniz asagidaki ifadeyi /etc/network/interfaces dosyasina eklemeniz gerekecek.

<pre>
auto wlan0
iface wlan0 inet dhcp 
                wpa-ssid <WIFI_NAME>
                wpa-psk <PASSWORD>
</pre>

&nbsp;
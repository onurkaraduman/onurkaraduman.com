Veri türü uyuşmazlıgı sorunu;

C# ile access veritabanın baglanırken bir cogumuzun karşılatıgı bir sorundur tarih sorunu hatta projedeki en cok zaman harcanan kısımdır.Bende bu zaman harcayanlardanım.Gercekten baya ugrastırdı beni.Ama sorunu kendi buldgum yontemle cozdum.Ve bu yontemi size anlatmak istiyorum.

öncelikle acces veritabanımızdaki bağlantı kuracagımız tarih alanını aşagıdaki gibi format kısmından shortDate olarak ayarlıyoruz.<!--more-->

<a href="http://www.onurkaraduman.com/wp-content/uploads/accesBaglanti.png"><img class="alignnone size-full wp-image-766" src="http://www.onurkaraduman.com/wp-content/uploads/accesBaglanti.png" alt="accesBaglanti" width="877" height="417" /></a>

Ve C# kod kısmına aşagıdaki kodu yazıp tarihe gore veriyi cekiyoruz.

[php]
string tarih=DateTimePicker.Value.Date.ToShortDating();
 OleDbCommand com = new OleDbCommand(&quot;select * from seansla where  seansKayitTarih like '&quot; + tarih + &quot;'&quot;, baglanti);
[/php]
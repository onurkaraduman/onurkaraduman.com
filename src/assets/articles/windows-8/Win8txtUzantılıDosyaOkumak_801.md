Proje gelistirirken kesinlikle ihtiyac duyacagınız bir işlem.Okuma kısmı.Win8 de olay biraz farklı bir hal almıs sanki cunku normal form uygulamalarında bu şekilde okuma yapmıyordum.Hem zaten burada async bir okuma olayı var.Bu da hata alımlarını artırıyor.Gercekten bu async olayı super birsey.Onceden aynı anda iki islem yapmak icin thread lere olusturman gerkiyordu.Ama async olayı buna bir çare diyebiliriz.Oncelikle  txt uzantılı dosyamızı projemize yeni bir klasor ekleyip onun icine olusturuyoruz.Bu islemi klasor ekledikten sonra klasore sag tıklayıp add-&gt;new item-&gt;text file secip isim veriyoruz.Sonucta şu sekilde bir sonuc cıkıyor.<!--more--><a href="http://www.onurkaraduman.com/wp-content/uploads/fileRead.png"><img class="alignnone size-full wp-image-802" title="fileRead" src="http://www.onurkaraduman.com/wp-content/uploads/fileRead.png" alt="" width="298" height="349" /></a>

Ben 2 adet text file ekledim.Ondan sonra dosyamızın icine bir miktar bilgi girelim.Sonra dosya okuma fonksiyonumuzu su sekilde yazalım;

[php]
&lt;div&gt;IList&lt;string&gt; CurrentFileBuffer = new List&lt;string&gt;();&lt;/div&gt;
&lt;div&gt;        public async void FileReadText()&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;            var folder = Windows.ApplicationModel.Package.Current.InstalledLocation;&lt;/div&gt;
&lt;div&gt;            var file = await folder.GetFileAsync(@&quot;MyFolder\Names.txt&quot;);&lt;/div&gt;
&lt;div&gt;            var read = await FileIO.ReadLinesAsync(file);&lt;/div&gt;
&lt;div&gt;            CurrentFileBuffer = read;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
[/php]

oncelikle global bir string turunden bir liste tanımlıyoruz.Bunu dizi gibi dusunebiliriz.Bunu tanımlamamızdaki amac dosyamızı satır satır okuyacagımız icin her satırı listenin bir elemanına atmaktır.Folder ile uygulamamızın bin klasorunun icindeki debug klasorunun icindeki apx klasorune giriyoruz.Su an o yol elimizde.Sonra file ile okumak istedigimiz dosaynın ismini giriyoruz.Read ile dosyamızı satır satır okuyoruz.Sonucta okunanları global tanımladıgımız currentFileBuffer ın icine atıyoruz.

Kullanmak istedgiimiz olayın altına bu fonksiyonu yazıp okuma işlemini yapabiliriz.
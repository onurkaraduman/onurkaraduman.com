&nbsp;

Ornek Veritabanımızı <a href="http://www.onurkaraduman.com/wp-content/uploads/deneme.rar">buradan </a>İndirebilirsiniz

&nbsp;
<h1>1.Sorgu</h1>
<span style="color: #993300;"><strong>--ad isminde bir degisken tanimlayip (@ad ifadesiyle yapyoz bunu) bu degiskene mehmet'i atadiktan sonra ismi degiskenimiz olan yani mehmet olan kaydi canan olarak guncelliyoruz</strong></span>

<strong><span style="color: #0000ff;">declare</span> @ad <span style="color: #0000ff;">varchar(30)</span></strong>
<strong><span style="color: #0000ff;">set</span> @ad=<span style="color: #808080;">'mehmet'</span></strong>
<strong><span style="color: #0000ff;">update</span> musteriler <span style="color: #0000ff;">set</span> ad='canan' <span style="color: #0000ff;">where</span> ad=@ad</strong>

&nbsp;
<h1>2.Sorgu</h1>
<span style="color: #993300;"><strong>--degisken kullanlarak insert ornegimizde tum alanlar icin degisken tanimliyoruz ve bu degiskenlere eklemek istedigimiz kayitlari giryoruz en son olarak da degiskenler yardimiyla insert yapyoruz</strong></span>

<strong><span style="color: #0000ff;">declare</span> @ad <span style="color: #0000ff;">varchar(<span style="color: #00ff00;">30</span>)</span>,</strong>
<strong> @soyad <span style="color: #0000ff;">varchar(<span style="color: #00ff00;">30</span>),</span></strong>
<strong> @adres <span style="color: #0000ff;">varchar(<span style="color: #00ff00;">30</span>),</span></strong>
<strong> @sehir <span style="color: #0000ff;">varchar(<span style="color: #00ff00;">30</span>)</span></strong>

<strong><span style="color: #0000ff;">set</span> @ad=<span style="color: #808080;">'mehmet'</span></strong>
<strong><span style="color: #0000ff;">set</span> @soyad=<span style="color: #808080;">'ali'</span></strong>
<strong><span style="color: #0000ff;">set</span> @adres=<span style="color: #808080;">'bayrampaşa'</span></strong>
<strong><span style="color: #0000ff;">set</span> @sehir ='<span style="color: #808080;">istanbul'</span></strong>

<strong><span style="color: #0000ff;">insert</span> <span style="color: #0000ff;">into</span> musteriler (ad,soyad,adres,sehir )</strong>
<strong><span style="color: #0000ff;">values</span> (@ad,@soyad,@adres,@sehir)</strong>
<h1>3.Sorgu</h1>
<span style="color: #993300;"><strong>--Degiskeni like ifadesiyle kullanima ornek</strong></span>

<strong><span style="color: #993300;">--@sehir adinda bi degisken tanimliyoruz </span></strong>

<strong><span style="color: #993300;">--bu degiskene bulmak istadigimiz musterinin sehirini yaziyoruz</span></strong>

<strong><span style="color: #0000ff;">declare</span> @sehir <span style="color: #0000ff;">varchar</span>(<span style="color: #00ff00;">30</span>)</strong>

<strong><span style="color: #0000ff;">set</span> @sehir ='<span style="color: #808080;">%s%</span>'</strong>

<strong><span style="color: #0000ff;">select</span> <span style="color: #0000ff;">*</span> <span style="color: #0000ff;">from</span> musteriler <span style="color: #0000ff;">where</span> sehir <span style="color: #0000ff;">like</span> @sehir</strong>
<h1>4.Sorgu</h1>
<strong><span style="color: #993300;">--degisken yardimiyla musteri sayisi bulma ornegi                                                                                                                                                                                    --@musteriSay adinda bi degisken tanimliyoruz                                                                                                                                                                                   --bu degiskene countla saydirdigimiz musteri sayisini atiyoruz ve printle ekrana yazdiriyoruz</span></strong>

<strong><span style="color: #0000ff;">declare</span> @musteriSay <span style="color: #0000ff;">int</span></strong>

<strong><span style="color: #0000ff;">select</span> @musteriSay=<span style="color: #0000ff;">COUNT</span>(*) <span style="color: #0000ff;">from</span> musteriler</strong>
<strong><span style="color: #0000ff;">print</span> 'musteri sayısı'</strong>
<strong><span style="color: #0000ff;">print</span> @musteriSay</strong>

&nbsp;
<h1>5.Sorgu</h1>
<span style="color: #993300;"><strong>--degisken yardimiyla if else kullanimi</strong></span>
<span style="color: #993300;"><strong>--bu sorguda maasi 3100 den buyuk olanlara maas cok yuksek </strong></span>
<span style="color: #993300;"><strong>--digerlerinede normal maas yazdircaz</strong></span>
<span style="color: #993300;"><strong>--ilk olarak @EBMaas isminde bir degisken tanimliyoruz</strong></span>
<span style="color: #993300;"><strong>--bu degiskene max fonksiyonunu kullanarak en buyuk maasi bulduruyoruz</strong></span>
<span style="color: #993300;"><strong>--kontrol ediyoruz bu maasi</strong></span>

<strong><span style="color: #0000ff;">declare</span> @EBMaas <span style="color: #0000ff;">int</span></strong>
<strong><span style="color: #0000ff;">select</span> @EBMaas =<span style="color: #0000ff;">MAX</span>(maas)<span style="color: #0000ff;">from</span> calisanlar</strong>

<strong><span style="color: #0000ff;">if</span> @EBMaas &gt;3100</strong>
<span style="color: #0000ff;"><strong>   Begin</strong></span>
<strong><span style="color: #0000ff;">        print</span> '<span style="color: #666699;">Maaş Çok yüksek'</span></strong>
<strong><span style="color: #0000ff;">        print</span> @EBMaas</strong>
<span style="color: #0000ff;"><strong>   End</strong></span>
<span style="color: #0000ff;"><strong>else</strong></span>
<span style="color: #0000ff;"><strong>    Begin </strong></span>
<strong><span style="color: #0000ff;">        print</span> '<span style="color: #666699;">Normal Maaş'</span></strong>
<strong><span style="color: #0000ff;">        print</span> @EBMaas</strong>
<span style="color: #0000ff;"><strong>     End</strong></span>
<h1>6.Sorgu</h1>
<strong><span style="color: #333300;">--musteri yaş ortalaması</span></strong>
<strong><span style="color: #333300;"> --@ortalama diye bir degisken tanimiyoruz</span></strong>
<strong><span style="color: #333300;"> --ortalama yasi bu degiskene atiyoruz</span></strong>
<strong><span style="color: #333300;"> --eger ortalama yas 35 den buyukse yas ortalamasi 35 in uzeride yaziyo</span></strong>
<strong><span style="color: #333300;"> --degilse yas ortalamasi kucuk yazsin</span></strong>

<strong><span style="color: #0000ff;"> declare</span> @ortalama <span style="color: #0000ff;">int</span></strong>
<strong><span style="color: #0000ff;"> select</span> @ortalama=<span style="color: #0000ff;">AVG</span>(yas) <span style="color: #0000ff;">from</span> musteriler</strong>

<strong><span style="color: #0000ff;"> if</span> @ortalama&gt;35</strong>
<span style="color: #0000ff;"><strong> Begin</strong></span>
<strong><span style="color: #0000ff;"> print </span> '<span style="color: #666699;">yas ortalaması 35in uzerinde</span>'</strong><span style="color: #0000ff;"><strong>
</strong></span><span style="color: #0000ff;"><strong> End</strong></span>
<span style="color: #0000ff;"><strong> else</strong></span>
<strong><span style="color: #0000ff;"> print  '</span><span style="color: #666699;">yas ortalaması küçük'</span></strong>
<h1>7.Sorgu</h1>
<span style="color: #333300;"><strong>--case kullanimi çağrı merkezi ornegi</strong></span>

<strong><span style="color: #0000ff;">select</span>  tus,</strong>
<span style="color: #0000ff;"><strong> case </strong></span>
<strong><span style="color: #0000ff;"> when</span> tus=1 <span style="color: #0000ff;">then</span> '<span style="color: #666699;">bilgi işleme hoşgelidiniz</span>'</strong>
<strong><span style="color: #0000ff;"> when</span> tus=2 <span style="color: #0000ff;">then</span> '<span style="color: #666699;">Muhasebeye hoşgeldiniz'</span></strong>
<strong><span style="color: #0000ff;"> when</span> tus=3 <span style="color: #0000ff;">then</span> <span style="color: #666699;">'insaan kaynaklarına hoşgeldiniz'</span></strong>
<strong><span style="color: #0000ff;"> else</span> <span style="color: #666699;">'operator için bekleyin'</span></strong>
<strong><span style="color: #0000ff;"> End</span> <span style="color: #0000ff;">as</span> sonuc <span style="color: #0000ff;">from</span> callcenter</strong>
<h1>8.Sorgu</h1>
<span style="color: #333300;">-</span><strong><span style="color: #333300;">-goto kullanımı  (14 yasindan kucuk olan musterileri silen sorg</span>u) </strong>
<strong><span style="color: #0000ff;">declare</span> @degisken int</strong>

<span style="color: #ff99cc;"><strong>ismek:</strong></span>
<strong><span style="color: #0000ff;">delete</span> musteriler <span style="color: #0000ff;">where</span> yas=@degisken</strong>
<strong><span style="color: #0000ff;">select</span> @degisken=<span style="color: #0000ff;">min</span>(yas) <span style="color: #0000ff;">from</span> musteriler</strong>

<strong><span style="color: #0000ff;">if</span> @degisken&lt;14</strong>
<strong><span style="color: #0000ff;">goto</span> <span style="color: #ff99cc;">ismek</span></strong>
<span style="color: #0000ff;"><strong>else</strong></span>
<strong><span style="color: #0000ff;">print</span> '<span style="color: #666699;">14 yaşından küçük kimse kalmadı'</span></strong>
<h1>9.Sorgu</h1>
<span style="color: #993300;"><strong>--user yazdır</strong></span>

&nbsp;

<strong><span style="color: #0000ff;">declare</span> @kullanıcıAd <span style="color: #0000ff;">varchar</span>(<span style="color: #00ff00;">30</span>), </strong>
<strong> @sayici <span style="color: #0000ff;">int</span>, @donguSayisi <span style="color: #0000ff;">int</span></strong>
<strong><span style="color: #0000ff;"> select</span> @sayici=0</strong>
<strong><span style="color: #0000ff;"> select</span> @donguSayisi=<span style="color: #0000ff;">COUNT</span>(*)<span style="color: #0000ff;">from</span> users</strong>
<strong><span style="color: #0000ff;"> while</span> (@sayici&lt;=@donguSayisi)</strong>
<span style="color: #0000ff;"><strong> begin</strong></span>
<strong><span style="color: #0000ff;"> select</span> @kullanıcıAd=kullancıAd <span style="color: #0000ff;">from</span> users </strong>
<strong><span style="color: #0000ff;"> where</span> ID=@sayici</strong>
<strong><span style="color: #0000ff;"> set</span> @sayici=@sayici+1</strong>
<strong><span style="color: #0000ff;"> print</span> @kullanıcıAd</strong>
<span style="color: #0000ff;"><strong> end </strong></span>

<strong><span style="color: #0000ff;"> Declare</span> @sayici int</strong>
<strong><span style="color: #0000ff;">set</span> @sayici=0</strong>
<strong><span style="color: #0000ff;">while</span> (@sayici&lt;5)</strong>
<span style="color: #0000ff;"><strong> Begin</strong></span>
<strong><span style="color: #0000ff;"> print</span> @sayici </strong>
<strong><span style="color: #0000ff;"> select</span> @sayici =@sayici +1</strong>
<span style="color: #0000ff;"><strong> End</strong></span>
<h1></h1>
&nbsp;

Fonksiyon olusturma konu anlatım slaytlarına <a href="http://www.onurkaraduman.com/wp-content/uploads/3-functions.pptx">buradan </a><a href="http://aff.indirdik.com/click?acid=18745&amp;amp%3Bbid=3&amp;amp%3Bpid=4078&amp;amp%3Burl=http%3A%2F%2Fwww.indirdik.com%2Ffirsat%2FEverest-2-4GHz-Kablosuz-Mouse%3Futm_source%3Daffiliate%26utm_medium%3Dbanner%26utm_campaign%3Ddaily_deal_4078%26utm_content%3Dacid_18745&amp;amp%3Brurl=http%253A%252F%252Fwww.istanbuluni.com%252F" target="_blank">ulasabilirsiniz </a>
<h1>1.ÖRNEK</h1>
<span style="color: #ff0000;">--toplama fonksiyonu</span>

<strong><span style="color: #0000ff;">create function</span> topla(@sayi1 <span style="color: #0000ff;">int</span>,@sayi2 <span style="color: #0000ff;">int</span>)</strong>
<strong><span style="color: #0000ff;">returns</span> <span style="color: #0000ff;">int</span></strong>
<strong><span style="color: #0000ff;">as</span> </strong>
<strong><span style="color: #0000ff;">begin</span></strong>
<strong><span style="color: #0000ff;">return</span> sayi1+@sayi2</strong>
<strong><span style="color: #0000ff;">end</span></strong>

<span style="color: #ff0000;">--calistiralim</span>

<strong><span style="color: #0000ff;">select</span> dbo.topla(2,3)</strong>
<h1>2.ÖRNEK</h1>
<span style="color: #ff0000;">--calisan no sunu girerek calisanin ismine ulasacagimiz bir fonksiyon</span>

<strong><span style="color: #0000ff;">create function</span> calisanadgetir (@calisanno <span style="color: #0000ff;">int</span>)</strong>
<strong><span style="color: #0000ff;">returns varchar</span> (<span style="color: #ffcc00;">50</span>)</strong>
<strong><span style="color: #0000ff;">as</span> </strong>
<strong><span style="color: #0000ff;">begin</span></strong>
<strong><span style="color: #0000ff;">return</span>(select c.ad+' '+c.soyad <span style="color: #0000ff;">as</span> adsoyad <span style="color: #0000ff;">from</span> dbo.Calisanlar c <span style="color: #0000ff;">where</span> c.calisanno=calisanno)</strong>
<strong><span style="color: #0000ff;">end</span></strong>

<span style="color: #ff0000;">--calistiralim</span>
<strong><span style="color: #0000ff;">select</span> calisanadgetir(2)</strong>
<h1>3.ÖRNEK</h1>
<span style="color: #ff0000;">--kdvli diye fonksiyonumuz bir adet money tipinden bir parametre alacak.</span>
<span style="color: #ff0000;">--bu aldigi parametreyi kdv li olarak hesaplayip sonucta money tipinden kdvli bi birimfiyat dondurcek</span>

<strong><span style="color: #0000ff;">create function</span> kdvli(@birimFiyat <span style="color: #0000ff;">money</span>)</strong>
<strong><span style="color: #0000ff;">returns</span> <span style="color: #0000ff;">money</span></strong>
<strong><span style="color: #0000ff;">as</span></strong>
<strong><span style="color: #0000ff;">begin</span></strong>
<strong><span style="color: #0000ff;">return</span> (@birimFiyat*1.18)</strong>
<strong><span style="color: #0000ff;">end</span></strong>

<span style="color: #ff0000;">--↑calistirilmasi↓</span>
<strong><span style="color: #0000ff;">select</span> <span style="color: #0000ff;">*</span>,dbo.kdvli(UnitPrice) <span style="color: #0000ff;">as</span> kdv <span style="color: #0000ff;">from</span> Products</strong>
<h1>4.ÖRNEK</h1>
<span style="color: #ff0000;">--dolardan turk lirasına tl den dolara donusum</span>

<strong><span style="color: #0000ff;">create function</span> doviz(@dolar <span style="color: #0000ff;">money</span>,@kur <span style="color: #0000ff;">money</span>)</strong>
<strong><span style="color: #0000ff;">returns money</span></strong>
<span style="color: #0000ff;"><strong>as</strong></span>
<span style="color: #0000ff;"><strong>begin</strong></span>
<strong><span style="color: #0000ff;">return</span> (@dolar*@kur)</strong>
<span style="color: #0000ff;"><strong>end</strong></span>

<span style="color: #ff0000;">--calistiralim</span>
<strong><span style="color: #0000ff;">select</span> dbo.doviz(<span style="color: #999999;">12.000.000,1.5</span>)</strong>
<h1>5.ÖRNEK</h1>
<span style="color: #ff0000;">--employee tablosundaki ulke isimlerini turcelestiren yani usa amerika uk ingiltere</span>

&nbsp;

<strong><span style="color: #0000ff;">create function</span> ulkeTurkcelestir(@ulke <span style="color: #0000ff;">nvarchar</span>(<span style="color: #ffcc00;">10</span>))</strong>
<strong><span style="color: #0000ff;">returns nvarchar</span>(<span style="color: #ffcc00;">20</span>)</strong>
<strong><span style="color: #0000ff;">as</span></strong>
<strong><span style="color: #0000ff;">begin</span></strong>
<strong><span style="color: #0000ff;">if</span>(@ulke='<span style="color: #999999;">UK</span>')</strong>
<strong><span style="color: #0000ff;">return</span> '<span style="color: #999999;">ingiltere</span>'</strong>
<strong><span style="color: #0000ff;">else</span> </strong>
<strong><span style="color: #0000ff;">return</span> '<span style="color: #999999;">america</span>'</strong>
<strong><span style="color: #0000ff;">end</span></strong>

<span style="color: #ff0000;">--calistiralim</span>
<strong><span style="color: #0000ff;">select</span> Country,dbo.ulkeTurkcelestir(Country) <span style="color: #0000ff;">from</span> Employees</strong>
<h1>6.ÖRNEK</h1>
<span style="color: #ff0000;">--amerikali personellerin listesini donduren fonksiyon</span>

<strong><span style="color: #0000ff;">create function</span> usaPersList()</strong>
<strong><span style="color: #0000ff;">returns</span> <span style="color: #0000ff;">table</span></strong>
<span style="color: #0000ff;"><strong>as</strong></span>
<span style="color: #0000ff;"><strong>return</strong></span>
<strong><span style="color: #0000ff;">select</span> <span style="color: #0000ff;">*from</span> Employees <span style="color: #0000ff;">where</span> Country='<span style="color: #999999;">USA</span>'</strong>

<span style="color: #ff0000;">--↑kullanisi↓</span>
<strong><span style="color: #0000ff;">select *from</span> usaPersList()</strong>

<span style="color: #ff0000;">--table deger dondurdugu icin from kullaniyoruz</span>
<h1>7.ÖRNEK</h1>
<span style="color: #ff0000;">--kullanıcı adını ve sifresini giren musterinin adını geteir</span>
<span style="color: #0000ff;">create function</span> adSoyadGetir
(
@kullaniciAdi <span style="color: #0000ff;">nvarchar</span>(<span style="color: #ffcc00;">15</span>),
@sifre <span style="color: #0000ff;">nvarchar</span>(<span style="color: #ffcc00;">15</span>)
)
<span style="color: #0000ff;">returns</span> <span style="color: #0000ff;">nvarchar</span>(<span style="color: #ffcc00;">25</span>)
<span style="color: #0000ff;">as</span>

<span style="color: #0000ff;">begin</span>

<span style="color: #0000ff;">declare</span> @adSoyad <span style="color: #0000ff;">nvarchar</span>(<span style="color: #ffcc00;">25</span>),@musteriNo <span style="color: #0000ff;">int</span>
<span style="color: #0000ff;">select</span> @musteriNO=kullaniciNo <span style="color: #0000ff;">from</span> kullanicilar <span style="color: #0000ff;">where</span> kullaniciAd=@kullaniciAdi <span style="color: #0000ff;">and</span> sifre=@sifre
<span style="color: #0000ff;">select</span> @adSoyad=ad <span style="color: #0000ff;">from</span> musteriler <span style="color: #0000ff;">where</span> musteriNo=@musteriNo
<span style="color: #0000ff;">return</span> @adSoyad
<span style="color: #0000ff;">end</span>

<span style="color: #ff0000;">--fonksiyonu kullan</span>
<span style="color: #0000ff;">select</span> dbo.adSoyadGetir('<span style="color: #999999;">ahmetAkcay</span>','<span style="color: #999999;">1234</span>')

&nbsp;
<h1><span style="color: #000080;"><strong>sinavda kesin cıkar!!!!!</strong></span></h1>
&nbsp;
<h1>8.ÖRNEK</h1>
<span style="color: #ff0000;">--urunId si girilen urunlerin bilgilerini getiren fonksiyon</span>

<span style="color: #ff0000;">--as den sonra bi satir islem oldugu icin begin end kullanmaya gerek yok (sadce return komutu var)</span>

<strong><span style="color: #0000ff;">create function</span> urunBilgiGetir(@urunId <span style="color: #0000ff;">int</span>)</strong>
<strong><span style="color: #0000ff;">returns</span> <span style="color: #0000ff;">table</span></strong>
<strong><span style="color: #0000ff;">as</span></strong>

<strong><span style="color: #0000ff;">return</span></strong>
<strong>(</strong>
<strong> <span style="color: #0000ff;">select *from</span> urun <span style="color: #0000ff;">where</span> urunId=@urunId</strong>
<strong>)</strong>

<span style="color: #ff0000;">--calıstirilmasi</span>
<strong><span style="color: #0000ff;">select *from</span> urunBilgiGetir(1)</strong>
<h1></h1>
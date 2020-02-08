&nbsp;

Sql hazır fonksiyonlar yasamımızı kolaylastırıyolar :)
<h1>1.ÖRNEK</h1>
--REPLACE FONKSİYONU

<span style="color: #0000ff;">SELECT</span> <span style="color: #0000ff;">REPLACE</span>
('<span style="color: #ff0000;">al su<span style="color: #993366;"> takatuka</span>lari <span style="color: #993366;">takatuka</span>ciya <span style="color: #993366;">takatuka</span>latmaya gotur'</span>,<span style="color: #ff0000;">'<span style="color: #993366;">takatuka</span></span>','<span style="color: #ff0000;">ayakkabi</span>')

<span style="color: #ff0000;">--burada ilk tırnakların arasinda islem yapacagimiz metin yaziyor.                                                                                                                                                 --2.tirnaklarin arasinda metinde bulunan degisiklik yapacagimiz kelime yazyo                                                                                                                          --3.tirnaklarin arasinda degisiklik yapcagimiz kelimeninn yerine yazacagimiz kellime yazyo</span>
<h1>2.ÖRNEK</h1>
--(L,T )TRİM  fonksiyonu

<span style="color: #ff0000;">--(L,R)TRIM(): Girilen stringin solundan veya sagindan</span>
<span style="color: #ff0000;">--boslugu kesmek icin kullanilan fonksiyonlardir.</span>
<strong><span style="color: #993366;"><span style="color: #0000ff;">SELECT</span>  <span style="color: #0000ff;">LTRIM</span>('    deneme')</span></strong>
<strong><span style="color: #993366;"><span style="color: #0000ff;">SELECT</span>  <span style="color: #0000ff;">RTRIM</span>('deneme   ')</span></strong>
<h1>3.ÖRNEK</h1>
--CHARINDEX( ) FONKSİYONU

<span style="color: #ff0000;">--CHARINDEX(): Girilen degerin bir string icerisinde </span>
<span style="color: #ff0000;">--kacinci sirada oldugunu gosteren fonksiyondur.</span>

<strong><span style="color: #0000ff;">SELECT CHARINDEX</span>('@','ergin@asdikjg.sdfon')</strong>
<h1>4.ÖRNEK</h1>
--SUBSTRİNG ( ) FONKSİYONU

<span style="color: #ff0000;">--SUBSTRING():Girilen stringin,belirli bir </span>
<span style="color: #ff0000;">--siradan belirli sayida degeri cekmemizi saglayan fonksiyonlardir.</span>
<strong><span style="color: #0000ff;">SELECT SUBSTRING</span>('deneme test',1,4)</strong>
<h1>5.ÖRNEK</h1>
<span style="color: #ff0000;">--DATEPART:Cok sık kullanılan fonksiyonlardan biridir. </span>
<span style="color: #ff0000;">--Tarihsel islemler uzerinde istedigimiz sonucu getirmemize olanak saglar.</span>

&nbsp;

<strong><span style="color: #0000ff;">SELECT</span>  <span style="color: #0000ff;">Datepart</span>(dd,<span style="color: #0000ff;">getdate</span>()) <span style="color: #ff0000;">-- o anki gunu getiren kod</span></strong>
<strong><span style="color: #0000ff;">SELECT </span> <span style="color: #0000ff;">Datepart</span>(dw,<span style="color: #0000ff;">getdate</span>())<span style="color: #ff0000;">--haftanin kacinci gunu oldugunu getirir</span></strong>
<strong><span style="color: #0000ff;">S</span><span style="color: #0000ff;">ELECT  Datepart</span>(dayofyear,<span style="color: #0000ff;">getdate</span>())<span style="color: #ff0000;">--yilin kacinci gunu oldugunu getirir</span></strong>
<strong><span style="color: #0000ff;">SELECT  Datepart</span>(week,<span style="color: #0000ff;">getdate</span>()<span style="color: #ff0000;">)--yilin kacinci haftasi oldugunu getirir.</span></strong>
<h1>6.ÖRNEK</h1>
--DATEDIFF( )  FONKSİYONU
<span style="color: #ff0000;">-- Girilen iki tarih arasindaki farki istenilen sekilde(ay,yil veya gun olarak) geri donduren fonksiyondur.</span>
<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">MM</span>,'<span style="color: #999999;">01.01.2010','05.06.2010</span>')</strong>
<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">YY</span>,'<span style="color: #999999;">01.01.2010</span>',<span style="color: #0000ff;">GETDATE</span>())</strong>
<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">DD</span>,'<span style="color: #999999;">01.01.2010</span>','<span style="color: #999999;">05.06.2010</span>')</strong>

<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">DD</span>,'<span style="color: #999999;">03.20.1981</span>',<span style="color: #0000ff;">GETDATE</span>())</strong>
<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">mm</span>,'<span style="color: #999999;">03.20.1981</span>',<span style="color: #0000ff;">GETDATE</span>())</strong>
<strong><span style="color: #0000ff;">SELECT Datediff</span>(<span style="color: #808080;">yy</span>,'<span style="color: #999999;">03.20.1981</span>',<span style="color: #0000ff;">GETDATE</span>())</strong>
<h1>7.ÖRNEK</h1>
HOST_NAME( ) FONKSİYONU

<span style="color: #ff0000;">--calistigi serveren ismini veren fonksiyondur</span>

<strong><span style="color: #0000ff;">select HOST_NAME</span>()</strong>
<h1></h1>
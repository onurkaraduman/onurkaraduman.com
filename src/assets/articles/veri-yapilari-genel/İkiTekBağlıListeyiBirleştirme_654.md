Elimizde olusturulmus 2 adet tek balı liste yapısı bulunuyor.Bizden istenen bu 2 tek baglı listeyi birlestirmek.
ornegin :
1.Tek baglı listemiz:4-&gt;5-&gt;1-&gt;3-&gt;6 olsun.Burada sayisal degerleri bizim listemizdeki elemanlar gibi dusunebilriz.
2.Tek baglı listemiz: 5-&gt;23-&gt;2-&gt;9  olsun.
Bu iki listedede sirali bir sekilde olusturmadık karısık olması su durumda birlestirme islemini anlamak icin daha faydalı olur.

[php]
&lt;div style=&quot;border: 3px coral solid;&quot;&gt;struct LIST
 {
 int data;
 struct LIST *next;
 };
 typedef struct LIST  list; //artık struct LIST i list diye kısaltmıs olduk&lt;/div&gt;
[/php]

yukardaki gibi veri yapımızın tasarımını olusturduk.Bu yapıdaki amac olusturacagımız liste yapısının elemanlarını bu yapı uzerinden olusturmak.

Simdi iki tek baglı listemizi birlestiren recursive fonksiyonumuzu yazalım.(Tum kodarı yazmayacağım sadece birlestirme yapan kod blogunu yazacağım)

[php]
&lt;div style=&quot;border: 3px coral solid;&quot;&gt;void Birlestir(list  *a, list  *b)
 {
 list *c = (list*)malloc(sizeof(list));//yeni bir liste tanımladık
 c=a;//a nın icindeki veri bizim kok elemanımız oldugu icin bu elemanı kaybetmemek icin yeni olusturdugumuz c ye atııyoruz
 if(c-&gt;next!=NULL)
 Birlestir(a-&gt;next);//en son elemanı bulana kadar fonksiyon kendini yeniliyorelse
 c-&gt;next = b;//son elemana gelince ,son elemanın nextine bizim 2.listemizin ilk elemanını atıyoruz}&lt;/div&gt;
[/php]
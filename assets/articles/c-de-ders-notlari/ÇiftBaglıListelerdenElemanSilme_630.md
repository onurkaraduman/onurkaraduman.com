Bu yazımızda en çok hata alınan bağlı liste fonksiyonlarından olan silme fonksiyonu uzerinde duracagız.Burada kullanacağımız bağlı liste cift bağlı listedir.Ama aynı mantıkla tek baglı listeyede uyarlayabilririz silme fonksiyonunu.İlk olarak yapacagımız listenin yapısını tanımlamakla ise baslayalım:

struct LIST
{

char ad[20];
char soyad[20];
char adres[50];
char tel[12];
struct LIST *sag;
struct LIST *sol;

};

Bu şekilde icine 4 adet string kayıt ve iki adet adres alan yapımızı olusturuyoruz.Sadece silme fonksiyonunu yapacagımız icin ekleme fonksiyonunu ve main fonksiyonunu yazmıycam.

Listeden eleman silme fonksiyonumuzun mantıgı: Kullanıcı silinecek kayıtın adını girecek ve o isimdeki butun kayıtlar silinecek.

Bu islemi yaparken tum ihtimalleri goz onunde bulundurmalıyız ki hatalarka karsılasmayalım.Bu ihtimalleri sayacak olursak :mesela kullanicinin girdigi ad, listenin birinci elemanı olabilir veya ortada bir elemanı yada elemanları olabilir veya en son ihtimal olarak bu girilen isim listenin son elemanı olabilir.İhtimaller çogaldıkca if ler artacaktır.

O isimdeki tum kayıtlara ulasıp o kayıtların hepsini silecegimiz icin while dongusu acıyoruz.Bu while dongusu listenin sonuna gelene kadar donsun
while(l!=NULL)
{

Tabi baslangıcta l degiskenine listenin en basındaki elemanı atadık.


if(strcmp(l-&gt;ad,ad)==0)
{

Burada girilen ad yani parametre olarak aldıgmız ad l nin adına esit mi diye sorgulama yapıyoruz.Burada kullanılan strcmp fonksiyonu icine 2 adet parametre alan tabi bu parametreler char dizileri olmak zorunda,sonra bu aldıgı iki karakter dizisini karsılastıran ve karsılastırma sonucu eger iki parametre birbirine eşitse 0(sıfır) , birinci parametre buyukse 1 (karakter dizilerindeki buyukluk kucukluk mantıgı alfabetik olarak hangjsi daha sonra gelyosa o buyuktur) ,birinci parametre ikinci parametreden kucuk ise -1 donduren bir fonksiyondur.Bu fonksiyonun sadece karakter dizilerinde kullanılacagı unutulmamalıdır.Tabi bu fonksiyonu kullanabilmek icin string.h kutuphanesini tanımlamıs olmak lazım.

Eger girilen ad l nin adına eşitse bundan sonra ihtimalleri if le sıralamak kalıyor.
Birinci ihtimalimiz l nin solu bosmu? Yani l nin solunda bir eleman varmı yokmu.Eger l nin solunda bir eleman yoksa l en baştaki elemandır.Ve burada silme yaparken en baştaki elemanı silmemiz lazım.
if(l-&gt;sol==NULL)
{

Birinci ihtimalin içindeki ihtimallere bakacak olursak.l nin solu boştu ve aynı zamanda sagıda boş ise dogrudan dogruya en baştaki elemanı siliyoruz.Aslında tam olarak silinmis olmuyor.Free kullanmamız lazım ama bir turlu free yi hatasız bir sekilde yapamadıgım icin sadece elemanı NULL yapıyorum.Silinmis gibi gozukuyor ama aslında burada elemanın ici NULL yapılıyor ve bellekte yeri hala muhafaza ediliyor.Bunu ozellikle yapmadım sadece free nin tam olarak kullanımını bu koda oturtamadıgım icin boyle oldur.
if(l-&gt;sag==NULL)
{

Hem l nin solu bos hemde sagı boş ise bu listemizde tek bir eleman var demektir o da en baştaki elemandır ve direk en bastaki elemanı sileriz.
enBastakiEleman=NULL;
l=NULL;

}

Eger l nin solu NULL ama sagı NULL degilse yani listede 1den fazla eleman varsa,yine en bastaki eleman silinecek ve  su an en baştaki eleman başlangıctaki en bastaki elemanın sagindaki eleman olacak.Yani sıfırıncı elemanı sildik ve birinci eleman en baştaki yani sıfırıncı eleman oldu.Tabi en baştaki elemana atama yaptıktan sonra su anki en bastaki elemanın solunu NULL yapıyoruz.Bu zaten listenin en basındaki eleman mantıgı.
else
{
enBastakiEleman=l-&gt;sag;
enBastakiEleman-&gt;sol = NULL;
l=l-&gt;sag;
}

Ve en baştaki eleman ihtimalini bitirdikten sonra bi sonraki ihtimalimiz girilen ad ın en son elemanda olma ihtimalidir.Yani l nin sagının NULL olma ihtimalidir.Bu durumda l nin solundaki elemanın sag işaretcisini yani sagını gosteren adresini NULL yapıyoruz.Sonrada l yi NULL yapıyoruz.
}
else if(l-&gt;sag==NULL)
{
l-&gt;sol-&gt;sag=NULL;
l=NULL;

}

Son ihtimal olarak girilen ad parametresinin ortada bir liste elemanına esit olmasıdır.Burası karısık gibi gorunsede basittir  l nin sol elemanın sag adresine l nin sag adresini, l nin sag elemanının sol adresinede l nin sol adresini atyoruz
ve sonuctada l yi NULL yapyoruz.
else
{
list = l-&gt;sag;
l-&gt;sol-&gt;sag=l-&gt;sag;
l-&gt;sag-&gt;sol=l-&gt;sol;
l = NULL;
l=list;
}
Yukardaki tum ihtimallerde kayıt silindigi icin silinenKayitSayisini bir artırıyoruz.Cunku kullanıcıya kactane kayıt silindigini gostermek istiyoruz.


silinenKayitSayisi++;
}

Eger  girilen ad l nin adina esit degilse while dongusunun listede gezebilmesi icin l ye l nin sag elemanı atıyoruz.Yani bir sonraki elemana geciyoruz.Buradaki mantık sırayla girilen adı listenin elemanlarında aramaktır.
else
{
l=l-&gt;sag;
}
}

-----while dongusunun bitisi------

Ve geriye silinenKayitSayisini donduruyoruz.


return silinenKayitSayisi;
}
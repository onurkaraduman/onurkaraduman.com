c dilinde zorlanılacak bir diğer konu structre'lardır.Aslına bakılırsa ilk başta baya karışık bir konudur ama sonradan sonraya mantığı çözulmeye ve structre yapısı kafada canlanmaya başlayacaktır.

Genelde bilgi saklama işlemlerinde kullanılan structre larda işlem yaparken pointer'lardan çokca faydalanacıgız.Aslında pointer'ı tam anlamamış olanlar için pointer lara değinecek olursak pointer herhangi bir değişkenin adresinin  saklandıgı bir başka değişkendir.Bunu şoyle açıklayabiliriz mesela int tipinde bir değişken tanımladık
int a;
şeklinde, burada  bellekten yani ram'den bir miktar yer ayırmıs olduk.Ama bellegin neresinden yer ayırdıgımızı biz bilmiyoruz bu tanımlamada buna da gerek yoktur zaten.Ama oyle durumlar gelecekki bu tanımladıgımız degiskenin adresini kullanacagız yani ram'de bulundugu yer uzerinden bu degiskene ulasacagız.
mesela:
int a=1;
int *aninAdresi;   //burada bir pointer tanımladık

burada bi adet int tipinde bir degisken ve int tipli bir degiskenin adresini gosterecek bir pointer tanımladık.
Başlangıçta bu tanımladıgımız adresin içi bostur.Icını doldurmak istersek;

aninAdresi = &amp;a;

a degiskenimizin adresine ulasmak için &amp; işareti kullanılır.Ve buradada a'nın adresini tanımladıgımız adresin içine atıyoruz .Simdi aninAdresi isimli pointerımız gercekten su anda a'yı gosteriyor.

şu durumda a'ya iki türlu ulaşabiliriz.

1) printf("%d",a);

2) printf("%d",*aninAdresi);

Tanımladıgımız pointerı ekrana direk yazdırırsak yani;
printf("%d",aninAdresi);//burada ekrana 0xfcfff die birsey yazdıracak yani bu yazdırdıgı a'nın bellekte tutuldugu adrestir.

Tanımladıgımız pointerın içindeki degeri ekrana yazdırmak için ise ;
printf("%d",*aninAdresi);//bu şekilde adresin içinde bulunan degere ulaşıyoruz.

Pointer kullanmadaki mantık dogrudan degişken uzerinde degisiklikler yapmaktır.
Ornegin bir fonksiyon yazıyoruz ve fonksiyonda 1 adet parametre veriyoruz.Sonucta bu verdigimiz parametrede bir degisken oldugu için ana programda yani main de parametre olarak girecegimiz degeri degistirmeyecek.Girilen degerde herhangi bir degisiklik yapamıycaz.Ama
bu fonksiyonun parametresi bir adres olursa parametre olarak main foksiyonunda bir degiskenin adresini parametre olarak verdigimizde foknsiyon bu verilen deger uzerinde degisiklik yapabilir. Yani tanımlanan bir adrese heryerden ulaşılabilir.Ama bir degişkene heryerden ulaşamazsın.Bu kısıtlamayı ortadan kaldırmak için pointer kullanılır.

Structerlara gelecek olursak tekrardan structer ları normal bir degisken tipi olarak dusunebiliriz.Yani int tipini dusundugumuz zaman int tipi bellekte 4 byte lık yer kaplar ve içerigi daima sayı olmalıdır.Structerlarda buna benzer yani ozel olarak olusturabilecegimiz veri tipidir.

struct ogr {

char name[20];
char ogrID[20];
float grade;
}ogrenci ;

bole bir structer tamlaması yaptıgımız zaman "struct ogr" diye yeni bir tip oluşturmus olduk.Bu tip içine name ,ogrId ve grade diye degiskenler alıyor.Boyut olarakda sizeof(struct ogr) kadar bellekte yer kaplıyor.(bu sekildeki sizeof() kullanımı boyutunu bilgisayarın bilemedigi  yani boyutu belli olmayan veri tiplerinde kullanılır).
en sonunda ogrenci yazmamızın neden artık struct ogr yerine dogrudan ogrenci kullanabiliriz demektir.

Şimdi bu yapıya veri girmeye çalışalım:

printf("Isim: ");
scanf("%s",ogrenci.name);//dikkat ederseniz %c degilde %s kullandık.Çunku char dizileri string olarak ifade edilir.Ek olarak ogrenci.name 'in başına &amp; işaretinide koymadık çunku dizilerde bu işaret konulmuyor.

printf("\n\n Numara: ");
scanf("%s",ogrenci.ogrID);

printf("\n\n Not: ");
scanf("%f",&amp;ogrenci.grade);

Şu anda struct 'ımızı doldurmus bulunmaktayız.
Sırayla tum verileri yazdırmak istersek :

printf("%s",ogrenci.name);
printf("%s",ogrenci.ogrID);
printf("%f",ogrenci.grade);

ve yazdırma işlemini de yaptırdık.

Ek olarak struct 'ın boyutunu ogrenmek isterseniz ekrana:

printf("%d",sizeof(ogrenci));

diye yazdırabiliriz.

yaptıgım biraz daha karmaşık kod ornegini <a href="http://www.onurkaraduman.com/wp-content/uploads/bugracim.rar">buradan</a> indirebilirsiniz.

&nbsp;
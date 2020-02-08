İndex  yapısı veri yapılarında hatta daha ozel olarak veri tabanında kullanılan bir yapıdır.Genel olarak bu yapının temel amacı arama yaparkenki zamanı kısaltmaktır.Mesela:

Bir veridosyamız olsun bu veri dosyamıza veri eklemek istiyoruz  ve herhangi bir kayıt ekledik diyelim bu kayıt once veridosyamıza ekleniyor sonra indexleme yapmıssak index dosyamıza ekleniyor.İndex dosyasına eklenme amacı tamamen arama yaparken zamandan kazanmaktır.Burdanda cıkacak sonuc index dosyamızdaki kayıt sayisi veri dosyamızdakinden cok cok azdır bole olmazsa zaten arama yaparkenki kazanacagımız zaman diye bisey olmaz ,fazladan zaman kaybetmis bile olabiliriz.Bu yuzden index dosaymızdaki veri, veri dosyamızdaki veriden kat kat daha dusuktur.<!--more-->

Simdi Tersine cevrilmis dosya index yapımızı bir ornek uzerinde acıklayalım;

Veri Dosyamız:

<a href="http://www.onurkaraduman.com/wp-content/uploads/11.jpg"><img class="alignnone size-full wp-image-695" title="1" src="http://www.onurkaraduman.com/wp-content/uploads/11.jpg" alt="" width="490" height="67" /></a>

ilk olarak veri dosyamıza Ahmet kaydınını ekledik.Buradaki indexlemeyi Ad alanına gore yapalım.Bu kaydı veri dosyamıza ekledikten sonra hemen gidip bu kaydın basharfine gore index dosyamızada eklemeliyiz.Bunu yaparken once ekledigimiz kaydın basharfıne baktık,sonra bu basharf index dosyamızda varmı diye bakıyoruz eger yoksa bu basharfi index dosyamıza asagıdaki gibi ekleyip ilkID kısmına verimizin ,yukardaki veri dosyasındaki Id yi ,sonID kısmına da eger A basharfine sahip baska kayıt yoksa ilkId kısmındaki ID yi ekliyoruz.<a href="http://www.onurkaraduman.com/wp-content/uploads/1.jpg">
</a><a href="http://www.onurkaraduman.com/wp-content/uploads/21.jpg"><img class="alignnone size-full wp-image-697" title="2" src="http://www.onurkaraduman.com/wp-content/uploads/21.jpg" alt="" width="306" height="67" /></a>

<a href="http://www.onurkaraduman.com/wp-content/uploads/1.jpg">S</a>imdi Mehmet kaydımızı veri dosyamıza ekleyelim;

<a href="http://www.onurkaraduman.com/wp-content/uploads/v21.jpg"><img class="alignnone size-full wp-image-699" title="v2" src="http://www.onurkaraduman.com/wp-content/uploads/v21.jpg" alt="" width="490" height="86" /></a>

Bu kaydı ekledikten sonra hemen index dosyamıza da eklmemiz lazım;

<a href="http://www.onurkaraduman.com/wp-content/uploads/i2.jpg"><img class="alignnone size-full wp-image-700" title="i2" src="http://www.onurkaraduman.com/wp-content/uploads/i2.jpg" alt="" width="304" height="86" /></a>

Yukardaki aynı mantıkla M basharfinide Ahmet deki mantıkla aynı sekilde index sayfamıza ekledik.

Simdi Ali kaydını ekleyelim;

<a href="http://www.onurkaraduman.com/wp-content/uploads/v31.jpg"><img class="alignnone size-full wp-image-702" title="v3" src="http://www.onurkaraduman.com/wp-content/uploads/v31.jpg" alt="" width="489" height="106" /></a>

Veri dosyamıza kaydeddikten sonra simdi bu kaydı index sayafamıza kayıt edelim.

Oncelikle kaydedecegimiz verinin basharfini alıyoruz yani basharfimiz A. Sonra index sayfamızda A basharfinde kayıt varmı diye bakıyoruz .A harfini daha once eklendigini gorduk .Simdi index dosyamızdaki A harfinin ilkID sine veriDosyamızda gidiyoruz.Yani veri dosyamızda ID si 1 olan kayda gidiyoruz.Bu kayıtın Gid sine bakıyoruz eger null ise buraya ekleyecegimiz kaydın ID sini yani Ali nin ID sini yazıyoruz.bunu yaptıktan sonra index dosyamızda da sonID kısmına Ali nin ID sini yazıyoruz.

<a href="http://www.onurkaraduman.com/wp-content/uploads/i3.jpg"><img class="alignnone size-full wp-image-703" title="i3" src="http://www.onurkaraduman.com/wp-content/uploads/i3.jpg" alt="" width="305" height="86" /></a>index dosyamızın en son hali bu olur.

Veri dosyamızın En son halide aşagıdaki gibi olur.

<a href="http://www.onurkaraduman.com/wp-content/uploads/v4.jpg"><img class="alignnone size-full wp-image-704" title="v4" src="http://www.onurkaraduman.com/wp-content/uploads/v4.jpg" alt="" width="491" height="105" /></a>

<a href="http://www.onurkaraduman.com/wp-content/uploads/1.jpg">S</a>imdi son olarak  Ahmet'i ekleyelim;

<a href="http://www.onurkaraduman.com/wp-content/uploads/v5.jpg"><img class="alignnone size-full wp-image-705" title="v5" src="http://www.onurkaraduman.com/wp-content/uploads/v5.jpg" alt="" width="488" height="129" /></a>

Veri dosyamıza kaydı ekledikten sonra index dosyamızda da gerekli duzenlemeyi yapmalıyız.Oncelikle basharfimizi aldık A.Bu basharf index dosyamızda var mı diye bakıyoruz var mı ,evet var.Sonra index sayfamızdaki bu basharfin ilkID sine yani 1.kayda veri dosyamızda gidiyoruz.Bu kaydın Gid sine bakıyoruz eger null degil ise burada yazan ID ye yani 3.kayda gidiyoruz.Şimdi bu kaydın yani Ali nin Gid sine gidiyoruz null oldugu icin en son ekledigimiz kaydın yani Ahmet 'in ID sini Ali'nin Gid sine ekliyoruz.

İndex Dosyamız:

<a href="http://www.onurkaraduman.com/wp-content/uploads/i4.jpg"><img class="alignnone size-full wp-image-706" title="i4" src="http://www.onurkaraduman.com/wp-content/uploads/i4.jpg" alt="" width="303" height="84" /></a>

Veri dosyamızın en son hali asagidaki gibi olur.

<a href="http://www.onurkaraduman.com/wp-content/uploads/v6.jpg"><img class="alignnone size-full wp-image-707" title="v6" src="http://www.onurkaraduman.com/wp-content/uploads/v6.jpg" alt="" width="490" height="129" /></a>

Sonuc olarak bir ekledigimiz kayıtın basharfınden daha once eklenmis ise bu basharfın ID sine veri dosyamızda gidip bu kaydın Gid sine bakıyoruz ve Gid si null olana kadar eklenecek basharfdeki tum kayıtları dolasıyoruz.

<strong>Arama Yapmak:</strong>

Veri Dosyamızda Ahmet 'i arayalım.

1.Adım: Oncelikle index dosyamızda A basharfı bulunur ve bu basharfın karsısındaki ilkID ye gidilir
2.Adım: Veri Dosyamızda bu ilkID bulunduktan sonra once  bu kayda Ahmet mi diye bakılır eger Ahmet degilse Gid deki kayda gidilir
3.Adım: Ahmet bulunana kadar yada Gid null olana kadar bu eylem devam eder

Gordugumuz gibi Ahmet kayıtını bulmak icin tum veri dosyamızdaki kayıtlar yerine sadece A ile baslayan kayıtlara baktık.Yani arama zamanını dusurduk.

[php]
#include <conio.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define cls system("CLS")
#define sign printf("\n-----------------We are a team--------------------\n");
struct TBook
{
	int id;
	char author[40];
	char title[24];
	char isbn[10];
	int nextAId;
	int nextTId;
	char *key(){return isbn;}
}book;
//typedef struct TBook Book;
void authorIndexInsert(char charakter[40],int id);
void titleIndexInsert(char charakter[24],int id);
void authorIndexDelete(char charakter[40],int id);
void titleIndexDelete(char charakter[24],int id);
void login();
void turnHomePage();
void searhcOper();
void userMenu();
void adminGiris();
void turnAdminPage(int a);
int hashFunction1(char charakter[40])
{
	int calculater=0;
	int i =0;
	while (charakter[i]!='\0')
	{
		calculater += charakter[i];
		i++;
	}
	calculater=calculater%50;
	return calculater;
}
int hashFunction2(char charakter[24])
{
	int i = 0;
	int result=0;
	while (charakter[i]!='\0')
	{
		result += charakter[i];
		i++;
	}
	result *=result;
	return result%50;
}
//File Creat Opreations--------------
FILE *dataFileCreate()
{
	FILE *file;
	if ((file=fopen("data.txt","r+"))==0)
	{
		printf("File cannot be opened!\n");
		return NULL;
	}
	else
	{
		return file;
	}
}
FILE *authorIndexFileCreate()
{
	FILE *file;
	if ((file=fopen("indexAuthor.txt","r+"))==0)
	{
		printf("File cannot be opened!\n");
		return NULL;
	}
	else
	{
		return file;
	}
}
FILE *titleIndexFileCreate()
{
	FILE *file;
	if ((file=fopen("indexTitle.txt","r+"))==0)
	{
		printf("File cannot be opened!\n");
		return NULL;
	}
	else
	{
		return file;
	}
}
//--------------
//File Insert
void fileInsert()
{

	FILE *f = dataFileCreate();
	fseek(f,-90,SEEK_END);
	fscanf(f,"%d",&book.id);
	//printf("There are %d record in dataFile\n",book.id);
	if (book.id==0)
	{
		book.id = 1;//eger baslangicta kayit yoksa id yi 1 den başlat
	}
	else
	{
		book.id +=1;//eger baslangicta kayit varsa en son id yi al 1 artır

	}
	int id;
	printf("Author Name:");scanf("%s",book.author);
	printf("\nTitle:");scanf("%s",book.title);
	printf("\ISBN:");scanf("%s",book.isbn);
	book.nextAId = 0;
	book.nextTId = 0;
	fseek(f,0,SEEK_END);
	fprintf(f,"\n");

	fprintf(f,"%2d%10s%25s%20s%20d%12d",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
	id = book.id;
	char ch[40];
	strcpy(ch,book.author);
	titleIndexInsert(book.title,id);
	authorIndexInsert(ch,id);
	fclose(f);


}
void dataFileList()
{
	FILE *f = dataFileCreate();
	int i = 1;
	int recordNumber = 0;
	printf("%s%10s%20s%15s%15s%12s\n","ID","Author","Title","ISBN","NextAID","NextTID");
	char charakter='\0';
	while (!feof(f))
	{
		fseek(f,i*91,SEEK_SET);
		fscanf(f,"\n%2d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		fscanf(f,"%c",&charakter);
		if (charakter=='#')
		{

		}
		else
		{
			printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
			recordNumber++;
		}
		i++;
	}
	printf("\n\nTotal Record:%d",recordNumber);
}
void dataAuthorSearch(char author[40])
{
	int variable;
	int dataID;
	int hash = hashFunction1(author);
	FILE *f = authorIndexFileCreate();
	fseek(f,hash*23,SEEK_SET);
	fscanf(f,"\n%2d%19d",&variable,&dataID);
	if (dataID==0)
	{
		printf("cannot find like this author name!!");
	}
	else
	{
		char charakter='\0';
		int recordNumber = 0;
		FILE *finsert = dataFileCreate();
		fseek(finsert,(dataID)*91,SEEK_SET);
		fscanf(finsert,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);

		printf("%s%10s%20s%15s%15s%12s\n","ID","Author","Title","ISBN","NextAID","NextTID");
		while (book.nextAId!=0)
		{

			fscanf(finsert,"%c",&charakter);
			if (charakter=='#')
			{

			}
			else
			{
				if (strcmp(author,book.author)==0)
				{
					printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
					recordNumber++;
				}


			}
			fseek(finsert,(book.nextAId)*91,SEEK_SET);
			fscanf(finsert,"\n%d%10s%25s%20s%20d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);

		}
		fscanf(finsert,"%c",&charakter);
		if (charakter=='#')
		{
			printf("cannot find like this author name!!");
		}
		else
		{

			if (strcmp(author,book.author)==0)
			{
				printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
				recordNumber++;
				printf("\n\nTotal Record:%d\n",recordNumber);
			}
			else
			{
				printf("cannot find like this author name!!");
			}
		}


	}
}
void authorSearchProgress()
{
	char author[40];
	printf("Author Name:");scanf("%s",author);
	dataAuthorSearch(author);
	
}
void dataTitleSearch(char title[24])
{
	int variable;
	int dataID;
	int hash = hashFunction2(title);
	FILE *f = titleIndexFileCreate();
	fseek(f,hash*23,SEEK_SET);
	fscanf(f,"\n%2d%19d",&variable,&dataID);
	if (dataID==0)
	{
		printf("cannot find like this author name!!");
	}
	else
	{
		char charakter = '\0';
		int recordNumber = 0;
		FILE *finsert = dataFileCreate();
		fseek(finsert,(dataID)*91,SEEK_SET);
		fscanf(finsert,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		printf("%s%10s%20s%15s%15s%12s\n","ID","Author","Title","ISBN","NextAID","NextTID");
		while (book.nextTId!=0)
		{

			fscanf(finsert,"%c",&charakter);
			if (charakter=='#')
			{

			}
			else
			{
				if (strcmp(title,book.title)==0)
				{
					printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
					recordNumber++;
				}
			}
			fseek(finsert,(book.nextTId)*91,SEEK_SET);
			fscanf(finsert,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		}

		fscanf(finsert,"%c",&charakter);
		if (charakter=='#')
		{
			printf("cannot find like this author name!!");
		}
		else
		{
			if (strcmp(title,book.title)==0)
			{
				printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
				recordNumber++;
				printf("\n\n%d record were found",recordNumber);
			}
			else
			{
				printf("cannot find like this author name!!");
			}
		}



	}
}
void titleSearchProgress()
{
	char title[24];
	printf("Title:");scanf("%s",title);
	dataTitleSearch(title);
}
void authorIndexInsertInit()
{
	FILE *f = authorIndexFileCreate();
	for (int i = 0; i < 50; i++)
	{

		fprintf(f,"%2d%19d\n",i,0);
	}
}
void authorIndexInsert(char charakter[40],int id)
{
	int variable=-1;
	int variable2 = -1;
	int dataID=-1;
	int indexNumber = hashFunction1(charakter);
	FILE *f  = authorIndexFileCreate();

	if (indexNumber==0)
	{
		indexNumber=1;
	}
	fseek(f,(indexNumber)*23,SEEK_SET);//bir satirin toplam boyutu 20 karakter.biz indexnumber'inci satira bu şekilde gideriz
	fscanf(f,"\n%2d%19d",&variable,&dataID);
	if (dataID==0)
	{
		fseek(f,(indexNumber)*23+20,SEEK_SET);
		fprintf(f,"%d",id);

	}
	else
	{
		FILE *finsert = dataFileCreate();
		fseek(finsert,(dataID)*90,SEEK_SET);
		fscanf(finsert,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		while (book.nextAId!=0)
		{
			fseek(finsert,(book.nextAId)*(91),SEEK_SET);
			fscanf(finsert,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		}
		fseek(finsert,-13,SEEK_CUR);
		fprintf(finsert,"%d",id);
		fclose(finsert);

	}
	fclose(f);


}
void titleIndexInit()
{
	FILE *f = titleIndexFileCreate();
	for (int i = 0; i < 50; i++)
	{

		fprintf(f,"%2d%19d\n",i,0);
	}
}
void titleIndexInsert(char charakter[24],int id)
{
	int variable=-1;
	int variable2 = -1;
	int dataID=-1;
	int indexNumber = hashFunction2(charakter);
	FILE *f  = titleIndexFileCreate();

	if (indexNumber==0)
	{
		indexNumber=1;
	}
	fseek(f,(indexNumber)*23,SEEK_SET);//bir satirin toplam boyutu 20 karakter.biz indexnumber'inci satira bu şekilde gideriz
	fscanf(f,"\n%2d%19d",&variable,&dataID);
	if (dataID==0)
	{
		fseek(f,(indexNumber)*23+20,SEEK_SET);
		fprintf(f,"%d",id);

	}
	else
	{
		FILE *finsert = dataFileCreate();
		fseek(finsert,(dataID)*91,SEEK_SET);
		fscanf(finsert,"%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		while (book.nextTId!=0)
		{
			fseek(finsert,(book.nextTId)*(91),SEEK_SET);
			fscanf(finsert,"%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		}
		fseek(finsert,-1,SEEK_CUR);
		fprintf(finsert,"%d",id);
		fclose(finsert);
	}
	fclose(f);
}
void dataUpdate()
{
	FILE *f = dataFileCreate();
	int recordNumber = 0;
	char isbn[10];
	char charakter;
	int control = 0;
	printf("ISBN No:");scanf("%s",isbn);

	int i = 1;
	while (!feof(f))
	{
		fseek(f,i*91,SEEK_SET);
		fscanf(f,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		if (strcmp(book.isbn,isbn)==0)
		{
			fscanf(f,"%c",&charakter);
			if (charakter=='#')
			{

			}
			else
			{
				char aut[40];
				char tit[24];
				char isbn2[10];
				printf("%s%10s%20s%15s%15s%12s\n","ID","Author","Title","ISBN","NextAID","NextTID");
				printf("%d%10s%20s%15s%12d%12d\n",book.id,book.author,book.title,book.isbn,book.nextAId,book.nextTId);
				printf("\nAuthor:");scanf("%s",&aut);
				printf("\Title:");scanf("%s",tit);
				printf("\nISBN:");scanf("%s",isbn2);
				int variable;
				int dataID;
				char bookTi[24];
				strcpy(bookTi,book.title);
				int bookId = book.id;
				int hash = hashFunction1(book.author);
				FILE *fa = authorIndexFileCreate();
				FILE *fd2 = dataFileCreate();
				fseek(fa,hash*23,SEEK_SET);
				fscanf(fa,"\n%2d%19d",&variable,&dataID);
				int toIntexID = book.id;
				if (book.id==dataID)
				{
					fseek(fa,-1,SEEK_CUR);
					fprintf(fa,"%d",0);
					//authorIndexInsert(aut,book.id);
					//fseek(fd2,toIntexID*91,SEEK_SET);
					//fprintf(fd2,"%2d%10s%25s%20s%20d%12d",toIntexID,aut,tit,isbn2,0,0);
				}
				else
				{
					FILE *fd2 = dataFileCreate();
					fseek(fd2,dataID*91,SEEK_SET);
					int lastID;

					fscanf(fd2,"%2d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
					while (book.id!=toIntexID)
					{
						lastID = book.id;
						fseek(fd2,book.nextAId*91,SEEK_SET);
						fscanf(fd2,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
					}
					fseek(fd2,lastID*91+57,SEEK_SET);
					fprintf(fd2,"%20d",book.nextAId);


					//------title index dosyasını update yapalım

				}

				FILE *ft = titleIndexFileCreate();
				int hash2 = hashFunction2(bookTi);
				fseek(ft,hash2*23,SEEK_SET);
				fscanf(ft,"\n%2d%19d",&variable,&dataID);
				if (bookId==dataID)
				{
					fseek(ft,-1,SEEK_CUR);
					fprintf(ft,"%d",0);
				}
				else
				{

					fseek(fd2,dataID*91,SEEK_SET);
					int lastID2;

					fscanf(fd2,"%2d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
					while (book.id!=toIntexID)
					{
						lastID2 = book.id;
						fseek(fd2,book.nextTId*91,SEEK_SET);
						fscanf(fd2,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
					}
					fseek(fd2,lastID2*91+77,SEEK_SET);
					fprintf(fd2,"%12d",book.nextTId);
				}

				fseek(fd2,bookId*91+2,SEEK_SET);
				fprintf(fd2,"%10s",aut);

				fprintf(fd2,"%25s",tit);
				fprintf(fd2,"%20s",isbn2);
				fprintf(fd2,"%20d",0);
				fprintf(fd2,"%12",0);
				//fprintf(f,"%2d%10s%25s%20s%20d%12d",book.id,aut,tit,isbn2,0,0);
				authorIndexInsert(aut,bookId);
				titleIndexInsert(tit,bookId);

				fclose(fa);
				fclose(fd2);
				fclose(ft);
				break;
			}

		}

		i++;
	}

	fclose(f);
}
void dataDelete()
{
	FILE *f = dataFileCreate();
	int recordNumber = 0;
	char isbn[10];
	char charakter;
	printf("ISBN No:");scanf("%s",isbn);
	int i = 1;
	int control = 0;
	while (!feof(f))
	{
		fseek(f,i*91,SEEK_SET);
		fscanf(f,"\n%d%10s%25s%20s%20d%12d",&book.id,book.author,book.title,book.isbn,&book.nextAId,&book.nextTId);
		if (strcmp(book.isbn,isbn)==0)
		{
			fscanf(f,"%c",&charakter);
			if (charakter=='#')
			{

			}
			else
			{
				fseek(f,i*91+87,SEEK_SET);//91+87
				fprintf(f,"%d%c",book.nextTId,'#');
				control ++;
				break;
			}

		}
		i++;
	}
	if (control!=0)
	{

		printf("Record was deleted");

	}
	else
	{
		printf("Record cannot be found");
	}
	fclose(f);
}
int main()
{
	//authorIndexInsertInit();
	//FILE *f  = authorIndexFileCreate();
	//int a,b;
	//fseek(f,21*23,SEEK_SET);//bir satirin toplam boyutu 20 karakter.biz indexnumber'inci satira bu şekilde gideriz
	//fprintf(f,"\n%d%19d",6,4);
	//fseek(f,21*2,SEEK_SET);
	//fscanf(f,"%d%d",&a,&b);
	//printf("%d %d",a,b);
	//fileInsert();
	/*char c[40] = "onur";
	authorIndexInsert(c,3);*/
	//fileInsert();
	//titleIndexInit();
	//titleIndexInsert("onur",2);
	//authorSearchProgress();
	//dataDelete();
	//titleSearchProgress();
	//dataFileList();
	//dataUpdate();
	//authorIndexInsert("sdf",6);
	login();
	getch();
}
void menuSelect()
{
	int select=0;
	printf("Please,select your choice:");scanf("%d",&select);
	switch (select)
	{
	case 1:fileInsert();break;
	case 2:break;
	case 3:break;
	case 4:break;
	case 5:break;

	default:printf("Unvalid selection\n");
		break;
	}
}
void adminMenu()
{
	int select=0;
	printf("1.Insert\n");
	printf("2.Update\n");
	printf("3.Delete\n");
	printf("4.Search\n");
	printf("5.List\n");
	printf("6.Exit\n");
	while (true)
	{
		if (select==1 || select==2 || select==3 || select==4 || select==5 || select==6)
		{
			break;
		}
		printf("Your choice:");scanf("%d",&select);
		switch (select)
		{
		case 1:cls;fileInsert();turnAdminPage(1);break;
		case 2:cls;dataUpdate();turnAdminPage(1);break;
		case 3:cls;dataDelete();turnAdminPage(1);break;
		case 4:cls;searhcOper();turnAdminPage(1);break;
		case 5:cls;dataFileList();turnAdminPage(1);break;
		case 6:exit(0);
		default:printf("\nWrong choice\n");
			break;
		}
	}

}
void adminGiris()
{
	char userName[20];int password;
	printf("User Name:");scanf("%s",userName);
	printf("\nPassword:");scanf("%d",&password);
	if (strcmp(userName,"admin")==0 && password==123)
	{
		cls;
		adminMenu();

	}
	else
		printf("\nWrong password or username!!\n");

}
void userMenu()
{
	system("CLS");
	int select=0;
	printf("1.Search\n");
	printf("2.Exit\n");

	while (select!=1 || select!=2)
	{
		printf("Your choice:");scanf("%d",&select);
		switch (select)
		{
		case 1:cls;searhcOper();turnAdminPage(2);break;
		case 2:cls;login();break;
		default:printf("Wrong choice\n");
			break;
		}
	}

}
void searhcOper()
{
	cls;
	int select=0;
	printf("1.Author Search\n");
	printf("2.Title Search\n");
	printf("3.Exit\n");
	while (true)
	{
		if (select==1 || select==2)
		{
			break;
		}
		printf("Your choice:");scanf("%d",&select);
		switch (select)
		{
		case 1:cls;authorSearchProgress(); break;
		case 2:cls;titleSearchProgress();break;
		case 3:cls;userMenu();break;
		default:printf("Wrong choice\n");
			break;
		}
	}

}
void turnHomePage()
{
	int select;
	printf("\nReturn HomePage:");scanf("%d",&select);
	if (select==1)
	{
		cls;
		login();
	}
	else
		exit(0);

}
void turnAdminPage(int a)
{
	int select;
	if (a==1)
	{
		printf("\nReturn AdminPage:");scanf("%d",&select);
		if (select==1)
		{
			cls;
			adminMenu();
		}
		else
			exit(0);
	}
	else if (a==2)
	{
		printf("\nReturn UserMenu:");scanf("%d",&select);
		if (select==1)
		{
			cls;
			userMenu();
		}
		else
			exit(0);
	}
	else
	{
		printf("Wrong choice");
	}

}
void login()
{
	int select=0;
	printf("1.Admin\n");
	printf("2.User\n");
	printf("3.About\n");
	printf("4.Exit\n");
	while (true)
	{
		if (select==1 || select==2 || select==3 || select==4)
		{
			break;
		}
		printf("Your choice:");scanf("%d",&select);
		switch (select)
		{
		case 1:cls;adminGiris();break;
		case 2:cls;userMenu();break;
		case 3:cls;printf("Onur Karaduman");sign;break;
		case 4:exit(0);
		default:printf("Wrong access\n");
			break;
		}	
	}

}


[/php]
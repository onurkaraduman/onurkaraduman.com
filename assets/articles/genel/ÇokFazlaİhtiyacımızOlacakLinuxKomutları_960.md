<h3>The * wildcard</h3>
Bir veya birden çok karakterler anlamına gelir.
<pre>% ls list*
</pre>
<h3>The ? wildcard</h3>
Sadece bir karakter anlamına gelir.
<pre>% ls ?list
</pre>
<h3>cat (concatenate)</h3>
Tum datayı ekrana basar. Yani kısa metinler iceren dosyalar icin uygundur ama uzun dosylara icin pek uygun olmaz. Arama filan yapamazsınız. Mesela çok kısa bir script içeren bir dosyamız vardır ve ne yazmışım ben diye bir goz atmak icin kullanılabilir.
<pre>% cat science.txt
</pre>
Asagidaki komutlarıda deneyelim.
<pre>% cat
</pre>
Şimdi birşeyler yazıp entera basın. User Inputları yazdırdıgını goreceksiniz.

Aşagıdaki komut ile kullanıcı inputlarını science.txt dosyasına yazar.
<pre>% cat &gt; science.txt
</pre>
<h3>less</h3>
cat komutunun gelistirilmis halidir diyebiliriz. Datayı ekrana sayfalar halinde getirir. Ve data icerisinde arama yapabilirsiniz.
<pre>% less science.txt
</pre>
Bu komutu calistirdiktan sonra space ile sayfalar arasında dolasabilir, q karakteri ile cıkıs yapabilirsiniz. Arama yapabilmek icin "?" veya "/" yazıp ve ardından aramak istediginiz metini girip entera basmanız yeterli olacaktır. "n" ile bulunan satırlar arasında dolasabilirsiniz. Yada dosyanın sonuna gidebilmek icin shift+&lt; veya basina gidebilmek icin shift+&gt; tus kombinelerini kullanabilirsiniz.
<h3>head</h3>
Bu komut verilen dosyanın icerisinde mevcut olan datanın ilk 10 satirini getirir.
<pre>% head science.txt
</pre>
Aşagidaki komut ile baştan itibaren kac tane satırı getirmek istediginizi girebilirsiniz.
<pre>% head -5 science.txt
</pre>
<h3>tail</h3>
Bu komut dosyanın son 10 satırını getirir.
<pre>% tail science.txt
</pre>
Aşagıdaki komut ile dosyanın sonundan itibaren kac tane satırı getirmek istedigimizi parametre olarak verebiliriz.
<pre>% tail -n 20 science.txt
</pre>
Aşagıdaki komut ise en cok isimize yarayan komuttur. Surekli icerisine bilgi eklenen bir dosyanız var ve data akısını canlı olarak takip etmek istiyorsanız bu komutu kullnırsınız. Yani log dosylarını bu şekilde canlı olorak takip edebiliriz.
<pre>% tail -f science.txt
</pre>
<h3>grep</h3>
Bu komut dosya icrisinde verdigimiz keyworde uygun olan satırları yazdırır. Bu komutun caseSensitive olduguna dikkat edin.
<pre>% grep science science.txt
</pre>
Ama -i parametresi ile buyuk kucuk harf ayrımını ortadan kaldırabiliriz.
<pre>% grep -i Science science.txt
</pre>
<h3>wc (word count)</h3>
Kaç adet kelime var.
<pre>% wc -w science.txt
</pre>
Kaç adet satır var.
<pre>% wc -l science.txt
</pre>
<h3>Apropos</h3>
Eger komutun tam olarak bilmiyorsanız. Bu komut vasıtasıyla bulabilirsiniz.
<pre>% apropos keyword</pre>

<strong>Sed

</strong><span class="hljs-attribute">Eger bir klasordeki dosyalar icerisindeki belirli bir stringi baska bir string ile degistirmek istiyorsaniz.</span><strong>

<pre>
grep -rl matchstring somedir/ | xargs sed -i <span class="hljs-string">'s/string1/string2/g'
</pre>

<strong>
Tar
</strong>
<span>Eger arsiv icerisindeki dosylari arsivi acmadan gormek istiyorsaniz</span>
<pre>
tar -tf <archive.tar>
</pre>

<strong>
Cache ve Buffer Temizligi
</strong>

<pre>free && sync && echo 3 > /proc/sys/vm/drop_caches && free</pre>
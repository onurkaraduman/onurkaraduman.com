<strong>Sıfırdan Local Repository Oluşturmak</strong>
Oluşturmak istedigimiz projenin klasorune giriyoruz.
<pre>git init
git add .
git commit -m "initial commit"
</pre>
Eger remote repositoriye local repositoriyi göndermek istersek remote repositoriyinin adresini belirtmemiz gerekiyor.
<pre>git remote add origin https://github.com/user/repo.git
git push origin master
</pre>
<strong>Remote Repository Bilgisini Ögrenmek</strong>
<pre>git remote -v
git remote show origin</pre>
<strong>Yanlış Dosyayı Git Add ile Ekledigimizi Farketmek</strong>
<pre>git reset HEAD Mistake.java
</pre>
<strong>Git Uzerinde Yapilan Tum Islemleri Nereden Takip Edebilirim</strong>
<pre>git reflog
</pre>
<strong>Geçmişe Dönmek</strong>

git reflog dedigimiz zaman gordugumuz herhangi bir işlem anına donebiliriz.
<pre>git reset HEAD@{1}
</pre>
<strong>Commit Mesajın Degistirmek</strong>

Bu komut commit tarihini degistirir. Ve en son yapilan commit icin calisir.
<pre>git comment --amend -m "commit degistirildi."</pre>
<strong>Belirli Bir Dosya Üzerinde Commit Edilmemiş Degisikligi Geri Almak</strong>
<pre>git checkout HEAD hello.py</pre>
<strong>Alias Oluşturmak</strong>
log1 adında alias olusturuyoruz. Ve log --oneline komutunu temsil ediyor.
<pre>git config --global alias.log1 "log --oneline"
</pre>
<strong>Aliasları Listelemek</strong>
<pre>git config --list | grep alias</pre>

<strong>Dosyalarin Izinlerini Degistirdiyseniz, git buyuk ihtimal bunlari degistirilmis olarak kabul edece. Cunku git degistirilme tarihlerine bakarak buna karar veriyor.
Ama git in izinlerin degistirilmesiyle ortaya cikan farkliliklari algilamamasi icin asagidaki ayari yapabilirsiniz.</pre>
<pre>git config core.filemode false</pre>

<strong>Eğer Duzeltilmesi Gereken Acil Bir İş Geldi ve Şu An Çalıştığımız Workspacede Değişikliklerimiz var İse Stash Hemen</strong>
<pre>git stash save
</pre>
<strong>Stash e Gönderdigimiz Degisiklilerimizi Geri Getirelim </strong>
<pre>git stash pop</pre>
<strong>Belirli Bir Stash'i Silelim</strong>
<pre>git stash drop stash\{0\}</pre>
<strong>Stash den belirli bir dosyayi geri alalim</strong>
<pre>git checkout git checkout stash@\{0\} --</pre>
<strong>Local Untracked Dosyaları Temizlemek İçin</strong>
<pre><code>git clean -f</code></pre>
<strong>Yeni Local Branch Olusturmak</strong>
<pre>git checkout -b &lt;yeni-branch-adi&gt;</pre>
<strong>Olusturulan Local Branch ı Remote a Gondermek</strong>
<pre>git push -u origin HEAD</pre>
<strong>Local branch ismini degistirmek</strong>
<pre>git branch -m eski_branch_adi yeni_branch_adi</pre>
<strong>Git add yaptik ama bazi dosyalari cikarmak istiyorsak</strong>
<pre>git reset dosya_adi</pre>
<b>Git mesajlarini duzeltmek icin</b>

3 tane commit default editor ile ekrana gelir. Sonra duzeltmek istediginiz commitin basindaki pick'i reword olarak degistirmeniz gerekir.
Dosyayi kaydettikten sonra reword olarak isaretlediginiz commitler ekrana tek tek default editor de gelmeye baslar. Burada mesaji duzeltip dosyayi
kaydedin. Bu otomatik olarak tum reword dediginiz commitler icin tekrarlanir.<b>
</b>
<pre>git rebase -i HEAD~3 (son 3 mesaj icerisinde duzenleme yapmak icin)
</pre>
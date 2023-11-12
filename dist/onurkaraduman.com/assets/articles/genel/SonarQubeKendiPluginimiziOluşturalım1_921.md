Merhaba arkadaşlar, bu yazımda size sonarqube icin plugin nasıl geliştirileceğinden bahsedeceğim. 1 ay öncesine kadar SonarQube konusunda hiç tecrübem yoktu ve sadece ismini ve ne iş yaptığını biliyordum. Son 1 aydır SQ plugin geliştirmeye çalışıyorum. Bu arada SonarQube için SQ kısaltmasını kullanacağım.<!--more-->

Önce SQ nedir biraz bundan bahsedeyim. Örnek üzerinden gideceğim. Farklı yaşlarda developerlardan oluşan bir geliştirme takımınız var. Büyük bir proje geliştirmeye başlayacaksınız. Öncelikle bazı standartlar belirlersiniz ki developerlar o standartlara uygun kod yazsın ve kodda ilerde maintenance için bir tutarlılık olsun. Yani mesela bir fonksiyon şu kadar satırı geçemez. Değişken kucuk harfle başlar buyuk harfle devam eder filan gibisinden. Yada complexity olarak bakarsak olaya. Bir fonksiyon en fazla şu kadar karmaşık olur gibi. Bunları toparladığımız ve bunlara uyarak projeyi geliştirdigimiz zaman projedeki kaliteyi artırmış oluruz. SQ de bunu sağlıyor aslında. Herşey otomatik olarak gerçekleşip sizin önünüze rapor olarak çıktılar sunuluyor. Yani kim güzel kod yazıyor buradan görebiliyorsunuz :)

SQ Server kurulumunu anlatmayacağım. Gayet basit anlatımı kendi installation guide içerisinde var.

SQ Server kurulumunu tamamladıktan sonra browserdan SQ uygulamasını açıyoruz ve biraz inceleyoruz. Şimdi  Arayüzde bilmemiz gereken neler var bunlara bakalım biraz.

1.Rules: Belirtilen dil için kurallar dizisidir. Yani üstte soyledigim gibi fonksiyon şu kadar satır kodu geçemez gibisinden.
2.Issues: Belirtilen kurallara aykırı durumlar proje üzerinde tesbit edildiği zaman SQ ün oluşturdugu uyarılardır. Yani şu kurala aykırı davranılmış şu satırda gibisinden mesajlar verir.
3.Metrics: Bunlar projenin genel anlamdaki değerleridir. Yani totalde kaç satır kod var ne kadar comment var. Karmaşıklıgı nasıl.
4.Quality Profiles: Projenin kalite sorumlusu tarafından belirlenen kuralları içerisinde toplayan kümelerdir. Mesela complex diye bir profile oluşturup buraya fonksiyonun uzunlugu 5 satırdan fazla olamaz dedim. Birde normal diye profile oluşturup aynı rule için uzunluk 10 dan fazla olamaz dedim. Yani Bir projeyi belirledigimiz Quality Profile lara gore SQ değerlendirmesine sokabiliriz.

Birazda google dan bilgi almanızı oneririm. Yazıda herhangi bir bilgi hatası farkederseniz lütfen bana iletin. Bende yeni başladım SQ işlerine. O yüzden hatalarım olabilir.

Plugin geliştirmek için java bilmeniz gerekiyor. Başkada birşey bilmenize gerek yok :) En son SQ 5.6 versiyonu çıktı. Bu versiyon için plugin geliştirebilmek icin Java8 ve en düşük versiyon olarak Maven 3.1 e sahip olmanız gerekiyor. Ben SQ 5.4 versiyonu için plugin geliştirdiğim için bu yazıdada 5.4 için anlatım yapacağım.

Api değişikliklerine şuradan göz atabilirsiniz.
http://docs.sonarqube.org/display/DEV/API+Changes

Perl için plugin geliştirmeye çalışacağız. Aslında lexical analiz kısmını filan yapmayacağız dilin. Yani perl koduna hiç dokunmayacağız. External bir program sayesinde analiz edilmiş kodu SQ ekranlarında göstermeye çalışacağız. Yani elimizde hangi dosyanın kaçıncı satırının hangi kurala aykırı olduğu mevcut.  Şuradaki örnekten gideceğim https://github.com/otrosien/sonar-perl.

Yeni bir Java Maven projesi açtık ve pluginimizi yazmaya başlıyoruz.
<ul>
	<li>Öncelikle pom.xml i duzenlemeyle başlayalım. Daha sonra kafa karışmasın.</li>
</ul>
&lt;properties&gt;
&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
&lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
&lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
&lt;sonar.version&gt;5.4&lt;/sonar.version&gt;
&lt;sonarpackaging.version&gt;1.16&lt;/sonarpackaging.version&gt;
&lt;junit.version&gt;4.10&lt;/junit.version&gt;
&lt;commonslang.version&gt;2.6&lt;/commonslang.version&gt;
&lt;/properties&gt;

&lt;dependency&gt;
&lt;groupId&gt;org.sonarsource.sonarqube&lt;/groupId&gt;
&lt;artifactId&gt;sonar-plugin-api&lt;/artifactId&gt;
&lt;version&gt;${sonar.version}&lt;/version&gt;
&lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
&lt;groupId&gt;commons-lang&lt;/groupId&gt;
&lt;artifactId&gt;commons-lang&lt;/artifactId&gt;
&lt;version&gt;${commonslang.version}&lt;/version&gt;
&lt;/dependency&gt;

&lt;build&gt;
&lt;plugins&gt;
&lt;plugin&gt;
&lt;groupId&gt;org.sonarsource.sonar-packaging-maven-plugin&lt;/groupId&gt;
&lt;artifactId&gt;sonar-packaging-maven-plugin&lt;/artifactId&gt;
&lt;version&gt;${sonarpackaging.version}&lt;/version&gt;
&lt;extensions&gt;true&lt;/extensions&gt;
&lt;configuration&gt;
&lt;!-- the entry-point class that extends org.sonar.api.SonarPlugin --&gt;
&lt;pluginClass&gt;com.onrkrdmn.sonar.plugin.PerlPlugin&lt;/pluginClass&gt;
&lt;pluginDescription&gt;perl plugin&lt;/pluginDescription&gt;
&lt;!-- advanced properties can be set here. See paragraph "Advanced Build
Properties". --&gt;
&lt;/configuration&gt;
&lt;/plugin&gt;
&lt;/plugins&gt;
&lt;/build&gt;
<ul>
	<li>Packaging kısmını sonar-plugin olarak değiştirmeyi unutmayın. Yoksa proje derlenir ama SQ plugin olarak görmez projeyi.</li>
</ul>
&lt;packaging&gt;sonar-plugin&lt;/packaging&gt;

Bir sonraki yazıda gorusmek uzere.
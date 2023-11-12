Radyo uygulaması gelistirirken media element kullanmam gerekti.Proje tam bitmedigi icin kısım kısım bitirdigim yer kadarıyla kodlarıyla birlikte yaptıklarımı paylaşıyor olacagım.<!--more-->

Oncelikle sayfamız bir adet meda element ve bir adet listbox ekliyoruz.Listboxa arka plan resmi koydum ben.

[php]
&lt;div&gt; &lt;MediaElement x:Name=&quot;mdElementPlayer&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;719&quot; Margin=&quot;365,10,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;991&quot; Grid.ColumnSpan=&quot;2&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;ListBox x:Name=&quot;lstbxNameList&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;669&quot; Margin=&quot;7,65,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;303&quot; Foreground=&quot;#FFFFF7F7&quot; FontSize=&quot;16&quot; SelectionChanged=&quot;lstbxNameList_SelectionChanged&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;ListBox.Background&gt;&lt;/div&gt;
&lt;div&gt;                &lt;ImageBrush ImageSource=&quot;Images/backgr.jpg&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/ListBox.Background&gt;&lt;/div&gt;
[/php]

Buradaki olayımız listboxtaki kanal isimlerine tıklayınca media elementimizin source kısmına kanalın mms adresini atamak.Oncelikle bunun icin listbox ın icini doldurmak gerekiyor.Ben bunu .txt uzantılı dosyadan kayıtları cekerek yaptım.Once kanalların isimlerini bir .txt uzantılı dosyaya kaydettim sonra mms adreslerinide diger .txt uzantılı dosyaya kaydettim.Yani elimizde çekilecek 2 dosya oldu.Bunun icin ayrı ayrı fonksiyon yazdım.Tabi bu kısaltılabilir.Hepsi tek dosyadan cekilebilir ama baslangıc icin bu ideal.

[php]
&lt;div&gt;IList&lt;string&gt; CurrentFileBuffer = new List&lt;string&gt;();&lt;/div&gt;
&lt;div&gt;        IList&lt;string&gt; CurrentFileBuffermms = new List&lt;string&gt;();&lt;/div&gt;
&lt;div&gt;        public async void FileReadText()&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;            var folder = Windows.ApplicationModel.Package.Current.InstalledLocation;&lt;/div&gt;
&lt;div&gt;            var file = await folder.GetFileAsync(@&quot;MyFolder\Names.txt&quot;);&lt;/div&gt;
&lt;div&gt;            var read = await FileIO.ReadLinesAsync(file);&lt;/div&gt;
&lt;div&gt;            CurrentFileBuffer = read;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
&lt;div&gt;        public async void FileReadTextmms()&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;            var folder = Windows.ApplicationModel.Package.Current.InstalledLocation;&lt;/div&gt;
&lt;div&gt;            var file = await folder.GetFileAsync(@&quot;MyFolder\mms.txt&quot;);&lt;/div&gt;
&lt;div&gt;            var read = await FileIO.ReadLinesAsync(file);&lt;/div&gt;
&lt;div&gt;            CurrentFileBuffermms = read;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
[/php]

Sayfanın ilk acılırken calısacak kodlar

[php]
&lt;div&gt;this.InitializeComponent();&lt;/div&gt;
&lt;div&gt;            FileReadText();&lt;/div&gt;
&lt;div&gt;            FileReadTextmms();&lt;/div&gt;
&lt;div&gt;            txtbChnList.Visibility = Windows.UI.Xaml.Visibility.Collapsed;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;            lstbxNameList.Visibility = Windows.UI.Xaml.Visibility.Collapsed;&lt;/div&gt;
&lt;div&gt;            btnHide.Content = &quot;Kanal İsimleri&quot;;&lt;/div&gt;
&lt;div&gt;
&lt;div&gt;             for (int i = 0; i &lt; CurrentFileBuffer.Count; i++)&lt;/div&gt;
&lt;div&gt;                {&lt;/div&gt;
&lt;div&gt;                    lstbxNameList.Items.Add(CurrentFileBuffer[i]);&lt;/div&gt;
&lt;div&gt;                }&lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
[/php]

Listbox ın icini doldurduktan sonra listbox ın selectchange olayına cift tıklıyoruz ve kod kısmında selectedChange fonksiyonunun oluşmasını saglıyoruz.Simdi olusturdugumuz bu fonksiyonun altına

[php]
&lt;div&gt;mdElementPlayer.Source = new Uri(CurrentFileBuffermms[lstbxNameList.SelectedIndex]);&lt;/div&gt;
&lt;div&gt;            mdElementPlayer.Play();&lt;/div&gt;
[/php]

kodunu yazıyoruz.Mms adres uzerinden yani internetten yayın alan bir radyo programı olusturmus bulunuyoruz.
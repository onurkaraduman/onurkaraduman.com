Tasarım konusunda pek becerikli olmasamda elimden geleni yapmaya çalışıyorum oldugu kadarıylar artık.Onemli olan kod kısmı zaten tasarımı herkes yapabilir.

İlk giriş sayfamızı bu şekilde tasarımını yaptık.Arka planda bir resim ve yan menude 4 adet buton bulunuyor.Şimdi bu butonların yapacakları işleri tanımlayalım.<!--more-->

<a href="http://www.onurkaraduman.com/wp-content/uploads/mainPage.png"><img class="alignnone size-full wp-image-782" title="mainPage" src="http://www.onurkaraduman.com/wp-content/uploads/mainPage.png" alt="" width="719" height="433" /></a>

Tasarmı sayfası xaml kodu

[php]&lt;/pre&gt;
&lt;div&gt;&lt;Page&lt;/div&gt;
&lt;div&gt;    x:Class=&quot;HangMan.MainPage&quot;&lt;/div&gt;
&lt;div&gt;    xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;&lt;/div&gt;
&lt;div&gt;    xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;&lt;/div&gt;
&lt;div&gt;    xmlns:local=&quot;using:HangMan&quot;&lt;/div&gt;
&lt;div&gt;    xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;&lt;/div&gt;
&lt;div&gt;    xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;&lt;/div&gt;
&lt;div&gt;    mc:Ignorable=&quot;d&quot;&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;    &lt;Grid&gt;&lt;/div&gt;
&lt;div&gt;        &lt;Grid.Background&gt;&lt;/div&gt;
&lt;div&gt;            &lt;ImageBrush ImageSource=&quot;Images/mainBack.jpg&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/Grid.Background&gt;&lt;/div&gt;
&lt;div&gt;        &lt;Button Content=&quot;Yeni Oyun&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;920,224,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;350&quot; Height=&quot;44&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;30&quot; Grid.RowSpan=&quot;1&quot; BorderThickness=&quot;0&quot; Click=&quot;Button_Click_1&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;Button Content=&quot;Devam Et&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;920,331,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;366&quot; Height=&quot;47&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;30&quot; BorderThickness=&quot;0&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;Button Content=&quot;En Yüksek Puan&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;920,439,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;366&quot; Height=&quot;47&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;30&quot; BorderThickness=&quot;0&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;Button Content=&quot;Çıkış&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;933,551,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;353&quot; Height=&quot;48&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;30&quot; BorderThickness=&quot;0&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock x:Name=&quot;txbTitle&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;368.086,359.949,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontWeight=&quot;Bold&quot; FontSize=&quot;48&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; Height=&quot;107.244&quot; UseLayoutRounding=&quot;False&quot; Width=&quot;335.466&quot; d:LayoutRounding=&quot;Auto&quot; FontFamily=&quot;Viner Hand ITC&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;                &lt;PlaneProjection CenterOfRotationZ=&quot;6&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-51.62&quot; SkewX=&quot;6&quot; SkewY=&quot;5.428&quot; ScaleX=&quot;1.01&quot; TranslateX=&quot;3.804&quot; TranslateY=&quot;16.996&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;        &lt;MediaElement HorizontalAlignment=&quot;Left&quot; Height=&quot;100&quot; Margin=&quot;157,439,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;100&quot; Source=&quot;music/ses.WAV&quot;/&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock HorizontalAlignment=&quot;Left&quot; Margin=&quot;694.999,385,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontSize=&quot;48&quot; FontFamily=&quot;Viner Hand ITC&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; UseLayoutRounding=&quot;False&quot; d:LayoutRounding=&quot;Auto&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-141.242&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock HorizontalAlignment=&quot;Left&quot; Margin=&quot;658.999,83.5,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontSize=&quot;48&quot; FontFamily=&quot;Viner Hand ITC&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; UseLayoutRounding=&quot;False&quot; d:LayoutRounding=&quot;Auto&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-180.133&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock x:Name=&quot;txbTitle_Copy&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;327.681,94.781,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontWeight=&quot;Bold&quot; FontSize=&quot;48&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; Height=&quot;107.244&quot; UseLayoutRounding=&quot;False&quot; Width=&quot;305.506&quot; d:LayoutRounding=&quot;Auto&quot; FontFamily=&quot;Viner Hand ITC&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;                &lt;PlaneProjection CenterOfRotationZ=&quot;6&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-7.443&quot; SkewX=&quot;6&quot; SkewY=&quot;5.428&quot; ScaleX=&quot;1.01&quot; TranslateX=&quot;3.804&quot; TranslateY=&quot;16.996&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock x:Name=&quot;txbTitle_Copy1&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;506.181,169.781,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontWeight=&quot;Bold&quot; FontSize=&quot;48&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; Height=&quot;107.244&quot; UseLayoutRounding=&quot;False&quot; Width=&quot;305.506&quot; d:LayoutRounding=&quot;Auto&quot; FontFamily=&quot;Viner Hand ITC&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;                &lt;PlaneProjection CenterOfRotationZ=&quot;6&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-96.021&quot; SkewX=&quot;6&quot; SkewY=&quot;5.428&quot; ScaleX=&quot;1.01&quot; TranslateX=&quot;3.804&quot; TranslateY=&quot;16.996&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;        &lt;TextBlock x:Name=&quot;txbTitle_Copy2&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;498.681,-14.719,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;HANGMAN &quot; VerticalAlignment=&quot;Top&quot; FontWeight=&quot;Bold&quot; FontSize=&quot;48&quot; Foreground=&quot;#FFA38FD8&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; Height=&quot;107.244&quot; UseLayoutRounding=&quot;False&quot; Width=&quot;305.506&quot; d:LayoutRounding=&quot;Auto&quot; FontFamily=&quot;Viner Hand ITC&quot;&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;                &lt;PlaneProjection CenterOfRotationZ=&quot;6&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.Projection&gt;&lt;/div&gt;
&lt;div&gt;            &lt;TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;                &lt;CompositeTransform Rotation=&quot;-6.002&quot; SkewX=&quot;6&quot; SkewY=&quot;5.428&quot; ScaleX=&quot;1.01&quot; TranslateX=&quot;3.804&quot; TranslateY=&quot;16.996&quot;/&gt;&lt;/div&gt;
&lt;div&gt;            &lt;/TextBlock.RenderTransform&gt;&lt;/div&gt;
&lt;div&gt;        &lt;/TextBlock&gt;&lt;/div&gt;
&lt;div&gt;    &lt;/Grid&gt;&lt;/div&gt;
&lt;div&gt;&lt;/Page&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;pre&gt;
[/php]

kod kısmınıda şu şekilde yazıyoruz.

[php]

&lt;/pre&gt;
&lt;div&gt;using System;&lt;/div&gt;
&lt;div&gt;using System.Collections.Generic;&lt;/div&gt;
&lt;div&gt;using System.IO;&lt;/div&gt;
&lt;div&gt;using System.Linq;&lt;/div&gt;
&lt;div&gt;using Windows.Foundation;&lt;/div&gt;
&lt;div&gt;using Windows.Foundation.Collections;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Controls;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Controls.Primitives;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Data;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Input;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Media;&lt;/div&gt;
&lt;div&gt;using Windows.UI.Xaml.Navigation;&lt;/div&gt;
&lt;div&gt;using Windows.Media;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;namespace HangMan&lt;/div&gt;
&lt;div&gt;{&lt;/div&gt;
&lt;div&gt;    /// &lt;summary&gt;&lt;/div&gt;
&lt;div&gt;    /// An empty page that can be used on its own or navigated to within a Frame.&lt;/div&gt;
&lt;div&gt;    /// &lt;/summary&gt;&lt;/div&gt;
&lt;div&gt;    public sealed partial class MainPage : Page&lt;/div&gt;
&lt;div&gt;    {&lt;/div&gt;
&lt;div&gt;        public MainPage()&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;            this.InitializeComponent();&lt;/div&gt;
&lt;div&gt;            //DispatcherTimer timer = new DispatcherTimer();&lt;/div&gt;
&lt;div&gt;            //timer.Interval = new TimeSpan(10);&lt;/div&gt;
&lt;div&gt;            //timer.Start();&lt;/div&gt;
&lt;div&gt;            //MediaElement me = new MediaElement();&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;          //  me.Source = &quot;G:/sesKayit/ses.wav&quot;;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        /// &lt;summary&gt;&lt;/div&gt;
&lt;div&gt;        /// Invoked when this page is about to be displayed in a Frame.&lt;/div&gt;
&lt;div&gt;        /// &lt;/summary&gt;&lt;/div&gt;
&lt;div&gt;        /// &lt;param name=&quot;e&quot;&gt;Event data that describes how this page was reached.  The Parameter&lt;/div&gt;
&lt;div&gt;        /// property is typically used to configure the page.&lt;/param&gt;&lt;/div&gt;
&lt;div&gt;        protected override void OnNavigatedTo(NavigationEventArgs e)&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;div&gt;        private void Button_Click_1(object sender, RoutedEventArgs e)&lt;/div&gt;
&lt;div&gt;        {&lt;/div&gt;
&lt;div&gt;            this.Frame.Navigate(typeof(NewGame));&lt;/div&gt;
&lt;div&gt;        }&lt;/div&gt;
&lt;div&gt;    }&lt;/div&gt;
&lt;div&gt;}&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;
&lt;pre&gt;

[/php]

Burada yazdıgımız tek kod şimdilik yeni oyun butonunun altına yazılmıstır.Bu buton Yeni oyun sayfasına bizi yonlendiriyor.

Yeni oyun sayfası

<a href="http://www.onurkaraduman.com/wp-content/uploads/newGame.png"><img class="alignnone size-full wp-image-783" title="newGame" src="http://www.onurkaraduman.com/wp-content/uploads/newGame.png" alt="" width="720" height="437" /></a>

[php]

&lt;Page
 x:Class=&quot;HangMan.NewGame&quot;
 xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
 xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
 xmlns:local=&quot;using:HangMan&quot;
 xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
 xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
 mc:Ignorable=&quot;d&quot;&gt;

&lt;Grid&gt;
 &lt;Grid.Background&gt;
 &lt;ImageBrush ImageSource=&quot;ms-appx:/Images/newGameBack.jpg&quot;/&gt;
 &lt;/Grid.Background&gt;

&lt;Ellipse x:Name=&quot;elpRightArm&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;100&quot; Margin=&quot;1114,351,0,0&quot; Stroke=&quot;Black&quot; StrokeThickness=&quot;0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;100&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/armR.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;

&lt;Ellipse x:Name=&quot;elpLeftArm&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;100&quot; Margin=&quot;952,351,0,0&quot; Stroke=&quot;Black&quot; StrokeThickness=&quot;0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;100&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/armLe.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;

&lt;Ellipse x:Name=&quot;elpRightLeg&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;100&quot; Margin=&quot;1057,570,0,0&quot; Stroke=&quot;Black&quot; StrokeThickness=&quot;0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;100&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; UseLayoutRounding=&quot;False&quot; d:LayoutRounding=&quot;Auto&quot;&gt;
 &lt;Ellipse.RenderTransform&gt;
 &lt;CompositeTransform Rotation=&quot;-42.185&quot;/&gt;
 &lt;/Ellipse.RenderTransform&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/images.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;

&lt;Ellipse x:Name=&quot;elpLeftLeg&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;109&quot; Margin=&quot;1000,560,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;78&quot; StrokeThickness=&quot;0&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/images.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;A&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;168,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;A_PointerPressed&quot; PointerMoved=&quot;A_PointerMoved&quot; PointerExited=&quot;A_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/Adsız.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;B&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;231,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;B_PointerPressed&quot; PointerMoved=&quot;B_PointerMoved&quot; PointerExited=&quot;B_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/B.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;C&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;298,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;40&quot; PointerPressed=&quot;C_PointerPressed&quot; PointerMoved=&quot;C_PointerMoved&quot; PointerExited=&quot;C_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/C.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;D&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;418,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;41&quot; PointerPressed=&quot;D_PointerPressed&quot; PointerMoved=&quot;D_PointerMoved&quot; PointerExited=&quot;D_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/D.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;E&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;474,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;E_PointerPressed&quot; PointerMoved=&quot;E_PointerMoved&quot; PointerExited=&quot;E_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/E.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;F&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;543,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;F_PointerPressed&quot; PointerMoved=&quot;F_PointerMoved&quot; PointerExited=&quot;F_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/F.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;G&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;606,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;G_PointerPressed&quot; PointerMoved=&quot;G_PointerMoved&quot; PointerExited=&quot;G_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/G.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Gg&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;676,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;Gg_PointerPressed&quot; PointerMoved=&quot;Gg_PointerMoved&quot; PointerExited=&quot;Gg_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/YG.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;H&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;168,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;H_PointerPressed&quot; PointerMoved=&quot;H_PointerMoved&quot; PointerExited=&quot;H_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/H.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;I&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;231,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;I_PointerPressed&quot; PointerMoved=&quot;I_PointerMoved&quot; PointerExited=&quot;I_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/I.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Ii&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;298,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;40&quot; PointerPressed=&quot;Ii_PointerPressed&quot; PointerMoved=&quot;Ii_PointerMoved&quot; PointerExited=&quot;Ii_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/kucuki.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;J&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;353,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;J_PointerPressed&quot; PointerMoved=&quot;J_PointerMoved&quot; PointerExited=&quot;J_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/J.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;K&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;410,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;41&quot; PointerPressed=&quot;K_PointerPressed&quot; PointerMoved=&quot;K_PointerMoved&quot; PointerExited=&quot;K_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/K.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;L&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;476,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;43&quot; PointerPressed=&quot;L_PointerPressed&quot; PointerMoved=&quot;L_PointerMoved&quot; PointerExited=&quot;L_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/L.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;M&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;542,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;M_PointerPressed&quot; PointerMoved=&quot;M_PointerMoved&quot; PointerExited=&quot;M_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/M.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;N&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;612,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;N_PointerPressed&quot; PointerMoved=&quot;N_PointerMoved&quot; PointerExited=&quot;N_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/N.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;O&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;676,309,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;O_PointerPressed&quot; PointerMoved=&quot;O_PointerMoved&quot; PointerExited=&quot;O_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/O.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Oo&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;170,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;44&quot; PointerPressed=&quot;Oo_PointerPressed&quot; PointerMoved=&quot;Oo_PointerMoved&quot; PointerExited=&quot;Oo_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Oo.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;P&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;238,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;P_PointerPressed&quot; PointerMoved=&quot;P_PointerMoved&quot; PointerExited=&quot;P_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/P.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;R&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;293,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;43&quot; RenderTransformOrigin=&quot;0.478,0.375&quot; PointerPressed=&quot;R_PointerPressed&quot; PointerMoved=&quot;R_PointerMoved&quot; PointerExited=&quot;R_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/R.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;S&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;349,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;43&quot; PointerPressed=&quot;S_PointerPressed&quot; PointerMoved=&quot;S_PointerMoved&quot; PointerExited=&quot;S_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/S.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Ss&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;418,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;41&quot; PointerPressed=&quot;Ss_PointerPressed&quot; PointerMoved=&quot;Ss_PointerMoved&quot; PointerExited=&quot;Ss_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Ss.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;T&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;481,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;T_PointerPressed&quot; PointerMoved=&quot;T_PointerMoved&quot; PointerExited=&quot;T_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/T.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;U&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;550,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;43&quot; PointerPressed=&quot;U_PointerPressed&quot; PointerMoved=&quot;U_PointerMoved&quot; PointerExited=&quot;U_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/U.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Uu&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;612,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;43&quot; PointerPressed=&quot;Uu_PointerPressed&quot; PointerMoved=&quot;Uu_PointerMoved&quot; PointerExited=&quot;Uu_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Uu.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;V&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;676,370,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;V_PointerPressed&quot; PointerMoved=&quot;V_PointerMoved&quot; PointerExited=&quot;V_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/V.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Y&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;402,427,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;Y_PointerPressed&quot; PointerMoved=&quot;Y_PointerMoved&quot; PointerExited=&quot;Y_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Y.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Z&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;461,427,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;41&quot; PointerPressed=&quot;Z_PointerPressed&quot; PointerMoved=&quot;Z_PointerMoved&quot; PointerExited=&quot;Z_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Z.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;Cc&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;40&quot; Margin=&quot;361,253,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;42&quot; PointerPressed=&quot;Cc_PointerPressed&quot; PointerMoved=&quot;Cc_PointerMoved&quot; PointerExited=&quot;Cc_PointerExited&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/letter/Cc.png&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;TextBox x:Name=&quot;txtDeneme&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;991,77,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;TextBox&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;208&quot;/&gt;
 &lt;Image HorizontalAlignment=&quot;Left&quot; Height=&quot;100&quot; Margin=&quot;1032,264,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;100&quot;/&gt;
 &lt;Ellipse x:Name=&quot;elpBody&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;257&quot; Margin=&quot;1015,333,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;131&quot; StrokeThickness=&quot;0&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/bod.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;Ellipse x:Name=&quot;elpHead&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;127&quot; Margin=&quot;1004,237,0,0&quot; Stroke=&quot;Black&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;142&quot; StrokeThickness=&quot;0&quot;&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/gargamel.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;TextBlock x:Name=&quot;txbWriting&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;7.819,652,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;TextBlockTextBlockTextBlock&quot; VerticalAlignment=&quot;Top&quot; Height=&quot;86&quot; Width=&quot;1348.372&quot; FontFamily=&quot;Ravie&quot; FontSize=&quot;48&quot; LineHeight=&quot;8&quot; TextAlignment=&quot;Center&quot; CharacterSpacing=&quot;4&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; UseLayoutRounding=&quot;False&quot; d:LayoutRounding=&quot;Auto&quot; Foreground=&quot;#FFF9DDDD&quot; FontWeight=&quot;Bold&quot;&gt;
 &lt;TextBlock.RenderTransform&gt;
 &lt;CompositeTransform SkewX=&quot;4&quot;/&gt;
 &lt;/TextBlock.RenderTransform&gt;
 &lt;/TextBlock&gt;
 &lt;StackPanel x:Name=&quot;stcpanelInformation&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;227&quot; Margin=&quot;382,183,0,0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;459&quot; Background=&quot;#FF102525&quot;&gt;
 &lt;TextBlock x:Name=&quot;txtInformation&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;TextBlock&quot; Foreground=&quot;#FFDDF7E1&quot; FontSize=&quot;24&quot; FontFamily=&quot;Chiller&quot;/&gt;
 &lt;/StackPanel&gt;
 &lt;Ellipse x:Name=&quot;elpContinue&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;41&quot; Margin=&quot;786.643,350.511,0,0&quot; Stroke=&quot;Black&quot; StrokeThickness=&quot;0&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;45.977&quot; RenderTransformOrigin=&quot;0.5,0.5&quot; UseLayoutRounding=&quot;False&quot; d:LayoutRounding=&quot;Auto&quot; PointerPressed=&quot;elpContinue_PointerPressed&quot; PointerMoved=&quot;elpContinue_PointerMoved&quot; PointerExited=&quot;elpContinue_PointerExited&quot;&gt;
 &lt;Ellipse.RenderTransform&gt;
 &lt;CompositeTransform Rotation=&quot;-90.716&quot;/&gt;
 &lt;/Ellipse.RenderTransform&gt;
 &lt;Ellipse.Fill&gt;
 &lt;ImageBrush ImageSource=&quot;Images/arrow.jpg&quot;/&gt;
 &lt;/Ellipse.Fill&gt;
 &lt;/Ellipse&gt;
 &lt;TextBlock HorizontalAlignment=&quot;Left&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;Toplam Puan: &quot; VerticalAlignment=&quot;Top&quot; FontSize=&quot;22&quot; Foreground=&quot;#FF0C110E&quot; FontFamily=&quot;Algerian&quot; Margin=&quot;0,10,0,0&quot;/&gt;
 &lt;TextBlock x:Name=&quot;txbScore&quot; HorizontalAlignment=&quot;Left&quot; Height=&quot;106&quot; Margin=&quot;168,0,0,0&quot; TextWrapping=&quot;Wrap&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;197&quot; FontSize=&quot;48&quot; FontFamily=&quot;Chiller&quot;/&gt;
 &lt;TextBlock x:Name=&quot;txtbNowScore&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;208,179,0,0&quot; TextWrapping=&quot;Wrap&quot; VerticalAlignment=&quot;Top&quot; FontFamily=&quot;Chiller&quot; FontSize=&quot;48&quot; Width=&quot;72&quot;/&gt;
 &lt;TextBlock HorizontalAlignment=&quot;Left&quot; Margin=&quot;0,192,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;Kelimenin Değeri&quot; VerticalAlignment=&quot;Top&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;22&quot; Foreground=&quot;#FF191111&quot;/&gt;
 &lt;TextBlock x:Name=&quot;txtbLevel&quot; HorizontalAlignment=&quot;Left&quot; Margin=&quot;543,10,0,0&quot; TextWrapping=&quot;Wrap&quot; VerticalAlignment=&quot;Top&quot; Width=&quot;54&quot; FontFamily=&quot;Chiller&quot; FontSize=&quot;24&quot;/&gt;
 &lt;TextBlock HorizontalAlignment=&quot;Left&quot; Margin=&quot;436,10,0,0&quot; TextWrapping=&quot;Wrap&quot; Text=&quot;Seviye: &quot; VerticalAlignment=&quot;Top&quot; FontFamily=&quot;Algerian&quot; FontSize=&quot;22&quot; Foreground=&quot;#FF292424&quot;/&gt;

&lt;/Grid&gt;
&lt;/Page&gt;

[/php]

Burada toplam puanı, seviyeyi ve kelimenin puanını tutan textblock elemenleri bulunuyor.Birde en altta tahmin edilecek kelimeyi tuttugumuz textblox elementi bulunuyor.Yan taraftaki gargameli parcalara boldum.Baş, govde, kollar ve bacaklar olmak uzere.Tabi bunlar icin ayrı ayrı elipse koydum.Elipsin imageSource larını tek tek gargamelin kafasını, govdesini, sag ve sol kolunu en son olarak sag ve sol bacaklarını ayrı ayrı koydum.Yani toplamda 6 adet elipse kullandım (sadece resim kısmında).

Harflerin de hepsi ayrı ayrı birer elipse dir.Yine aynı şekilde bunlarada background resim ekledim. En ondeki siyah renkteki stackpanel ise ilk oyuna girdiginde yada kelime bildiginde yada kelime bilemediginde yani game over oldugunda gorunur oluyor ve oyuncuyu bilgilendiriyor.

Kod kısmı çok karışık ve cok amatorce oldu.Biraz baştan savma oldu diyebilirim.Çunku gerçekten çok yogunum.Bunu yapabilmek icin bir gunumu harcadım diyebilirim.Tasarım kısmı gercekten cok zaman kaybettiriyor.

kod kısmında kullandıgım simple clası

[php]

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Storage;

namespace HangMan
{
 class simple
 {
 public static int gameOver=0;
 public static int level = 1;
 public static int health = 6;
 public static int totolScore = 0;
 public static int nowPoint = 0;
 public static int letterCount = 0;
 public static int gameState = -1;

&amp;nbsp;

}
}

[/php]

Yeni oyun kod sayfası

[php]

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Popups;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using System.IO;
using System.Text;
using System.Collections;
using Windows.Storage;
using Windows.Storage.AccessCache;
using System.Threading.Tasks;
using Windows.ApplicationModel;
using System.Text.RegularExpressions;

&amp;nbsp;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace HangMan
{
 /// &lt;summary&gt;
 /// An empty page that can be used on its own or navigated to within a Frame.
 /// &lt;/summary&gt;
 public sealed partial class NewGame : Page
 {

 static char[] character;
 static char[] initCharakter;
 static char[] initCharakter0;
 static String isim=&quot;&quot;;
 public NewGame()
 {
 ReadTextFile(@&quot;MyFolder\words.txt&quot;);
 // FileRead();
 this.InitializeComponent();
 txbWriting.Text = &quot;&quot;;
 mistakeControl();
 txtInformation.Text = simple.level + &quot;. Seviye\nHazır Mısın?&quot;;
 //Class1 myClass = new Class1(isim);

txbWriting.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

txtbNowScore.Text = &quot;0&quot;;
 txbScore.Text = simple.totolScore.ToString();
 txtbLevel.Text = simple.level.ToString();

 }

/// &lt;summary&gt;
 /// Invoked when this page is about to be displayed in a Frame.
 /// &lt;/summary&gt;
 /// &lt;param name=&quot;e&quot;&gt;Event data that describes how this page was reached. The Parameter
 /// property is typically used to configure the page.&lt;/param&gt;
 protected override void OnNavigatedTo(NavigationEventArgs e)
 {

 }
 public void textBoxInıt(string writing)
 {
 for (int i = 0; i &lt; writing.Length; i++)
 {
 txbWriting.Text += &quot;-- &quot;;
 }

 }
 public void textBoxConfig(char[] karakter)
 {
 txbWriting.Text = &quot;&quot;;
 for (int i = 0; i &lt; karakter.Length; i++)
 {
 if (karakter[i]=='0')
 {
 txbWriting.Text += &quot; -- &quot;;

 }
 else
 {
 txbWriting.Text +=&quot; &quot;+ karakter[i]+&quot; &quot;;
 }
 }
 if (simple.letterCount==isim.Length)
 {
 simple.level++;
 simple.gameState = 1;
 stcpanelInformation.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpContinue.Visibility = Windows.UI.Xaml.Visibility.Visible;
 txtInformation.Text = &quot;Tebrikler Kazandınız.\n&quot; + simple.level + &quot;. Seviye&quot;;
 }

 }
 public static int seekControl(string a)
 {
 int counter = 0;
 for (int i = 0; i &lt;character.Length ; i++)
 {
 if (character[i]==Convert.ToChar(a.Trim()))
 {
 initCharakter[i] = Convert.ToChar(a.Trim());
 counter++;
 simple.letterCount++;
 }
 }
 return counter;
 }
 public void pressButton(string text)
 {
 int cont;
 if ((cont = seekControl(text.ToUpper()))!=0)
 {
 textBoxConfig(initCharakter);
 }
 else
 {
 simple.nowPoint -= 10 * simple.level;
 nowPointConfig(10*simple.level);
 simple.health -= 1;
 mistakeControl();
 if (simple.health == 0)
 {
 stcpanelInformation.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpContinue.Visibility = Windows.UI.Xaml.Visibility.Visible;
 txtInformation.Text = &quot;Kaybettiniz! Üzülmeyin.\nBaştan Başla&quot;;
 simple.gameOver = 1;
 simple.gameState = 0;
 }

 }

 }
 private void A_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;a&quot;);
 A.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

 }

private void A_PointerMoved(object sender, PointerRoutedEventArgs e)
 {

 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);

 if (A.Width&gt;55)
 {

 }
 else
 {
 A.Width = A.Width + 10;
 }
 if (A.Height&gt;55)
 {

 }
 else
 {
 A.Height += 10;
 }

 }

private void A_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 A.Width -= 10;
 A.Height -= 10;

 }

private void B_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;b&quot;);

 B.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}

private void B_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (B.Width &gt; 55) { }
 else {B.Width +=10;}
 if (B.Height &gt; 55) { }
 else { B.Height += 10; }

 }

private void B_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 B.Width -= 10;
 B.Height -= 10;
 }

private void C_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;c&quot;);

 C.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void C_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);

if (C.Width &gt; 55)
 {

}
 else
 {
 C.Width += 10;
 }
 if (C.Height &gt; 55)
 {

}
 else
 {
 C.Height += 10;
 }

 }

private void C_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 C.Width -= 10;
 C.Height -= 10;
 }

private void Cc_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;Ç&quot;);
 Cc.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Cc_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Cc.Width &gt; 55) { }
 else { Cc.Width += 10; }
 if (Cc.Height &gt; 55) { }
 else { Cc.Height += 10; }
 }

private void Cc_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Cc.Width -= 10;
 Cc.Height -= 10;
 }

private void D_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;d&quot;);

 D.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void D_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (D.Width &gt; 55) { }
 else { D.Width += 10; }
 if (D.Height &gt; 55) { }
 else { D.Height += 10; }
 }

private void D_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 D.Width -= 10;
 D.Height -= 10;

}

private void E_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;e&quot;);

 E.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void E_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (E.Width &gt; 55) { }
 else { E.Width += 10; }
 if (E.Height &gt; 55) { }
 else { E.Height += 10; }
 }

private void E_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 E.Width -= 10;
 E.Height -= 10;
 }

private void F_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;f&quot;);

 F.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void F_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (F.Width &gt; 55) { }
 else { F.Width += 10; }
 if (F.Height &gt; 55) { }
 else { F.Height += 10; }
 }

private void F_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 F.Width -= 10;
 F.Height -= 10;

}

private void G_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;g&quot;);

 G.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void G_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (G.Width &gt; 55) { }
 else { G.Width += 10; }
 if (G.Height &gt; 55) { }
 else { G.Height += 10; }
 }

private void G_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 G.Width -= 10;
 G.Height -= 10;
 }

private void Gg_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;Ğ&quot;);

 Gg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Gg_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Gg.Width &gt; 55) { }
 else { Gg.Width += 10; }
 if (Gg.Height &gt; 55) { }
 else { Gg.Height += 10; }
 }

private void Gg_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Gg.Width -= 10;
 Gg.Height -= 10;
 }

private void H_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;h&quot;);

 H.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void H_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (H.Width &gt; 55) { }
 else { H.Width += 10; }
 if (H.Height &gt; 55) { }
 else { H.Height += 10; }
 }

private void H_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 H.Width -= 10;
 H.Height -= 10;

}

private void I_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;ı&quot;);

 I.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void I_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (I.Width &gt; 55) { }
 else { I.Width += 10; }
 if (I.Height &gt; 55) { }
 else { I.Height += 10; }
 }

private void I_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 I.Width -= 10;
 I.Height -= 10;
 }

private void Ii_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;İ&quot;);

 Ii.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Ii_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Ii.Width &gt; 55) { }
 else { Ii.Width += 10; }
 if (Ii.Height &gt; 55) { }
 else { Ii.Height += 10; }
 }

private void Ii_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Ii.Width -= 10;
 Ii.Height -= 10;
 }

private void J_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;j&quot;);

 J.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void J_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (J.Width &gt; 55) { }
 else { J.Width += 10; }
 if (J.Height &gt; 55) { }
 else { J.Height += 10; }
 }

private void J_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 J.Width -= 10;
 J.Height -= 10;
 }

private void K_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;k&quot;);

 K.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void K_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (K.Width &gt; 55) { }
 else { K.Width += 10; }
 if (K.Height &gt; 55) { }
 else { K.Height += 10; }
 }

private void K_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 K.Width -= 10;
 K.Height -= 10;
 }

private void L_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;l&quot;);

 L.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void L_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (L.Width &gt; 55) { }
 else { L.Width += 10; }
 if (L.Height &gt; 55) { }
 else { L.Height += 10; }
 }

private void L_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 L.Width -= 10;
 L.Height -= 10;
 }

private void M_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;m&quot;);

 M.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void M_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (M.Width &gt; 55) { }
 else { M.Width +=10; }
 if (M.Height &gt; 55) { }
 else { M.Height += 10; }
 }

private void M_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 M.Width -= 10;
 M.Height -= 10;
 }

private void N_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;n&quot;);

 N.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void N_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (N.Width &gt; 55) { }
 else { N.Width += 10; }
 if (N.Height &gt; 55) { }
 else { N.Height += 10; }
 }

private void N_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 N.Width -= 10;
 N.Height -= 10;
 }

private void O_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;O&quot;);
 O.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void O_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (O.Width &gt; 55) { }
 else { O.Width += 10; }
 if (O.Height &gt; 55) { }
 else { O.Height += 10; }
 }

private void O_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 O.Width -= 10;
 O.Height -= 10;
 }

private void Oo_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;ö&quot;);

 Oo.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Oo_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Oo.Width &gt; 55) { }
 else { Oo.Width += 10; }
 if (Oo.Height &gt; 55) { }
 else { Oo.Height += 10; }
 }

private void Oo_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Oo.Width -= 10;
 Oo.Height -= 10;
 }

private void P_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;p&quot;);

 P.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void P_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (P.Width &gt; 55) { }
 else { P.Width += 10; }
 if (P.Height &gt; 55) { }
 else { P.Height += 10; }
 }

private void P_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 P.Width -= 10;
 P.Height -= 10;
 }

private void R_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;r&quot;);

 R.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void R_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (R.Width &gt; 55) { }
 else { R.Width += 10; }
 if (R.Height &gt; 55) { }
 else { R.Height += 10; }
 }

private void R_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 R.Width -= 10;
 R.Height -= 10;
 }

private void S_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;s&quot;);

 S.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void S_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (S.Width &gt; 55) { }
 else { S.Width += 10; }
 if (S.Height &gt; 55) { }
 else { S.Height += 10; }

}

private void S_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 S.Width -= 10;
 S.Height -= 10;
 }

private void Ss_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;Ş&quot;);

 Ss.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Ss_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Ss.Width &gt; 55) { }
 else { Ss.Width += 10; }
 if (Ss.Height &gt; 55) { }
 else { Ss.Height += 10; }
 }

private void Ss_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Ss.Width -= 10;
 Ss.Height -= 10;
 }

private void T_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;t&quot;);

 T.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void T_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (T.Width &gt; 55) { }
 else { T.Width += 10; }
 if (T.Height &gt; 55) { }
 else { T.Height += 10; }
 }

private void T_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 T.Width -= 10;
 T.Height -= 10;
 }

private void U_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;u&quot;);

 U.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void U_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (U.Width &gt; 55) { }
 else { U.Width += 10; }
 if (U.Height &gt; 55) { }
 else { U.Height += 10; }

}

private void U_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 U.Width -= 10;
 U.Height -= 10;
 }

private void Uu_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;Ü&quot;);

 Uu.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Uu_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Uu.Width &gt; 55) { }
 else { Uu.Width += 10; }
 if (Uu.Height &gt; 55) { }
 else { Uu.Height += 10; }

}

private void Uu_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Uu.Width -= 10;
 Uu.Height -= 10;
 }

private void V_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;v&quot;);

 V.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void V_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (V.Width &gt; 55) { }
 else { V.Width += 10; }
 if (V.Height &gt; 55) { }
 else { V.Height += 10; }
 }

private void V_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 V.Width -= 10;
 V.Height -= 10;

}

private void Y_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;y&quot;);

 Y.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Y_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Y.Width &gt; 55) { }
 else { Y.Width += 10; }
 if (Y.Height &gt; 55) { }
 else { Y.Height += 10; }
 }

private void Y_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Y.Width -= 10;
 Y.Height -= 10;
 }

private void Z_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 this.pressButton(&quot;z&quot;);

 Z.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 }

private void Z_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 if (Z.Width &gt; 55) { }
 else { Z.Width += 10; }
 if (Z.Height &gt; 55) { }
 else { Z.Height += 10; }
 }

private void Z_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Z.Width -= 10;
 Z.Height -= 10;
 }

 public void mistakeControl()
 {
 if (simple.health==6)
 {
 elpHead.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health==5)
 {

 elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health ==4)
 {

elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health == 3)
 {

elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health == 2)
 {

elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health == 1)
 {

elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

}
 else if (simple.health == 0)
 {

elpHead.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpBody.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightArm.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpLeftLeg.Visibility = Windows.UI.Xaml.Visibility.Visible;
 elpRightLeg.Visibility = Windows.UI.Xaml.Visibility.Visible;

}
 }

private void elpContinue_PointerPressed(object sender, PointerRoutedEventArgs e)
 {
 if (simple.gameState==1)
 {
 simple.health = 6;
 simple.letterCount = 0;
 simple.totolScore += simple.nowPoint;
 txtbNowScore.Text = simple.nowPoint.ToString();
 this.Frame.Navigate(typeof(NewGame));
 simple.gameState = -1;
 }
 else if (simple.gameState==0)
 {
 simple.nowPoint = 0;
 simple.totolScore = 0;
 simple.letterCount = 0;
 simple.level = 1;
 simple.health = 6;
 simple.gameOver = 0;
 simple.gameState = -1;
 this.Frame.Navigate(typeof(NewGame));

 }
 else if (simple.gameState==-1)
 {
 txbWriting.Visibility = Windows.UI.Xaml.Visibility.Visible;
 stcpanelInformation.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
 elpContinue.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

Random rnd = new Random();
 int estim = rnd.Next(0, 75980);
 isim =CurrentFileBuffer[estim];

 while (true)
 {
 if (isim.IndexOf(' ') &gt;= 0 || (isim.IndexOf(',') &gt;= 0) || (isim.Length)&gt;=13)
 {
 estim = rnd.Next(0, 75980);
 isim = CurrentFileBuffer[estim];
 }
 else break;
 }

initCharakter = new char[isim.Length];
 character = new char[isim.Length];
 for (int i = 0; i &lt; isim.Length; i++)
 {
 initCharakter[i] = '0';
 }
 simple.nowPoint = 10 * simple.level * isim.Length;
 txtbNowScore.Text = simple.nowPoint.ToString();
 txbScore.Text = simple.totolScore.ToString();
 isim = isim.ToUpper();
 textBoxInıt(isim);
 character = isim.ToCharArray();
 txtDeneme.Text = isim;
 }

 }

private void elpContinue_PointerMoved(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Hand, 1);
 }

private void elpContinue_PointerExited(object sender, PointerRoutedEventArgs e)
 {
 Window.Current.CoreWindow.PointerCursor = new Windows.UI.Core.CoreCursor(Windows.UI.Core.CoreCursorType.Arrow, 1);
 }
 public void totalScoreConfig(int a)
 {
 int b = Convert.ToInt32(txbScore.Text);
 txbScore.Text = (a + b).ToString();

 }
 public void nowPointConfig(int a)
 {
 int b = Convert.ToInt32(txtbNowScore.Text);
 txtbNowScore.Text = (b - a).ToString();

 }

IList&lt;String&gt; CurrentFileBuffer = new List&lt;string&gt;();

public async void ReadTextFile(string Path)
 {
 var folder = Windows.ApplicationModel.Package.Current.InstalledLocation;
 var file = await folder.GetFileAsync(Path);
 var read = await FileIO.ReadLinesAsync(file);
 CurrentFileBuffer = read;
 }

}

}

[/php]

Projeyi bitirdikten sonra paylaşmayı duşunuyorum.

Çalışır hali

<a href="http://www.onurkaraduman.com/wp-content/uploads/sonhali.png"><img class="alignnone size-full wp-image-784" title="sonhali" src="http://www.onurkaraduman.com/wp-content/uploads/sonhali.png" alt="" width="1366" height="768" /></a>
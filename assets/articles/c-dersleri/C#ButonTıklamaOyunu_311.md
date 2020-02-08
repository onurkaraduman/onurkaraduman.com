<a href="http://www.onurkaraduman.com/wp-content/uploads/tıklamaOyunu.jpg"><img class="alignnone size-full wp-image-312" title="tıklamaOyunu" src="http://www.onurkaraduman.com/wp-content/uploads/tıklamaOyunu.jpg" alt="" /></a>

&nbsp;

<span style="color: #000080;">EKRANIMIZ BU SEKİLDE OLACAK</span>

<em>KOD SAYFAMİZA ASAGİDAKİ KODU YAZALIM SİMDİ</em>

&nbsp;

<strong><span style="color: #0000ff;">using</span> System;</strong>
<strong><span style="color: #0000ff;">using</span> System.Collections.Generic;</strong>
<strong><span style="color: #0000ff;">using</span> System.ComponentModel;</strong>
<strong><span style="color: #0000ff;">using</span> System.Data;</strong>
<strong><span style="color: #0000ff;">using</span> System.Drawing;</strong>
<strong><span style="color: #0000ff;">using</span> System.Linq;</strong>
<strong><span style="color: #0000ff;">using</span> System.Text;</strong>
<strong><span style="color: #0000ff;">using</span> System.Windows.Forms;</strong>

<strong><span style="color: #0000ff;">namespace</span> butonTiklamaOyunu</strong>
<strong>{</strong>
<strong> <span style="color: #0000ff;">public partial class</span> Form1 : Form</strong>
<strong> {</strong>
<strong> <span style="color: #0000ff;">public</span> Form1()</strong>
<strong> {</strong>
<strong> InitializeComponent();</strong>
<strong> }</strong>

<strong><span style="color: #0000ff;">private void</span> button1_Click(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>

<strong> textBox1.Text =(<span style="color: #33cccc;">Convert</span>.ToInt32(textBox1.Text)+5).ToString();</strong>
<strong> <span style="color: #993300;">//butonumuza tıklayabildigimiz zaman textBox ımıza her tıklamada 5 puan eklenyo</span></strong>
<strong><span style="color: #993300;"> //bu islemi dahada genisletebiliriz ama basit bisey yapalim</span></strong>
<strong> }</strong>
<strong> <span style="color: #993300;">//butonun mouseMove olayına tıkladigimiz zaman asagidaki kod calisacak</span></strong>
<strong> <span style="color: #0000ff;">private void</span> button1_MouseMove(object sender, MouseEventArgs e)</strong>
<strong> {</strong>
<strong> <span style="color: #33cccc;">Random</span> cordinate = <span style="color: #0000ff;">new</span> <span style="color: #33cccc;">Random()</span>;</strong>
<strong> <span style="color: #993300;">//rastgele deger secme nesnesi olan random fonksiyonunu olusturuyoruz</span></strong>

<strong>button1.Top = <span style="color: #33cccc;">Convert</span>.ToInt32(cordinate.Next(<span style="color: #0000ff;">this</span>.Size.Height-(textBox1.Size.Height+button1.Size.Height)));</strong>
<strong> <span style="color: #993300;">//buton1 in y kordinatini rastgele seciyoruz</span></strong>
<strong><span style="color: #993300;"> //buton1 in y kordinati max deger olarak formun boyutundan textboxun ve butonumuzun yuksekligini cıkariyoruz</span></strong>

<strong>button1.Left = <span style="color: #33cccc;">Convert</span>.ToInt32(cordinate.Next(<span style="color: #0000ff;">this</span>.Size.Width - button1.Size.Width));</strong>
<strong> <span style="color: #993300;">//butonumuzun x kordinatini rastgele yaziyoruz</span></strong>
<strong><span style="color: #993300;"> //boton1 in y kordinatini max degerini formun boyutundan butonumuzun widhtini cıkararak bulyoz</span></strong>

<strong>}</strong>
<strong> }</strong>
<strong>}</strong>
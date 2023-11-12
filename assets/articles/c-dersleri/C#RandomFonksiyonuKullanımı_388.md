&nbsp;

<strong><span style="color: #0000ff;">using</span> System;</strong>

<strong><span style="color: #0000ff;">using</span> System.Collections.Generic;</strong>
<strong><span style="color: #0000ff;">using</span> System.ComponentModel;</strong>
<strong><span style="color: #0000ff;">using</span> System.Data;</strong>
<strong><span style="color: #0000ff;">using</span> System.Drawing;</strong>
<strong><span style="color: #0000ff;">using</span> System.Linq;</strong>
<strong><span style="color: #0000ff;">using</span> System.Text;</strong>
<strong><span style="color: #0000ff;">using</span> System.Windows.Forms;</strong>

<strong><span style="color: #0000ff;">namespace</span> randomKullanimi</strong>
<strong>{</strong>
<strong> <span style="color: #0000ff;">public</span> <span style="color: #0000ff;">partial</span> <span style="color: #0000ff;">class</span> Form1 : Form</strong>
<strong> {</strong>
<strong> <span style="color: #0000ff;">public</span> Form1()</strong>
<strong> {</strong>
<strong> InitializeComponent();</strong>
<strong> }</strong>

<strong><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">void</span> Form1_Load(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>
<strong><span style="color: #808080;"> Random</span> rnd = <span style="color: #0000ff;">new</span> <span style="color: #808080;">Random()</span>;</strong>
<strong> label1.Text = rnd.Next(1000,9999).ToString();</strong>

<strong> comboBox1.Items.Add(<span style="color: #ff0000;">"kırmızı"</span>);</strong>
<strong> comboBox1.Items.Add(<span style="color: #ff0000;">"mavi"</span>);</strong>

<strong>toolStripComboBox1.Text =<span style="color: #ff0000;"> "renk seciniz"</span>;</strong>
<strong> toolStripComboBox1.Items.Add(<span style="color: #ff0000;">"kırmızı"</span>);</strong>
<strong> toolStripComboBox1.Items.Add(<span style="color: #ff0000;">"mavi"</span>);</strong>

<strong>}</strong>

<strong><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">void</span> button1_Click(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>

<span style="color: #ff0000;"><strong>//trim fonksiyonu ile yazdigimiz bosluklari silyor</strong></span>
<span style="color: #ff0000;"><strong> //yani bosluk koysak bile yazdigimiz kullanici adinda kabul edyo yazdigimiz kullanici adini</strong></span>

&nbsp;

<strong><span style="color: #0000ff;">if</span> (textBox1.Text.Trim() == label1.Text  &amp;&amp;  textBox2.Text.Trim() == <span style="color: #ff0000;">"onur" </span> &amp;&amp; textBox3.Text.Trim() == <span style="color: #ff0000;">"123"</span>  &amp;&amp; comboBox1.Text != "")</strong>
<strong> {</strong>
<strong> label5.Text =<span style="color: #ff0000;"> "giris dogru"</span>;</strong>
<strong> Form frm = new Form2();</strong>
<span style="color: #ff0000;"><strong> //form nesnesinden bitane form2 nesnesi cıkariyoruz</strong></span>

<strong>frm.Show();</strong>
<span style="color: #ff0000;"><strong> //form2 yi gosteriyoruz</strong></span>

<strong><span style="color: #0000ff;">this</span>.Hide();</strong>
<span style="color: #ff0000;"><strong> //hide fonksiyonu ile ilk formumuzu sakliyoruz yani ortada bi tek form2 kalyo</strong></span>
<strong> }</strong>

<span style="color: #0000ff;"><strong> else</strong></span>
<strong> {</strong>
<strong><span style="color: #808080;"> MessageBox</span>.Show(<span style="color: #ff0000;">"giris hatali"</span>);</strong>
<strong> label5.Text = <span style="color: #ff0000;">"giris hatali"</span>;</strong>
<span style="color: #ff0000;"><strong> //girisler hataliysa bu kodlar calisacak</strong></span>

<strong>}</strong>
<strong> }</strong>

<strong><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">void</span> comboBox1_SelectedIndexChanged(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>

<strong>Form frm2 = new Form2();</strong>

<strong><span style="color: #0000ff;">if</span> (comboBox1.SelectedIndex == 0)</strong>
<strong> {</strong>
<strong> frm2.BackColor = Color.Red;</strong>
<strong> }</strong>
<strong><span style="color: #0000ff;"> else</span> <span style="color: #0000ff;">if</span> (comboBox1.SelectedIndex == 1)</strong>
<strong> {</strong>
<strong> frm2.BackColor = Color.Blue;</strong>
<strong> }</strong>

<strong> }</strong>

<strong><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">void</span> toolStripComboBox1_Click(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>

<strong><span style="color: #0000ff;"> if</span> (toolStripComboBox1.SelectedIndex==0)</strong>
<strong> {</strong>
<strong><span style="color: #0000ff;"> this</span>.BackColor = Color.Red;</strong>
<strong> }</strong>
<strong><span style="color: #0000ff;"> else</span> <span style="color: #0000ff;">if</span> (toolStripComboBox1.SelectedIndex==1)</strong>
<strong> {</strong>
<strong><span style="color: #0000ff;"> this</span>.BackColor = Color.Blue;</strong>
<strong> }</strong>
<strong> }</strong>

<strong><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">void</span> toolStripButton1_Click(<span style="color: #0000ff;">object</span> sender, EventArgs e)</strong>
<strong> {</strong>
<strong> textBox1.Text = <span style="color: #ff0000;">" "</span>;</strong>
<strong> textBox2.Text = <span style="color: #ff0000;">" "</span>;</strong>
<strong> textBox3.Text = <span style="color: #ff0000;">" "</span>;</strong>
<strong> comboBox1.Text =<span style="color: #ff0000;"> " "</span>;</strong>
<strong> }</strong>
<strong> }</strong>
<strong>}</strong>

<span style="color: #888888;">--------------------------------------------------------------------------------------------------------------------------------------------</span>

form2 ye bu kodlari yazalim

<strong><span style="color: #0000ff;">using</span> System;</strong>
<strong><span style="color: #0000ff;">using</span> System.Collections.Generic;</strong>
<strong><span style="color: #0000ff;">using</span> System.ComponentModel;</strong>
<strong><span style="color: #0000ff;">using</span> System.Data;</strong>
<strong><span style="color: #0000ff;">using</span> System.Drawing;</strong>
<strong><span style="color: #0000ff;">using</span> System.Linq;</strong>
<strong><span style="color: #0000ff;">using</span> System.Text;</strong>
<strong><span style="color: #0000ff;">using</span> System.Windows.Forms;</strong>

<strong><span style="color: #0000ff;">namespace</span> randomKullanimi</strong>
<strong>{</strong>
<strong><span style="color: #0000ff;"> public</span> <span style="color: #0000ff;">partial class</span> Form2 : Form</strong>
<strong> {</strong>
<strong><span style="color: #0000ff;"> public</span> Form2()</strong>
<strong> {</strong>
<strong> InitializeComponent();</strong>
<strong> }</strong>

<strong><span style="color: #0000ff;">private void</span> Form2_FormClosing(<span style="color: #0000ff;">object</span> sender, FormClosingEventArgs e)</strong>
<strong> {</strong>

<strong><span style="color: #808080;">DialogResult</span> dr = new <span style="color: #808080;">DialogResult()</span>;</strong>
<strong> dr = <span style="color: #808080;">MessageBox</span>.Show("<span style="color: #ff0000;">form1 e gecmek istiyomusunuz"</span>,<span style="color: #ff0000;">"bilgilendirme",</span><span style="color: #808080;">MessageBoxButtons</span>.YesNoCancel,<span style="color: #808080;">MessageBoxIcon</span>.Question);</strong>
<strong><span style="color: #0000ff;"> if</span> (dr==<span style="color: #808080;">DialogResult</span>.Yes)</strong>
<strong> {</strong>
<strong><span style="color: #808080;"> Form</span> frm1 = new <span style="color: #808080;">Form1()</span>;</strong>
<strong> frm1.Show();</strong>
<strong><span style="color: #0000ff;"> this</span>.Hide();</strong>

<strong>}</strong>
<strong><span style="color: #0000ff;"> else</span> <span style="color: #0000ff;">if</span> (dr == <span style="color: #808080;">DialogResult</span>.No)</strong>
<strong> {</strong>
<strong><span style="color: #808080;"> Application</span>.Exit();</strong>
<strong> }</strong>

<strong> }</strong>
<strong> }</strong>
<strong>}</strong>

&nbsp;

&nbsp;

<a href="http://www.onurkaraduman.com/wp-content/uploads/proje1.jpg"><img class="alignnone size-full wp-image-393" title="proje1" src="http://www.onurkaraduman.com/wp-content/uploads/proje1.jpg" alt="" /></a>

&nbsp;

<a href="http://www.onurkaraduman.com/wp-content/uploads/randomKullanimi.rar">buradan projeyi indirebilirsiniz </a>
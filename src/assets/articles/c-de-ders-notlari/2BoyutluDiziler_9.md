dizi konusunda 2 boyutlu dizileri ornegimizde gorecez.
<ol>
	<li>ilk olarak diziye kullanicidan deger girilmesi isteniyor</li>
	<li>sonra bu degerler diziye aktarilyor</li>
	<li>son olarak dizilerin indexleriyle birlikte dizinin icindeki sayilar ekrana yazdirilyor</li>
</ol>
<em><strong>#include &lt;stdio.h&gt;</strong></em>
<em><strong>#include &lt;conio.h&gt;</strong></em>

<em><strong>void main()</strong></em>
<em><strong>{</strong></em>
<em><strong> int ikiBoyutDizi[3][3];</strong></em>
<em><strong> int x,y;</strong></em>
<em><strong> for(x=0; x&lt;=2; x++)</strong></em>
<em><strong> {</strong></em>
<em><strong> for(y=0; y&lt;=2; y++)</strong></em>
<em><strong> {</strong></em>
<em><strong> ikiBoyutDizi[x][y] = (x+y);</strong></em>
<em><strong> }</strong></em>
<em><strong> }</strong></em>
<em><strong> for(x=0; x&lt;=2; x++)</strong></em>
<em><strong> {</strong></em>
<em><strong> for( y=0; y&lt;=2; y++)</strong></em>
<em><strong> {</strong></em>
<em><strong> printf("2boyutluDizi[%d][%d]=%d", x, y, ikiBoyutDizi[x][y]);</strong></em>

<em><strong>}</strong></em>
<em><strong> }</strong></em>
<em><strong> getch();</strong></em>
<em><strong> }</strong></em>
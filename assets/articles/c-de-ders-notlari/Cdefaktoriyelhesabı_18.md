faktoriyel hesabi

<pre>
<em><strong>
</strong></em>

<em><strong>#include &lt;conio.h&gt;</strong></em>
<em><strong>#include &lt;stdio.h&gt;</strong></em>

<em><strong></strong></em><em><strong> int faktoriyel(int n)</strong></em>
<em><strong>main()</strong></em>
<em><strong>{</strong></em>
<em><strong>  </strong></em>
<em><strong>   int m;</strong></em>
<em><strong>   printf("bır sayı girin");</strong></em>
<em><strong>   scanf("%d",&amp;m);</strong></em>
<em><strong>  printf("sayının faktoriyeli=%d",faktoriyel(m));</strong></em>
<em><strong>  getch();</strong></em>
<em><strong>}</strong></em>
<em><strong>int faktoriyel(int n)</strong></em>
<em><strong>{</strong></em>
<em><strong>   int i,f;</strong></em>
<em><strong>   f=1;</strong></em>
<em><strong>  for(i=1;i&lt;=n;i++)</strong></em>
<em><strong>  f=f*i;</strong></em>
<em><strong>  return f;</strong></em>
<em><strong>}</strong></em>

</pre>
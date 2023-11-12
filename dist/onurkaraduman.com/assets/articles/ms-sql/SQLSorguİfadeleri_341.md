<h4>örnek veritabani olan NORTHWİND veritabanını <a href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=23654" target="_blank">buradan indirebilirsiniz.</a></h4>
<h1><span style="color: #003300;">1.Örnek Sorgu</span></h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--herbir katogoriye ait kac adet urun var??</span></span>
<h5><span style="color: #0000ff;">select</span> c.CategoryID,c.CategoryName,<span style="color: #0000ff;">SUM</span>(p.UnitsInStock) <span style="color: #0000ff;">as</span> UrunCesidi
<span style="color: #0000ff;">from</span> Categories c <span style="color: #0000ff;">inner join</span> Products p
<span style="color: #0000ff;">on</span> c.CategoryID=p.CategoryID
<span style="color: #0000ff;">group</span> <span style="color: #0000ff;">by</span> c.CategoryName,c.CategoryID</h5>
<h1>2.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--her urunun adini ve tedarikci adini listele??</span></span>
<h5><span style="color: #0000ff;">select</span> Suppliers.CompanyName,Products.ProductName
<span style="color: #0000ff;">from</span> Suppliers <span style="color: #0000ff;">join</span> Products
<span style="color: #0000ff;">on</span> Products.SupplierID= Suppliers.SupplierID</h5>
<h1>3.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--urunu olmayan tedarikci var mi??</span></span>
<h5><span style="color: #0000ff;">select</span> Suppliers.CompanyName,Products.ProductName
<span style="color: #0000ff;">from</span> Suppliers <span style="color: #0000ff;">left</span> <span style="color: #0000ff;">join</span> Products
<span style="color: #0000ff;">on</span> Products.SupplierID= Suppliers.SupplierID</h5>
<h1>4.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--her bir urunden nekadar satmisiz??</span></span>
<h5><span style="color: #0000ff;">select</span> Products.ProductName, <span style="color: #0000ff;">sum</span>([Order Details].Quantity)
<span style="color: #0000ff;">from</span> [Order Details] <span style="color: #0000ff;">join</span> Products
<span style="color: #0000ff;">on</span> [Order Details].ProductID=Products.ProductID
<span style="color: #0000ff;">group by</span> Products.ProductName</h5>
&nbsp;
<h1>5.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;">--1000 den fazla satilan urunler hangisi??</span></h5>
<h6><span style="color: #0000ff;">select</span> Products.ProductName, <span style="color: #0000ff;">sum</span>([Order Details].Quantity)
<span style="color: #0000ff;">from</span> [Order Details] <span style="color: #0000ff;">join</span> Products
<span style="color: #0000ff;">on</span> [Order Details].ProductID=Products.ProductID
<span style="color: #0000ff;">group by</span> Products.ProductName
<span style="color: #0000ff;">having sum</span>([Order Details].Quantity)&gt;1000
<span style="color: #0000ff;">order by sum</span>([Order Details].Quantity)</h6>
&nbsp;
<h1>6.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;">--satılan her bir urunun toplam tutuari nedir??</span>
<h5><span style="color: #0000ff;">select</span> Products.ProductName, <span style="color: #0000ff;">SUM</span>([Order Details].UnitPrice*[Order Details].Quantity)
<span style="color: #0000ff;">from</span> Products <span style="color: #0000ff;">join</span> [Order Details]
<span style="color: #0000ff;">on</span> Products.ProductID=[Order Details].ProductID
<span style="color: #0000ff;">group by</span> Products.ProductName</h5>
<h1>7.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;">--kac musterimiz var??</span>
<h5><span style="color: #0000ff;">select</span> <span style="color: #0000ff;">count</span>(Customers.CustomerID)
<span style="color: #0000ff;">from</span> Customers</h5>
<h1>8.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;">--her bir country den kacar adet musterimiz var??</span></h5>
<h6><span style="color: #0000ff;">select</span> Customers.Country,<span style="color: #0000ff;">COUNT</span>(*)
<span style="color: #0000ff;">from</span> Customers
<span style="color: #0000ff;">group by</span> country</h6>
<h1>9.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--ulkesi brazılya olan musterilerimizin tum bılgileri??</span></span>
<h5><span style="color: #0000ff;">select</span>  *  <span style="color: #0000ff;">from</span> Customers
<span style="color: #0000ff;">where</span> Customers.Country='Brazil'</h5>
&nbsp;
<h1>10.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;">--ulkesi brazılya olan musterilerimizin tum bılgileri ve fax nosu ollmayan musteriler??</span></h5>
<h5><span style="color: #0000ff;">select</span> <span style="color: #0000ff;">* from</span> Customers
<span style="color: #0000ff;">where</span> Customers.Country='Brazil' <span style="color: #0000ff;">and</span> Fax is null</h5>
<h1>11.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;">--ulkesi brazıl olan musterilerin verdigi sparisleri listele??</span></h5>
<h5><span style="color: #0000ff;">select</span> Customers.CompanyName,orders.<span style="color: #0000ff;">*</span>
<span style="color: #0000ff;">from</span> Customers <span style="color: #0000ff;">join</span> orders
<span style="color: #0000ff;">on</span> Customers.CustomerID=Orders.CustomerID
<span style="color: #0000ff;">where</span> Customers.Country='Brazil'</h5>
<h1>12.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;">--ulkesi brazil olan musterilerimizin teslimat tarihi ayni ay olan siparisler hangisi</span></h5>
<h5><span style="color: #0000ff;">select</span> Customers.CompanyName,Orders.<span style="color: #0000ff;">*</span>
<span style="color: #0000ff;">from</span> Customers <span style="color: #0000ff;">join</span> orders
<span style="color: #0000ff;">on</span> Customers.CustomerID = Orders.CustomerID
<span style="color: #0000ff;">where</span> <span style="color: #0000ff;">MONTH</span>(Orders.OrderDate) = <span style="color: #0000ff;">MONTH</span>(Orders.ShippedDate) <span style="color: #0000ff;">and</span> Customers.Country='Brazil'</h5>
<h1>13.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--her bir sipariste hangi urunler siparis edilmis ve tutaarlari</span></span>
<h5><span style="color: #0000ff;">select</span> pr.ProductName,od.<span style="color: #0000ff;">*</span>
<span style="color: #0000ff;">from</span> [Order Details] od <span style="color: #0000ff;">join</span> Products pr
<span style="color: #0000ff;">on</span> od.ProductID=pr.ProductID</h5>
<h1>14.Örnek Sorgu</h1>
<h5><span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--herbir siparisinsahibi kim ve bu musteriler hangi urunu almis</span></span></h5>
<span style="color: #0000ff;">select</span> Customers.CompanyName, Products.ProductName, ([Order Details].Quantity <span style="color: #0000ff;">*</span> [Order Details].UnitPrice)
<span style="color: #0000ff;">from</span> Customers <span style="color: #0000ff;">inner join</span> Orders <span style="color: #0000ff;">ON</span> Customers.CustomerID = Orders.CustomerID
<span style="color: #0000ff;">inner join</span> [Order Details] <span style="color: #0000ff;">on</span> Orders.OrderID = [Order Details].OrderID
<span style="color: #0000ff;">inner join</span> Products <span style="color: #0000ff;">on</span> [Order Details].ProductID = Products.ProductID
<h1>15.Örnek Sorgu</h1>
<span style="text-decoration: underline; color: #003300;"><span style="text-decoration: underline;">--herbir musterinin siparis bazında faatura tutarini hesapla</span></span>
<h5><span style="color: #0000ff;">select</span> Customers.CompanyName, [Order Details].OrderID, <span style="color: #0000ff;">sum</span>([Order Details].Quantity * [Order Details].UnitPrice)  total
<span style="color: #0000ff;">from</span> Customers <span style="color: #0000ff;">inner join</span> Orders <span style="color: #0000ff;">ON</span> Customers.CustomerID = Orders.CustomerID
<span style="color: #0000ff;">inner join</span> [Order Details] <span style="color: #0000ff;">on</span> Orders.OrderID = [Order Details].OrderID
<span style="color: #0000ff;">inner join</span> Products <span style="color: #0000ff;">on</span> [Order Details].ProductID = Products.ProductID
<span style="color: #0000ff;">group by</span> Customers.CompanyName,[Order Details].OrderID</h5>
<h1></h1>
&nbsp;

<span style="color: #0000ff;">
</span>
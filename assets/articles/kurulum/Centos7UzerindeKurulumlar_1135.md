<h1>GIT</h1>
<pre class="code-pre "><code>sudo yum install git

</code>git --version
</pre>

<h1>MYSQL</h1>
<pre>wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update

</pre>
<pre>sudo yum install mysql-server
sudo systemctl start mysqld

</pre>
<pre>sudo mysql_secure_installation

</pre>
<pre>mysql -u root -p</pre>
<strong>UTF8 Ayarı</strong>
<pre>vi /etc/my.conf
</pre>
Aşağıdaki satırları ekleyin.
<pre>#eklenenler
character-set-server=utf8
default-collation=utf8_unicode_ci</pre>

<h1>Jdk8</h1>

<h3 class="heading2">For 64Bit</h3>
<pre># cd /opt/
# wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u101-b13/jdk-8u101-linux-x64.tar.gz"

# tar xzf jdk-8u101-linux-x64.tar.gz</pre>
<h3 class="heading2">For 32Bit</h3>
<pre># cd /opt/
# wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u101-b13/jdk-8u101-linux-i586.tar.gz"

# tar xzf jdk-8u101-linux-i586.tar.gz



</pre>
<pre># cd /opt/jdk1.8.0_101/
# alternatives --install /usr/bin/java java /opt/jdk1.8.0_101/bin/java 2
# alternatives --config java

</pre>
<strong>check installation</strong>
<pre>root@tecadmin ~# java -version

</pre>
<ul>
	<li>Setup <strong>JAVA_HOME</strong> Variable</li>
</ul>
<pre># export JAVA_HOME=/opt/jdk1.8.0_101</pre>
<ul>
	<li>Setup <strong>JRE_HOME</strong> Variable</li>
</ul>
<pre># export JRE_HOME=/opt/jdk1.8.0_101/jre</pre>
<ul>
	<li>Setup <strong>PATH</strong> Variable</li>
</ul>
<pre># export PATH=$PATH:/opt/jdk1.8.0_101/bin:/opt/jdk1.8.0_101/jre/bin</pre>

<h1>MongoDB</h1>

Yum repo da mongodb mevcut olmadığı icin repoya eklememiz gerekiyor.
<ul>
	<li>Yeni bir repo yaratalım mongodb adında.</li>
</ul>
&nbsp;
<pre>
vim /etc/yum.repos.d/mongodb.repo
</pre>
&nbsp;
<ul>
	<li>Eger sisteminiz 64 bit ise aşagıdaki gibi dosyamızı duzenleyeylim.</li>
</ul>
&nbsp;
<pre>
[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1
</pre>
&nbsp;
<ul>
	<li>Eger 32 bit ise</li>
</ul>
&nbsp;
<pre>
[mongodb]
name=MongoDB Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/i686/
gpgcheck=0
enabled=1
</pre>
&nbsp;
<ul>
	<li>Tum paketlerin guncelleme islemlerini yapalım oncelikle.</li>
</ul>
&nbsp;
<pre>
yum -y update
</pre>
&nbsp;
<ul>
	<li>Ardından paketimizi yukleyelim.</li>
</ul>
&nbsp;
<pre>
yum -y install mongodb-org mongodb-org-server
</pre>
&nbsp;
<ul>
	<li>Başarılı bir şekilde paketimiz kurulduktan sonra, mongodb yi çalıştırabiliriz.</li>
</ul>
&nbsp;
<pre>
systemctl start mongod
</pre>
&nbsp;
<ul>
	<li>Başladıgından emin olmak icin mongodb statusune bakabiliriz.</li>
</ul>
&nbsp;
<pre>
systemctl status mongod
</pre>
&nbsp;
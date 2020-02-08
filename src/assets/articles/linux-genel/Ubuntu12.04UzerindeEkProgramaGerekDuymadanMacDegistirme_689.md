Win8 de mac adresi degistirmek icin baya ugrastım , bir kac program var gercekten degistiriyo ama her girdigin mac adresini kayıt edemiyor.Sadece random butonuna bastıgın zamanki sana programın onerdigi mac adresiyle degistirme yapılıyor.Bu yuzden mac adresi degistirecekseniz ve bilgisayarınızda da win8 varsa hiç ugrasmayın zaman kaybetmeyin bir tane harddiske ubuntu yu kurun ve ubuntu terminalde asagıdaki kodları yazin.Ama bilgisayarı kapatıp actıktan sonra tekrar eski haline donuyor mac adresi.

sudo ifconfig -a  //bu komutla once wifi ve ethernet mac adreslerimizi ogrenelim degistireceginiz mac adresini bir yere not etmenizi oneririm ne olur ne olmaz

sudo service network-manager stop   //network managerın calısmasını durduralım
sudo ifconfig wlan0  hw ether  12:34:56:78:90:00   //wlan0 ile wifi mac adresi degistirecegimizi soyluyoruz .eger ethernet degistirecekseniz eth0 yazarsınız.

sudo service network-manager restart  //network manager ı yeniden baslatıyoruz

Yani Win8 de o kadar ugrasıp degistiremedigim mac adresi ubuntuda  2 satır komutla anında degistiriliyor.
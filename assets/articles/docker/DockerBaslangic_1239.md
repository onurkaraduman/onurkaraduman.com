Docker Kurulumu icin suradaki adimlari takip edebilirsiniz:
https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu/

Eger herhangi bir uygulamayi docker container icerisinde calistirmak istiyorsaniz ubuntu docker containera ihtiyaciniz var. Bunun icin asagidaki komutu calistirabilirsiniz:
<pre> docker run -ti ubuntu /bin/bash</pre>
Bu komut ubuntu docker containeri yukleyip calistiracaktir. Simdi docker container icerisinde istediginiz uygulamayi kurabilirsiniz.

Halihazirda calisan bir docker container ssh baglantisi yapmak icin:
<pre>docker exec -it  /bin/bash
</pre>
Pivotal’ a bağlı Spring ekibi tarafından geliştirilmiş hızlı web uygulama geliştirme frameworküdür. Gerçekten çok pratik bir uygulama geliştirme ortamı sunuyor bize. Xml konfigurasyonlarla uğraşmadan basmakalıp kodlara ihtiyaç duymadan uygulamamızı ayağa kaldırabiliyoruz. Herhangi bir containera ihtiyaç duymadan uygulama çalışır duruma geliyor. Burada containerlar tomcat glassfish gibi sunucu uygulamalardır. İşleyiş tam olarak şu şekilde gerçekleşiyor. Uygulama ayağa kalkarken ilk olarak kendi üzerinde mevcut olan embedded containerı ayağa kaldırır ve kendini otomatik olarak bu container üzerine deploy eder.<!--more-->
Bu yazımda spring boot ile rest servis ornegi yapacagım. Mysql, spring data kullanacağım. Kod kalabalığından kurtulmak için lombok kütüphanesini kullanacağım. Lombok kütüphanesi getter-setter, constructor, equals hash gibi methodları anotasyon vasıtasıyla tanımlamamızı sağlar. Eğer bir sınıf içerisinde memberlardan herhangi birini degisitirirdiginiz zaman getter ve setter methodunuda silip yeniden duzenlemeniz gerekiyordu ama artık burada lombok bu sorunu ortadak kaldırdı. Bu arada Intellij kullanıyorsanız lombok kullanabilmek için plugin kurmanız gerekiyor. Yoksa getter ve setter methodlarını geliştirme yaparken goremiyorsunuz.
Lombok dependency
<pre class="brush: java; highlight: [1, 3]">   org.projectlombok
   lombok
   1.16.6

</pre>
Spring-data dpendency
<pre class="brush: java; highlight: [1, 3]">   org.springframework.boot
   spring-boot-starter-data-jpa
   RELEASE

</pre>
Şimdi entitylerimiz oluşturmaya başlayabiliriz. Kutuphane uygulaması yapacagım. Sadece kitap ismi ve birkaç bilgisi olacak. Bunun için Book adında bir entity oluşturulaım.
package com.onrkrdmn.domain;
<pre class="brush: java; highlight: [1, 3]">import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Created by BIGBOSS on 9.05.2016.
 */
@Entity
@Table(name = "BOOK")
@lombok.Getter
@lombok.Setter
public class Book extends PersistanceObject {

    private String name;

    @Lob
    private String summary;
}
</pre>
İsim ve özet bize yeterli olacaktır. Buradaki @Lob anotasyonunu tutacağımız veri büyük olabileceği için kullandık.
Id property kullanmamız gerekiyor. Eğer başka bir entity daha tanımlamış olsaydık ondada yine aynı şekilde Id property kullanmamız gerekiyordu. Baktığımız zaman Id tüm entitylerde kullanılması gereken property. O zaman ortak propertyleri bir sınıfta toplayıp oluşacak entityleri bu sınıftan turetirsek tekrar tekrar aynı propertyleri tanımlamamış oluruz. Bu yüzden base bir sınıf oluşturualım.
PersistanceObject.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * Created by BIGBOSS on 8.05.2016.
 */
@MappedSuperclass
@lombok.Getter
@lombok.Setter
public abstract class PersistanceObject implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
</pre>
Book adında entity’i oluşturduk. Şimdi database işlemlerini yapmak için repository ve service lerimizi yazacağız.
BookRepository.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.repository;

import com.onrkrdmn.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by BIGBOSS on 11.05.2016.
 */
@Repository
public interface BookRepository extends JpaRepository&lt;Book, Integer&gt; , JpaSpecificationExecutor{
   
}
</pre>
Burada JpaRepository spring data ile gelen bir kavram. Otomatik olarak database işlemlerini buradan kullanabileceğiz.
Şimdi service katmanımızı yazmaya başlayalım. Öncelikle bir interface oluşturup bizim ihtiyacımız olan işlemleri burada tanımlıyoruz. Generic bir yapıda yapıp başka bir entity ile de kullanmayı sağlayabiliriz.
Service.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.service;

import java.util.List;

/**
 * Created by BIGBOSS on 8.05.2016.
 */
public interface Service {
    public T save(T entity);
    public T update(T entity);
    public void delete(T entity);
    public List findAll();
    public T findOne(int id);
}
</pre>
İmplementasyonu
BookService.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.service;

import com.onrkrdmn.domain.Book;
import com.onrkrdmn.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by BIGBOSS on 11.05.2016.
 */
@Service
public class BookService implements com.onrkrdmn.service.Service {

    @Autowired
    private BookRepository repository;

    @Override
    public Book save(Book entity) {
        return repository.save(entity);
    }

    @Override
    public Book update(Book entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Book entity) {
        repository.delete(entity);
    }

    @Override
    public List findAll() {
        return repository.findAll();
    }

    @Override
    public Book findOne(int id) {
        return repository.findOne(id);
    }

}
</pre>
@Service anotasyonu ile bu sınıfın servis olduğunu ve uygulama ayağa kalkarken oluşturulması gerektiğini söyluyoruz.

Şimdi artık tüm işlemlerimizi hallettikten sonra controller sınıfımızı yazabiliriz. Controller sınıfı dışarıyla haberleştigimiz, clienttan gelen isteklerin ulaştığı sınıftır.
BookController.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.controller;

import com.onrkrdmn.domain.Book;
import com.onrkrdmn.model.Response;
import com.onrkrdmn.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by BIGBOSS on 11.05.2016.
 */
@RestController
@RequestMapping(value = "/books")
public class BookController  {

    @Autowired
    private BookService service;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Response list() {
        List bookList = service.findAll();
        Response bookResponse = new Response&lt;&gt;("200", "Success", bookList);
        return bookResponse;
    }

    @RequestMapping(value = "",
            method = RequestMethod.POST)
    public Response create(@RequestBody Book book) {
        Book saveBook = this.service.save(book);
        return new Response("200", "Success", saveBook);
    }
}
 
</pre>
@RestController anotasyonu rest service olduğunu belirtiyor. @RequestMapping(value=”/books”) ise url kısmında /books yazılan tüm isteklerin bu sınıfa düşmesini sağlıyor. Rest best practice diye araştırırsanız buradaki isimlendirmelerin filan detayını bulabilirsiniz. Birazcık bahsedeyim:
Get /books -&gt; tüm kitapları getirir.
Post /books -&gt;kitap eklemeyi sağlar
Get /books/1 -&gt;1 numaralı gitabı getirir
Get /books?limit=10 -&gt;sadece 10 adet kitabı getiirir.

Ben methodlara geri donuş degeri olarak generic bir yapı hazırladım. Tum responslar bu formatta donuyorlar.
Response.java
<pre class="brush: java; highlight: [1, 3]">package com.onrkrdmn.model;

import lombok.AllArgsConstructor;

import java.util.Arrays;
import java.util.List;

/**
 * Created by BIGBOSS on 14.05.2016.
 */
@lombok.Getter
@lombok.Setter
@AllArgsConstructor
public class Response {
    private String code;
    private String message;
    private List data;

    public Response(String code, String message, T entity) {
        this.code = code;
        this.message = message;
        data = Arrays.asList(entity);
    }
}

</pre>
Response içerisinde hata kodu, hata mesajı ve datalistesini barındırıyor. Burada data listesi generic olduğu için custom sınıflarınızı döndürebilirsiniz.
Artık herşeyi tamamladıktan sonra database configuration dosyasını resorces klasoru altına application.properties dosyası içerisine ekliyoruz.
application.properties

<pre class="brush: java; highlight: [1, 3]">
spring.datasource.url= jdbc:mysql://localhost:3306/spring_rest_demo_db
spring.datasource.username=root
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=update
</pre>
url kısmı database connection stringini içeriyor.
Hibernate.ddl-auto ifadesi uygulama ayağa kalkarken schema updati ayarlayabiliyoruz. Burası update kalırsa entitylerde yapılmış degisikli db’ye yansır. None olarak bırakılırsa db tarafında herhangi bir degisikli meydana gelmez.
Son olarak DemoApplication.java çalıştırıyoruz ve
http://localhost:8080/books linkine tıklıyoruz. Db de data olmadıgı için boş gelecektir.
Post methodunu postmann yada başka rest service test tool’u ile test edebilirsiniz.
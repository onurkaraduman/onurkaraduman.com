Bugün  birkaç satır kod ile bazı uygulamalarımızda kullanabileceğimiz ve C# 3.0’ın özelliklerinden yararlanarak Extension Method’larla ilgili bir örnek paylaşacağım.

Speech Synthesizer Kullanımı : Sesli Okuma Olarak Adlandırdığımız olaydır.

txtWord.Text=”Silverlight”;

txtWord.Text.Speak();

Yukarıdaki iki satırlık kodu çalışır kılmak mümkün müdür acaba?Tabii ki mümkün:)İlk olarak extension method için static bir class tanımlamak ve bu static class’ın içine static olan extension metodumuzu tanımlamalıyız.Ama önce <strong>System.Speech.Synthesis</strong> namespace’ini projemize referans olarak eklemeliyiz.Referansımızı ekledikten sonra  SpeechSynthesizer’ın bir instance alarak bu nesne üzerinden Speak metoduna ulaşabiliriz.

public static class Speak

{

public static void Speak(this string text)

{

SpeechSynthesizer synth = new SpeechSynthesizer();

synth.Speak(text);

}

}

Burada diğer önemli bir nokta metoda gelen parametre tipinden önceki  this anahtar kelimesidir.<strong>Extension Method</strong> tanımlanırken this anahtar kelimesi kullanılır.Bu keyword aslında kullanım şeklinden de anlaşılacağı gibi çağrıldığı nesne üzerinden işlem yapabilmek için kullanılır.Örnekte de göreceğiniz gibi tekrar parametre göndermeye gerek kalmamıştır.Artık Extension metodumuz hazır,kullanmak içinse bir winform uygulaması açıp forma bir textbox ve bir buton koyun.Butona tıklandığında ise textboxa yazılan yazıyı seslendirsin.

private void button1_Click(object sender, EventArgs e)

{

textBox1.Text.Speak();

}

<a href="http://blog.akoken.com/post/2009/08/20/Speech-Synthesizer-Kullanimi.aspx">http://blog.akoken.com/post/2009/08/20/Speech-Synthesizer-Kullanimi.aspx</a>
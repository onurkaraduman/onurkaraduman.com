&nbsp;

Netbeans kullanarak tasarım ortamını yukardaki gibi olusturuyoruz.Şimdi saveAs menuItem'ine click olayının kodnu yazalım.

<span style="text-decoration: underline;">Gerekli Olan Bileşenler</span>
jTextArea
MenuBar
MenuItem<!--more-->

Gerekli tasarımı yaptıktan sonra kodlamaya gecmeden once gerekli library leri indirmemiz lazım.
http://www.printmyfolders.com/Home/PDFBox-Tutorial bu adresteki 1.sıradaki jar dosyasını indirip projemizin library kısmında projemize attach yapalım.

[php]

private void jMenuItem3ActionPerformed(java.awt.event.ActionEvent evt) {
 // TODO add your handling code here:
 JFileChooser jfc = new JFileChooser();
 jfc.setSelectedFile(new File(&quot;deneme.pdf&quot;));
 int userSelect = jfc.showSaveDialog(null);
 if (userSelect==JFileChooser.APPROVE_OPTION) {
 System.out.println(jfc.getSelectedFile());
 try {

 PDDocument documant = new PDDocument();
 PDPage page = new PDPage();
 PDFont font = PDType1Font.HELVETICA_BOLD;
 documant.addPage(page);
 PDPageContentStream contentStream = new PDPageContentStream(documant,page);
 contentStream.beginText();
 contentStream.setFont(font, 12);
 contentStream.moveTextPositionByAmount(100, 700);

 contentStream.drawString(jTextArea1.getText());
 contentStream.endText();
 contentStream.close();
 try {
 documant.save(jfc.getSelectedFile().toString());
 documant.close();
 } catch (COSVisitorException ex) {
 Logger.getLogger(StartPage.class.getName()).log(Level.SEVERE, null, ex);
 }
 } catch (IOException ex) {
 Logger.getLogger(StartPage.class.getName()).log(Level.SEVERE, null, ex);
 }
 }
 }

[/php]

Burada yaptığımız TextArea nın içindeki yazıyı alıp FileChooser ile olusturdugumuz isimde pdf olarak kayedetmek.
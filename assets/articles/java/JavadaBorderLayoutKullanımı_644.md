[php]

import java.awt.BorderLayout;
 import java.awt.event.ActionEvent;import javax.swing.JButton;
 import javax.swing.JFrame;
 import javax.swing.border.Border;public class ClassBorderLayout extends JFrame {private JButton[] buttons;
 private String[] names = {&quot;Hide North&quot;,&quot;Hide South&quot;,&quot;Hide East&quot;,&quot;Hide West&quot;,&quot;Hide Center&quot;};
 private BorderLayout layout;public ClassBorderLayout()
 {
 super(&quot;BorderLayout Trying&quot;);
 layout = new BorderLayout();

for (int i = 0; i &lt; names.length; i++) {

buttons[i] = new JButton(names[i]);
 buttons[i].addActionListener(this);//butun eventleri actionListenera bagladık

}
 add(buttons[0],BorderLayout.NORTH);
 add(buttons[1],BorderLayout.SOUTH);
 add(buttons[2],BorderLayout.EAST);
 add(buttons[3],BorderLayout.WEST);
 add(buttons[4],BorderLayout.CENTER);
 }
 public void actionPerformed(ActionEvent event)
 {
 for(JButton button : buttons)
 {
 if (event.getSource()==button) {
 button.setVisible(false);

}
 else
 button.setVisible(true);
 }
 }

}

[/php]
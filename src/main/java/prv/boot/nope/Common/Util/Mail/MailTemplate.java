package prv.boot.nope.Common.Util.Mail;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.util.ResourceUtils;

import prv.boot.nope.Common.Exception.CustomException;

public enum MailTemplate {
    CERTIFICATION("certificationTmpl.html"),
    ;

    

    final private String templateFileName;
    final private String temapltePath   = "classpath:templates/mail/";

    MailTemplate(String templateFileName) {
        this.templateFileName   = templateFileName;
    }

    public String getTemplate(Object[] oo) {

        String tmpl = null;
        File ff     = null;

        BufferedReader br   = null;

        try {
            ff	= ResourceUtils.getFile(temapltePath + this.templateFileName);
            if(!ff.exists()) throw new CustomException(MailExceptionCode.NOT_EXIST_TEMPLATE);

            br   = new BufferedReader(new FileReader(ff));
            tmpl    = "";
            
            while(br.ready()) {
                tmpl += br.readLine();
            }
            
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return tmpl;
    }

}

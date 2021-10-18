package prv.boot.nope.Domain;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import prv.boot.nope.Common.Util.Mail.MailAccount;
import prv.boot.nope.Common.Util.Mail.MailSender;
import prv.boot.nope.Common.Util.Mail.MailTemplate;

@Controller
public class RootController implements ErrorController {
	
	private final String DEFAULT_PATH	= "index";

	@Value("${nope.mail.template.path}")
	String test;

	@GetMapping("/")
	public String indexPath() {
		return DEFAULT_PATH;
	}

	@GetMapping("/error")
	public String errorPath() {
		return DEFAULT_PATH;
	}

	@GetMapping("/a")
	public String aaaa() {

		try {
			MailSender mailSender   = new MailSender(MailAccount.ADMIN);

            boolean result  = mailSender.setTO("nyg1230@gmail.com")
                                        .setTitle("퉤스트")
                                        .setContent(true, MailTemplate.CERTIFICATION.getTemplate(null))
                                        .send();
            System.out.println(result);
		} catch(Exception e) {
			e.printStackTrace();
		}


		return DEFAULT_PATH;
	}

}

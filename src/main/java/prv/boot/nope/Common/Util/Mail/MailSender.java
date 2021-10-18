package prv.boot.nope.Common.Util.Mail;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import prv.boot.nope.Common.Exception.CustomException;

public class MailSender {
	
	MailAccount mailAccount;
	Session		session;
	MimeMessage message;

	final private String ENDCODING	= "UTF-8";

	public MailSender(MailAccount mailAccount) throws Exception {
		if(mailAccount == null) throw new CustomException(MailExceptionCode.NOT_EXIST_ACCOUNT);
		this.mailAccount	= mailAccount;

		Properties props	= null;
		try {
			props	= MailSmtp.valueOf(mailAccount.getSmtp()).getSmtpSetting();
		} catch(Exception e) {
			throw new CustomException(MailExceptionCode.NOT_EXIST_SMTP);
		}
		
		this.session	= Session.getInstance(props, new javax.mail.Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(mailAccount.getMailAccount(), mailAccount.getMailPassword());
			}
		});

		message	= new MimeMessage(this.session);
	}

	// 수신자 설정 start
	public MailSender setTO(String email) throws AddressException, MessagingException {
		this.message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
		return this;
	}

	public MailSender setTO(String[] emails) throws MessagingException {

		List<InternetAddress> internetAddresses	= new ArrayList<>();

		for(String email : emails) {
			try {
				internetAddresses.add(new InternetAddress(email));
			} catch (AddressException e) {
				e.printStackTrace();
			}
		}
		
		this.message.addRecipients(Message.RecipientType.TO, internetAddresses.toArray(new InternetAddress[internetAddresses.size()]));

		return this;
	}
	// 수신자 설정 end

	// 제목 설정 start
	public MailSender setTitle(String title) throws MessagingException {
		this.message.setSubject(title, this.ENDCODING);
		return this;
	}
	// 제목 설정 end

	// 내용 설정 start
	public MailSender setContent(boolean _html, Object content) throws MessagingException {

		if(_html) {
			this.message.setContent(content, "text/html; charset=" + this.ENDCODING);
		} else {
			this.message.setText(String.valueOf(content), this.ENDCODING);
		}

		return this;
	}
	// 내용 설정 end


	public boolean send() {
		
		boolean sendResult	= false;

		try {
			// this.message.setFrom(new InternetAddress(this.mailAccount.getMailAccount()));
			this.message.setSentDate(new Date());

			// 메일 송신
			Transport.send(message);
			sendResult	= true;

		} catch(AddressException e) {
			e.printStackTrace();
		} catch(MessagingException e) {
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}

		return sendResult;
	}

}

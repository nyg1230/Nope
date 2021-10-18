package prv.boot.nope.Domain.User.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prv.boot.nope.Common.Util.Mail.MailAccount;
import prv.boot.nope.Common.Util.Mail.MailSender;
import prv.boot.nope.Common.Util.Token.JWTToken;
import prv.boot.nope.Domain.User.model.service.UserService;

@RestController
@RequestMapping("/public/api/user/*")
public class UserController {
    
    @Autowired
    private UserService userService;


    @GetMapping("/test")
    public String test() {
        try {
            JWTToken token  = new JWTToken();
            Map<String, Object> payloads    = new HashMap<>();
            token.createToken(payloads);
            System.out.println(token.getToken());
            System.out.println(token.verifyToken());
        } catch(Exception e) {
            e.printStackTrace();
        }
        return "a";
    }

    @GetMapping("/mailTest")
    public String mailTest() {
        // 127.0.0.1:8887/public/api/user/mailTest
        try {
            MailSender mailSender   = new MailSender(MailAccount.ADMIN);

            boolean result  = mailSender.setTO("nyg1230@gmail.com")
                                        .setTitle("퉤스트")
                                        .setContent(true, "<html><h1>앍</h1></html>")
                                        .send();
            System.out.println(result);
        } catch(Exception e) {
            e.printStackTrace();
        }

        return "a";
    }
}

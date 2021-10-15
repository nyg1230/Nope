package prv.boot.nope.Domain.User.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prv.boot.nope.Common.Util.token.JWTToken;
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
}

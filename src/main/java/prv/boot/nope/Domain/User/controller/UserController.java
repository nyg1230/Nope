package prv.boot.nope.Domain.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prv.boot.nope.Domain.User.model.service.UserService;

@RestController
@RequestMapping("/public/api/user/*")
public class UserController {
    // http://127.0.0.1:8887/public/api/user
    // http://127.0.0.1:8887/public/api/user/total-count
    
    @Autowired
    private UserService userService;

    @GetMapping("/total-count")
    public String test() {
        try {
            System.out.println(userService.selectUserTotalCount());
        } catch(Exception e) {
            e.printStackTrace();
        }
        return "a";
    }
}

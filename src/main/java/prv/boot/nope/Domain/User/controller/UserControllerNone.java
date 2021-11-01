package prv.boot.nope.Domain.User.controller;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import prv.boot.nope.Common.Exception.CustomException;
import prv.boot.nope.Common.Util.CustomUtil;
import prv.boot.nope.Common.Util.Token.JWTToken;
import prv.boot.nope.Common.Util.Token.TokenOption;
import prv.boot.nope.Domain.User.exception.UserExceptionCode;
import prv.boot.nope.Domain.User.model.service.UserService;
import prv.boot.nope.Domain.User.model.vo.User;

@RestController
public class UserControllerNone {
    
    @Autowired
    private UserService userService;

    private CustomUtil customUtil   = new CustomUtil();

    @GetMapping("/login")
    public Map<String, Object> login(@RequestParam(value = "account") String loginAccount, @RequestParam(value = "pw") String loginPw) {

		User loginUser  = userService.selectLoginUser(loginAccount);
		Map<String, Object> result	= null;
		JWTToken jwt	= null;

        if(loginUser == null) {
            throw new CustomException(UserExceptionCode.NOT_EXIST_ACCOUNT);
        } else if(!loginUser.comparePassword(loginPw)) {
            throw new CustomException(UserExceptionCode.NOT_MATCH_PASSWORD);
        } else {
			jwt	= new JWTToken();
			jwt.createToken(loginUser.simpleUserInfo());
			
			result	= new HashMap<>();
			result.put(TokenOption.NICKNAME.getStringValue(), jwt.getToken());
        }

        return result;
    }

	
	@PostMapping("/token-reissuance")
	public Map<String, Object> tokenReissuance(HttpServletRequest req) {
		JWTToken jwt	= new JWTToken(req.getHeader("X-TOKEN"));
		Map<String, Object> result	= new HashMap<>();
		
		System.out.println();
		if(jwt.verifyToken()) {
			jwt.reissuance();
			result.put(TokenOption.NICKNAME.getStringValue(), jwt.getToken());
		} else {
			throw new CustomException(UserExceptionCode.EXPIRE_TOKEN);
		}

		return result;
	}


}

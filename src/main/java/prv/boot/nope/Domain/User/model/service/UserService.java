package prv.boot.nope.Domain.User.model.service;

import prv.boot.nope.Domain.User.model.vo.User;

public interface UserService {

    int selectUserTotalCount();
    User selectLoginUser(String loginAccount);
    
}

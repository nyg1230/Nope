package prv.boot.nope.Domain.User.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prv.boot.nope.Domain.User.model.mapper.UserMapper;
import prv.boot.nope.Domain.User.model.vo.User;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int selectUserTotalCount() {
        return userMapper.selectUserTotalCount();
    }

    @Override
    public User selectLoginUser(String loginAccount) {
        return userMapper.selectLoginUser(loginAccount);
    }
    
}

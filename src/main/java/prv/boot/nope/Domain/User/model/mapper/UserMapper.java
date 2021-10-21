package prv.boot.nope.Domain.User.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import prv.boot.nope.Domain.User.model.vo.User;

@Mapper
public interface UserMapper {

    int selectUserTotalCount();

    User selectLoginUser(String loginAccount);

}

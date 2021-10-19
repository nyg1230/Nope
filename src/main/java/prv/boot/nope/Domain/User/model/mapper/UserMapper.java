package prv.boot.nope.Domain.User.model.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    int selectUserTotalCount();

}

package prv.boot.nope.Domain.Board.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import prv.boot.nope.Domain.Board.model.vo.Board;

@Mapper
public interface BoardMapper {
	List<Board> selectBoardList(String type);
}

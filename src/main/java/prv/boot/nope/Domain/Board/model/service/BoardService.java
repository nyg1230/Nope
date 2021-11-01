package prv.boot.nope.Domain.Board.model.service;

import java.util.List;

import prv.boot.nope.Domain.Board.model.vo.Board;

public interface BoardService {
	
	List<Board> selectBoardList(String type);

}

package prv.boot.nope.Domain.Board.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import prv.boot.nope.Domain.Board.model.mapper.BoardMapper;
import prv.boot.nope.Domain.Board.model.vo.Board;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardMapper boardMapper;

	@Override
	public List<Board> selectBoardList(String type) {
		return boardMapper.selectBoardList(type);
	}
	
}

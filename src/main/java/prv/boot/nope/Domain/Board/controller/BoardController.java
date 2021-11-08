package prv.boot.nope.Domain.Board.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import prv.boot.nope.Domain.Board.model.service.BoardService;
import prv.boot.nope.Domain.Board.model.vo.Board;

@RestController
@RequestMapping("/public/api/boards/*")
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	@GetMapping("/list")
	public List<Board> boardList(
		@RequestParam(value="page", required = false, defaultValue = "1") int page,
		@RequestParam(value="type", required = false, defaultValue = "") String type
	) {
		List<Board> boardList	= new ArrayList<>();
		if(page < 1) page = 1;
		System.out.println(page);
		System.out.println(type);
		boardList = boardService.selectBoardList(page, type);

		return boardList;
	}

}

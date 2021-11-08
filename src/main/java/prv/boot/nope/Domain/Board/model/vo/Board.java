package prv.boot.nope.Domain.Board.model.vo;

import java.sql.Timestamp;

public class Board {
	
	private int id;
	private int seq;
	private String title;
	private String pw;
	private int writer;
	private Timestamp writeDate;
	private Timestamp modifyDate;
	private Timestamp dropDate;
	private String boardType;
	private String isDelete;

	Board() {}
	Board(int id, int seq, String title, int writer, Timestamp writeDate, Timestamp modifyDate) {
		this.id		= id;
		this.seq	= seq;
		this.title	= title;
		this.writer	= writer;
		this.writeDate	= writeDate;
		this.modifyDate	= modifyDate;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSeq() {
		return this.seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPw() {
		return this.pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public int getWriter() {
		return this.writer;
	}

	public void setWriter(int writer) {
		this.writer = writer;
	}

	public Timestamp getWriteDate() {
		return this.writeDate;
	}

	public void setWriteDate(Timestamp writeDate) {
		this.writeDate = writeDate;
	}

	public Timestamp getModifyDate() {
		return this.modifyDate;
	}

	public void setModifyDate(Timestamp modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Timestamp getDropDate() {
		return this.dropDate;
	}

	public void setDropDate(Timestamp dropDate) {
		this.dropDate = dropDate;
	}

	public String getBoardType() {
		return this.boardType;
	}

	public void setBoardType(String boardType) {
		this.boardType = boardType;
	}

	public String getIsDelete() {
		return this.isDelete;
	}

	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}

}

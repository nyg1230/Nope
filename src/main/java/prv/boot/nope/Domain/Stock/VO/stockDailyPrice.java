package prv.boot.nope.Domain.Stock.VO;

import java.sql.Date;

public class stockDailyPrice {
    
    private int seq;
	private Date date;
	private int closingPrice;
	private int comparePreviousDay;
	private int marcketPrice;
	private int highPrice;
	private int lowPrice;
	private int volume;

	public stockDailyPrice() {}

	public int getSeq() {
		return this.seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getClosingPrice() {
		return this.closingPrice;
	}

	public void setClosingPrice(int closingPrice) {
		this.closingPrice = closingPrice;
	}

	public int getComparePreviousDay() {
		return this.comparePreviousDay;
	}

	public void setComparePreviousDay(int comparePreviousDay) {
		this.comparePreviousDay = comparePreviousDay;
	}

	public int getMarcketPrice() {
		return this.marcketPrice;
	}

	public void setMarcketPrice(int marcketPrice) {
		this.marcketPrice = marcketPrice;
	}

	public int getHighPrice() {
		return this.highPrice;
	}

	public void setHighPrice(int highPrice) {
		this.highPrice = highPrice;
	}

	public int getLowPrice() {
		return this.lowPrice;
	}

	public void setLowPrice(int lowPrice) {
		this.lowPrice = lowPrice;
	}

	public int getVolume() {
		return this.volume;
	}

	public void setVolume(int volume) {
		this.volume = volume;
	}

}

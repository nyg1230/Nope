package prv.boot.nope.Domain.User.model.vo;

import java.sql.Timestamp;

public class User {
    
    private int seq;
    private String id;
    private String pw;
    private String email;
    private Timestamp enrollDate;
    private Timestamp dropDate;

    public int getSeq() {
        return this.seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return this.pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getEnrollDate() {
        return this.enrollDate;
    }

    public void setEnrollDate(Timestamp enrollDate) {
        this.enrollDate = enrollDate;
    }

    public Timestamp getDropDate() {
        return this.dropDate;
    }

    public void setDropDate(Timestamp dropDate) {
        this.dropDate = dropDate;
    }

}

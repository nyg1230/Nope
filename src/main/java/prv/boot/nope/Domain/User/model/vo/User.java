package prv.boot.nope.Domain.User.model.vo;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import prv.boot.nope.Common.Util.CustomUtil;

public class User {
    
    private int seq;
    private String account;
    private String pw;
    private String salt;
    private String email;
    private Timestamp enrollDate;
    private Timestamp dropDate;
    private String lastLoginIp;

    public int getSeq() {
        return this.seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getAccount() {
        return this.account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPw() {
        return this.pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getSalt() {
        return this.salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
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

    public String getLastLoginIp() {
        return this.lastLoginIp;
    }

    public void setLastLoginIp(String lastLoginIp) {
        this.lastLoginIp = lastLoginIp;
    }

    @Override
    public String toString() {
        return "["
                + "seq : " + this.seq
                + ", account : " + this.account
                + ", pw : " + this.pw
                + ", salt : " + this.salt
                + ", email : " + this.email
                + ", enrollDate : " + this.enrollDate
                + ", dropDate : " + this.dropDate
                + ", lastLoginIIp : " + this.lastLoginIp
                + "]";
    }

    public boolean comparePassword(String raw) {
        boolean result  = false;

        if(this.pw != null && this.pw.equals(new CustomUtil().text2encrypt(raw, this.salt))) result = true;

        return result;
    }

    public Map<String, Object> simpleUserInfo() {
        Map<String, Object> simple  = new HashMap<>();

		simple.put("account", this.account);
		simple.put("email", this.email);
		simple.put("enrollDate", this.enrollDate);
		simple.put("lastLoginIp", this.lastLoginIp);

        return simple;
    }

}

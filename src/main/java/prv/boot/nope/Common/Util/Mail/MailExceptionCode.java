package prv.boot.nope.Common.Util.Mail;

import prv.boot.nope.Common.Exception.CustomExceptionCode;

public enum MailExceptionCode implements CustomExceptionCode {
    NOT_EXIST_SMTP("MAIL00001", "smtp 프로퍼티가 존재하지 않습니다."),
    NOT_EXIST_ACCOUNT("MAIL00002", "메일을 송신할 계정이 존재하지 않습니다."),
    NOT_EXIST_TEMPLATE("MAIL00003", "메일 형식이 존재하지 않습니다."),
    ;

    final private String errorCode;
    final private String message;

    MailExceptionCode(String errorCode, String messge) {
        this.errorCode  = errorCode;
        this.message    = messge;
    }

    @Override
    public String getCode() {
        return this.errorCode;
    }

    @Override
    public String getMessge() {
        return this.message;
    }
    
}

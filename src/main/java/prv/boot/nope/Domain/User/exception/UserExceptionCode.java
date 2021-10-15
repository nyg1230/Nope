package prv.boot.nope.Domain.User.exception;

import prv.boot.nope.Common.Exception.CustomExceptionCode;

public enum UserExceptionCode implements CustomExceptionCode {
    TEST("U0001", "테스트"),
    ;

    private final String code;
    private final String message;

    UserExceptionCode(String code, String message) {
        this.code       = code;
        this.message    = message;
    }

    @Override
    public String getCode() {
        return this.code;
    }

    @Override
    public String getMessge() {
        return this.message;
    }
    
}

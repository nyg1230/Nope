package prv.boot.nope.Domain.User.exception;

import prv.boot.nope.Common.Exception.CustomExceptionCode;

public enum UserExceptionCode implements CustomExceptionCode {
    TEST("U0001", "테스트"),

	NOT_EXIST_ACCOUNT("EU00001", "해당 사용자가 존재하지 않습니다."),
	NOT_MATCH_PASSWORD("EU00002", "비밀번호가 일치하지 않습니다."),
	EXPIRE_TOKEN("EU90001", "만료된 사용자 토큰입니다."),
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

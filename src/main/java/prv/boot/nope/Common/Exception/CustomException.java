package prv.boot.nope.Common.Exception;

import java.util.HashMap;
import java.util.Map;

public class CustomException extends RuntimeException {
    
    private String errorCode;
    private String message;

    public CustomException(String errorCode, String message) {
        this.errorCode  = errorCode;
        this.message    = message;
    }

	public CustomException(CustomExceptionCode exceptionCode) {
		this.errorCode	= exceptionCode.getCode();
		this.message	= exceptionCode.getMessge();
	}

	public Map<String, String> getErrorMap() {
		Map<String, String> errorMap	= new HashMap<>();

		errorMap.put("errorCode", this.errorCode);
		errorMap.put("message", this.message);

		return errorMap;
	}

}

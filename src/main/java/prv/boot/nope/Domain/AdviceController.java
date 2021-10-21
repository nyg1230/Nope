package prv.boot.nope.Domain;

import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import prv.boot.nope.Common.Exception.CustomException;

@ControllerAdvice
public class AdviceController {
	
	@ExceptionHandler({CustomException.class})
	@ResponseBody
	public Map<String, Object> customExceptionHandler(CustomException e) {
		Map<String, Object> res	= e.getCodeMap();

		return res;
	}

}

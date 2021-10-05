package prv.boot.nope.Domain;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController implements ErrorController {
	
	private final String DEFAULT_PATH	= "index";

	@GetMapping("/")
	public String indexPath() {
		return DEFAULT_PATH;
	}

	@GetMapping("/error")
	public String errorPath() {
		return DEFAULT_PATH;
	}

}

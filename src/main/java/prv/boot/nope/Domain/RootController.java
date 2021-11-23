package prv.boot.nope.Domain;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RootController implements ErrorController {
	
	private final String DEFAULT_PATH	= "index";

	// js language pack start
	@Value("${nope.lang-pack-path:/js/language/}")
	private String langPackPath;

	@Value("#{${nope.lang-pack}}")
	private Map<String, String> langPack;

	@Value("#{${nope.lang-pack}['kor'] ?: 'langKor.js'}")
	private String defaulLangPack;

	// js language pack end

	@GetMapping("/")
	public String indexPath() {
		return DEFAULT_PATH;
	}

	@GetMapping("/error")
	public String errorPath() {
		return DEFAULT_PATH;
	}

	@GetMapping("/lang-pack")
	@ResponseBody
	public Map<String, Object> test(@RequestParam(value = "lang", defaultValue = "kr") String lang) {

		String jsLangPack	= langPackPath + ((langPack.get(lang) != null) ? langPack.get(lang) : defaulLangPack);
		Map<String, Object> result	= new HashMap<>();
		result.put("url", jsLangPack);

		return result;
	}

}

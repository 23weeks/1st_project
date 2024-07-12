package SJYJ.demo.common;

import java.util.HashMap;
import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class commonController {

	@GetMapping(value = "/test/api.do")
	public Map<String, Object> testApi(Model model) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("name1", "sangju");
		map.put("name2", "yejung");
		
		return map;
	}
	
	@PostMapping("path")
	public String postMethodName(@RequestBody String entity) {
		//TODO: process POST request
		
		return entity;
	}
	
	
}

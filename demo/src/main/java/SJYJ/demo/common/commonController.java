package SJYJ.demo.common;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class commonController {

	@GetMapping(value = "/test/api.do")
	public String testApi(Model model) {
		return "testAPI";
	}
	
	@PostMapping("path")
	public String postMethodName(@RequestBody String entity) {
		//TODO: process POST request
		
		return entity;
	}
	
	
}

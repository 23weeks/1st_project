package SJYJ.demo.common.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class commonController {

	@GetMapping(value = "/test/api.do")
	public String testApi(Model model) {
		return "testAPI";
	}
	
}

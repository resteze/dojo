package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class HellohumanApplication {
	
	@RequestMapping("/")
	public String human() {
		return "Hello Human";
	}
	
	@RequestMapping("/name")
	public String name(@RequestParam(value="q") String searchQuery) {
		return "Hello " + searchQuery;
	}
	public static void main(String[] args) {
		SpringApplication.run(HellohumanApplication.class, args);
	}

}

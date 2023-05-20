package com.example.demo;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class ItemController {
	    
	@RequestMapping("/")
	public String index(Model model) {
	    ArrayList<Items> fruits = new ArrayList<Items>();
	    fruits.add(new Items("Kiwi", 1.5));
	    fruits.add(new Items("Mango", 2.0));
	    fruits.add(new Items("Goji Berries", 4.0));
	    fruits.add(new Items("Guava", .75));
	    model.addAttribute("fruitsFromController", fruits); 
	    // Add fruits your view model here
	    return "index.jsp";
		}
	public static void main(String[] args) {
		SpringApplication.run(ItemController.class, args);
	}

}

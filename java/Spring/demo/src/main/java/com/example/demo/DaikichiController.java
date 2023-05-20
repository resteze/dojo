package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DaikichiController {

	@RequestMapping("/daikichi")
	public String Welcome() {
		return "Welcome!";
	}
	@RequestMapping("/daikichi/today")
	public String Today() {
		return "Today you will find luck in all your endeavors!";
	}
	@RequestMapping("/daikichi/tommorow")
	public String Tommorow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	@RequestMapping("/daikichi/travel/{city}")
	public String Travel(@PathVariable("city") String city) {
		return "Congratulations! You will soon travel to " + city;
	}
	@RequestMapping("/daikichi/lotto/{num}")
	public String Lotto(@PathVariable("num") Integer num) {
		if(num % 2 == 0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
		}
	}
	
	public static void main(String[] args) {
		SpringApplication.run(DaikichiController.class, args);
	}

}

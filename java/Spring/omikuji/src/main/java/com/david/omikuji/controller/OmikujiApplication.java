package com.david.omikuji.controller;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@Controller
public class OmikujiApplication {
	@RequestMapping("/")
	public String form() {
		return "form.jsp";
	}
	
	@RequestMapping(value = "/form", method= RequestMethod.POST)
	public String submission(
		HttpSession session,
		@RequestParam("number") Integer number,
		@RequestParam("city") String city,
		@RequestParam("person") String person,
		@RequestParam("hobby") String hobby,
		@RequestParam("living") String living,
		@RequestParam("nice") String nice) {
		session.setAttribute("storedNumber", number);
		session.setAttribute("storedCity", city);
		session.setAttribute("storedPerson", person);
		session.setAttribute("storedHobby", hobby);
		session.setAttribute("storedLiving", living);
		session.setAttribute("storedNice", nice);
		return "redirect:/show";
	}
	
	@RequestMapping(value = "/show")
	public String showOmikuji(HttpSession session) {
		return "show.jsp";
	}
	public static void main(String[] args) {
		SpringApplication.run(OmikujiApplication.class, args);
	}

}

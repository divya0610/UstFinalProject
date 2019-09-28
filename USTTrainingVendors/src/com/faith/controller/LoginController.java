package com.faith.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.faith.dao.ILoginDao;

@RestController
public class LoginController {

	@Autowired
	ILoginDao dao1;

	// verify login
	@RequestMapping(value = "/api/login/{username}/{password}", method = RequestMethod.GET)
	public boolean verify(@PathVariable("username") String username,
			@PathVariable("password") String password) {
		Boolean bol = dao1.verifyUser(username, password);
		return bol;
	}

}

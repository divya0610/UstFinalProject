package com.faith.model;

public class Login {

	
	private int loginId;
	private String staffName;
	private String username;
	private String password;

	//no parameter constructor
	
	public Login() {
		super();
	}
	
	//getters and setters	

	public int getLoginId() {
		return loginId;
	}

	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}

	public String getStaffName() {
		return staffName;
	}

	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}

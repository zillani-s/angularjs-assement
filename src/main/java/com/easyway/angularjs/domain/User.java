package com.easyway.angularjs.domain;

public class User {
	private Integer userId;
	private String userName;
	private String jobTitleName;
	private String firstName;
	private String lastName;
	private String preferredFullName;
	private String employeeCode;
	private String region;
	private String phoneNumber;
	private String email;
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", jobTitleName=" + jobTitleName + 
				", firstName=" + firstName + ", lastName=" + lastName + ", preferredFullName=" + preferredFullName + 
				", employeeCode=" + employeeCode + ", region=" + region + ", phoneNumber=" + phoneNumber  + 
				", email=" + email + "]";
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getJobTitleName() {
		return jobTitleName;
	}

	public void setJobTitleName(String jobTitleName) {
		this.jobTitleName = jobTitleName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPreferredFullName() {
		return preferredFullName;
	}

	public void setPreferredFullName(String preferredFullName) {
		this.preferredFullName = preferredFullName;
	}

	public String getEmployeeCode() {
		return employeeCode;
	}

	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}

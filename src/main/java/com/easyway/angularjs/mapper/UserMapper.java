package com.easyway.angularjs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.easyway.angularjs.domain.User;


public interface UserMapper {
	
	@Insert("INSERT INTO USER(USER_NAME, JOB_TITLE_NAME, FIRST_NAME, LAST_NAME, PREFERRED_NAME, EMPLOYEE_CODE, REGION, PHONE_NUMBER, EMAIL) "
			+ "VALUES(#{userName}, #{jobTitleName}, #{firstName}, #{lastName}, #{preferredFullName}, #{employeeCode}, #{region}, #{phoneNumber}, #{email})")
	@Options(useGeneratedKeys = true, keyProperty = "userId")
	public void insertUser(User user);
	
	@Select("SELECT * FROM USER")
	@Results({ @Result(id = true, property = "userId", column = "USER_ID"),
			@Result(property = "userName", column = "USER_NAME"),
			@Result(property = "jobTitleName", column = "JOB_TITLE_NAME"),
			@Result(property = "firstName", column = "FIRST_NAME"),
			@Result(property = "lastName", column = "LAST_NAME"),
			@Result(property = "preferredFullName", column = "PREFERRED_NAME"),
			@Result(property = "employeeCode", column = "EMPLOYEE_CODE"),
			@Result(property = "region", column = "REGION"),
			@Result(property = "phoneNumber", column = "PHONE_NUMBER"),
			@Result(property = "email", column = "EMAIL")})
	public List<User> getAllUsers();

}

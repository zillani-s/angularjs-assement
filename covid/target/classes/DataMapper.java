package com.easyway.covid.mapper;
import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
@Mapper
public class DataMapper 
{
	 @Insert("INSERT INTO my.covid (country, total_cases, new_cases, total_death, new_death, total_recovered, active_cases, critical, cases_percent, death_percent, repoted_fisrt)"
	+ "VALUES (#{country}, #{totalCases}, #{newCases},  #{totalDeath},  #{newDeath},  #{totalRecovered},  #{activeCases},  #{critical}, #{casesPercent}, #{deathPercent}, #{repotedOn})")
	 @Options(useGeneratedKeys = true, keyColumn = "id", keyProperty = "id")
	 void insertData(Data data);
	 
	 @Select("SELECT * FROM user")
	 @Results({ @Result(id = true, property = "userId", column = "USER_ID"),
			@Result(property = "country", column = "country"),
			@Result(property = "totalCases", column = "total_cases"),
			@Result(property = "newCases", column = "total_death"),
			@Result(property = "totalDeath", column = "new_death"),
			@Result(property = "newDeath", column = "total_recovered"),
			@Result(property = "totalRecovered", column = "active_cases"),
			@Result(property = "critical", column = "critical"),
			@Result(property = "casesPercent", column = "cases_percent"),
			@Result(property = "deathPercent", column = "death_percent")}),
	        @Result(property = "repotedOn", column = "repoted_fisrt")})
}

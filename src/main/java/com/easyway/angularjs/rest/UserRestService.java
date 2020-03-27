package com.easyway.angularjs.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.AnnotationIntrospector;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.xc.JaxbAnnotationIntrospector;

import com.easyway.angularjs.domain.User;
import com.easyway.angularjs.services.UserService;

@Path("/angularjs")
public class UserRestService {
	ObjectMapper mapper = new ObjectMapper();
	
	@GET
	@Path("/getUsers")
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public Response getBlogs() throws JsonGenerationException, JsonMappingException, IOException {
		LinkedHashMap<String, Object> response = new LinkedHashMap<String, Object>();
		UserService userService  = new UserService();
		List<User> users = userService.getAllUsers();
		
		System.out.println("users.get(0) "+users.get(0));
		response.put("total", users.size());
        response.put("menuItems", users);
		return Response.status(Response.Status.OK).entity(mapper.writeValueAsString(response)).build();
	}
	
	@POST
	@Path("/addUsers")
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public Response addBlogs(String userRequest) {
		UserService userService = new UserService();
		LinkedHashMap<String, Object> response = new LinkedHashMap<String, Object>();
		ResponseBuilder builder = null;
		try {
            System.out.println("##### userRequest ###" + userRequest);
            User user = (User) readObject(userRequest, User.class);
            System.out.println("##### user ###" + user);
            userService.insertUser(user);
            response.put("code", 200);
            response.put("description","Successfully inserted");
            String result = mapper.writeValueAsString(response);
    		System.out.println("+++abc+++ "+result);
            builder = Response.status(200).entity(result);
            
		} catch (Exception e) {
			System.out.println("##### Exception ###" + e);
        }		
		
		return builder.build();
	}


	public static Object readObject(String response, Class<?> obj)
			throws JsonParseException, JsonMappingException, IOException {

		ObjectMapper mapper = new ObjectMapper();
		AnnotationIntrospector introspector = new JaxbAnnotationIntrospector();
		mapper.setAnnotationIntrospector(introspector);
		return mapper.readValue(response, obj);
	}



}

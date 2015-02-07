package com.courseadvisor.api;

import javax.inject.Named;

import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

import static com.googlecode.objectify.ObjectifyService.ofy;

@Api(name="user")
public class UserApi {

	@ApiMethod(path="createUser", httpMethod=HttpMethod.POST)
	public void createUser(User user){
		ofy().save().entities(user).now();
	}
	
	@ApiMethod(path="getUser", httpMethod=HttpMethod.GET)
	public User getUser(@Named("email") String email){
		return ofy().load().type(User.class).id(email).now();
	}
}

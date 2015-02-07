package com.courseadvisor.api;

import java.util.ArrayList;

import javax.inject.Named;

import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.Review;
import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name="courses")
public class CourseApi {

	@ApiMethod(path="courseData/{code}", httpMethod=HttpMethod.GET)
	public Course getCourseData(@Named("code") String code){
		return null;
	}
	
	public ArrayList<Review> getReviews(@Named("code") String code){
		return null;
	}
	
	@ApiMethod(path="getQuestions/{code}", httpMethod=HttpMethod.GET)
	public ArrayList<Review> getQuestions(@Named("code") String code){
		return null;
	}
	
	@ApiMethod(path="getTakenFriends/{code}", httpMethod=HttpMethod.GET)
	public ArrayList<User> getTakenFriends(@Named("code") String code, @Named("email") String email){
		return null;
	}
	
	@ApiMethod(path="getinterestedFriends/{code}", httpMethod=HttpMethod.GET)
	public ArrayList<User> getInterestedFriends(@Named("code") String code, @Named("email") String email){
		return null;
	}
	
}

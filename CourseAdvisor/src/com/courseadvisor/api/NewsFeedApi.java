package com.courseadvisor.api;

import java.util.ArrayList;

import com.courseadvisor.entity.Activity;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name="newsfeed")
public class NewsFeedApi {

	@ApiMethod(path="getActivity", httpMethod=HttpMethod.GET)
	public ArrayList<Activity> getActivity(){
		return null;
	}
	
}

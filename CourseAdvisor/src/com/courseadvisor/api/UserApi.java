package com.courseadvisor.api;

import javax.inject.Named;

import com.courseadvisor.entity.StringBean;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name="user")
public class UserApi {

	@ApiMethod(path="getData", httpMethod=HttpMethod.GET)
	public StringBean getData(@Named("id") String id){
		return new StringBean(id);
	}
}

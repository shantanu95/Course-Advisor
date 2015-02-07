package com.courseadvisor.api;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.List;

import com.courseadvisor.bean.NewsCardBean;
import com.courseadvisor.entity.Activity;
import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name="newsfeed")
public class NewsFeedApi {

	@ApiMethod(path="getActivity", httpMethod=HttpMethod.GET)
	public List<NewsCardBean> getActivity(){
		List<Activity> l = ofy().load().type(Activity.class).list();
		List<NewsCardBean> l2 = new ArrayList<>();
		for(Activity a:l){
			l2.add(activityToCard(a));
		}
		return l2;
	}
	
	public void createActivity(Activity act){
		ofy().save().entities(act).now();
	}
	
	public static NewsCardBean activityToCard(Activity act){
		NewsCardBean n = new NewsCardBean();
		Course c = ofy().load().type(Course.class).id(act.getCode()).now();
		User u = ofy().load().type(User.class).id(act.getEmail()).now();
		n.setId(act.getId());
		n.setCourseDetail(c.getCode() + " - " + c.getTitle());
		n.setData(act.getActivityData());
		n.setNumDownVotes(act.getNumDownVotes());
		n.setNumUpVotes(act.getNumUpVotes());
		n.setTimestamp(act.getTimestamp());
		n.setUserName(u.getName());
		n.setWhatKind(act.getWhatKind());
		return n;
	}
	
}

package com.courseadvisor.api;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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
		
		Collections.sort(l2);
		return l2;
	}
	
	@ApiMethod(path="popularCourses", httpMethod=HttpMethod.GET)
	public List<Course> getPopularCourses(){
		List<Course> res = ofy().load().type(Course.class).list();
		Collections.sort(res, new Comparator<Course>() {

			@Override
			public int compare(Course o1, Course o2) {
				// TODO Auto-generated method stub
				return o2.getNumSubscibers() - o1.getNumSubscibers();
			}
		});
		return res;
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

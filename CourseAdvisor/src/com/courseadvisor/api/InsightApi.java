package com.courseadvisor.api;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.courseadvisor.bean.InsightBean;
import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

import static com.googlecode.objectify.ObjectifyService.ofy;

@Api(name="insight")
public class InsightApi {

	@ApiMethod(path="subscriber", httpMethod=HttpMethod.GET)
	public List<InsightBean> getBySubscriber(){
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx, usr));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return o2.getNumTaken() - o1.getNumTaken();
			}
		});
		return i;
	}
	
	@ApiMethod(path="intPpl", httpMethod=HttpMethod.GET)
	public List<InsightBean> getByIntPpl(){
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx, usr));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return o2.getNumInterested() - o1.getNumInterested();
			}
		});
		return i;
	}
	
	@ApiMethod(path="diff", httpMethod=HttpMethod.GET)
	public List<InsightBean> getDiff(){
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx, usr));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return o2.getDiffRating() - o1.getDiffRating();
			}
		});
		return i;
	}
	
	@ApiMethod(path="like", httpMethod=HttpMethod.GET)
	public List<InsightBean> getLike(){
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx, usr));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return o2.getInterestRating() - o1.getInterestRating();
			}
		});
		return i;
	}
	
	
	private InsightBean cToI(Course c, List<User> usr){
		InsightBean b = new InsightBean();
		b.setCode(c.getCode());
		b.setDiffRating(c.getDifficultyRating());
		b.setInterestRating(c.getInterestRating());
		int c1 = 0, c2=0;
		for (User u : usr){
			if(u.getCoursesTaken().contains(c.getCode()))
				c1++;
			if(u.getCoursesInterestedIn().contains(c.getCode()))
				c2++;
		}
		b.setNumTaken(c1);
		b.setNumInterested(c2);;
		b.setTitle(c.getTitle());
		return b;
	}
	
}

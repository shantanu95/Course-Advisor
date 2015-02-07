package com.courseadvisor.api;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.courseadvisor.bean.InsightBean;
import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

import static com.googlecode.objectify.ObjectifyService.ofy;

@Api(name="insight")
public class InsightApi {
	
	private Map<String, Integer> mp = new HashMap<String, Integer>();

	@ApiMethod(path="subscriber", httpMethod=HttpMethod.GET)
	public List<InsightBean> getBySubscriber(){
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return (int) (o2.getNumTaken() - o1.getNumTaken());
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
			i.add(cToI(cx));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return (int) (o2.getNumInterested() - o1.getNumInterested());
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
			i.add(cToI(cx));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return (int) (o2.getDiffRating() - o1.getDiffRating());
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
			i.add(cToI(cx));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return (int) (o2.getInterestRating() - o1.getInterestRating());
			}
		});
		return i;
	}
	
	@ApiMethod(path="friends", httpMethod=HttpMethod.GET)
	public List<InsightBean> getByFriends(){
		mp.put("CZ2001", 2);
		mp.put("AB1213", 2);
		mp.put("CZ1002", 2);
		mp.put("CZ1003", 2);
		mp.put("BU8201", 4);
		mp.put("MH1812", 1);
		mp.put("HE9091", 4);
		
		List<Course> c = ofy().load().type(Course.class).list();
		List<User> usr = ofy().load().type(User.class).list();
		List<InsightBean> i = new ArrayList<>();
		for(Course cx : c){
			i.add(cToI(cx));
		}
		Collections.sort(i, new Comparator<InsightBean>() {

			@Override
			public int compare(InsightBean o1, InsightBean o2) {
				// TODO Auto-generated method stub
				return (int) (mp.get(o2.getCode()) - mp.get(o1.getCode()));
			}
		});
		return i;
	}
	
	
	private InsightBean cToI(Course c){
		InsightBean b = new InsightBean();
		b.setCode(c.getCode());
		b.setDiffRating(c.getDifficultyRating());
		b.setInterestRating(c.getInterestRating());
		int c1 = 0, c2=0;
		b.setNumTaken(c.getNumSubscibers());
		b.setNumInterested(c2);
		b.setTitle(c.getTitle());
		return b;
	}
	
}

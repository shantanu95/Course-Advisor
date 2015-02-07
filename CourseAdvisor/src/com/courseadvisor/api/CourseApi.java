package com.courseadvisor.api;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.inject.Named;

import com.courseadvisor.bean.NewsCardBean;
import com.courseadvisor.entity.Activity;
import com.courseadvisor.entity.Answer;
import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name="courses")
public class CourseApi {
	
	public void createCourse(Course c){
		ofy().save().entity(c).now();
	}

	@ApiMethod(path="courseData/{code}", httpMethod=HttpMethod.GET)
	public Course getCourseData(@Named("code") String code){
		return ofy().load().type(Course.class).id(code).now();
	}
	
	@ApiMethod(path="getReviews/{code}", httpMethod=HttpMethod.GET)
	public ArrayList<NewsCardBean> getReviews(@Named("code") String code){
		List<Activity> actList = ofy().load().type(Activity.class).list();
		ArrayList<NewsCardBean> res = new ArrayList<>();
		for(Activity act : actList){
			if(act.getWhatKind() == 1 && act.getCode().equals(code)){
				res.add(NewsFeedApi.activityToCard(act));
			}
		}
		return res;
	}
	
	@ApiMethod(path="addActivity", httpMethod=HttpMethod.POST)
	public void addActivity(Activity act){
		ofy().save().entity(act).now();
	}
	
	@ApiMethod(path="getQuestions/{code}", httpMethod=HttpMethod.GET)
	public ArrayList<NewsCardBean> getQuestions(@Named("code") String code){
		List<Activity> actList = ofy().load().type(Activity.class).list();
		ArrayList<NewsCardBean> res = new ArrayList<>();
		for(Activity act : actList){
			if(act.getWhatKind() == 2 && act.getCode().equals(code)){
				res.add(NewsFeedApi.activityToCard(act));
			}
		}
		return res;
	}
	
	@ApiMethod(path="getTakenFriends/{code}", httpMethod=HttpMethod.POST)
	public ArrayList<User> getTakenFriends(@Named("code") String code, @Named("email") String email, 
			@Named("friends") List<String> friends){
		ArrayList<User> users = new ArrayList<>();
		Map<String, User> map = ofy().load().type(User.class).ids(friends);
		for(String s:map.keySet()){
			User usr = map.get(s);
			if(usr.getCoursesTaken().contains(code)){
				users.add(usr);
			}
		}
		
		return users;
	}
	
	@ApiMethod(path="getinterestedFriends/{code}", httpMethod=HttpMethod.POST)
	public ArrayList<User> getInterestedFriends(@Named("code") String code, @Named("email") String email,
			@Named("friends") List<String> friends){
		ArrayList<User> users = new ArrayList<>();
		Map<String, User> map = ofy().load().type(User.class).ids(friends);
		for(String s:map.keySet()){
			User usr = map.get(s);
			if(usr.getCoursesInterestedIn().contains(code)){
				users.add(usr);
			}
		}
		
		return users;
	}
	
	@ApiMethod(path="vote", httpMethod=HttpMethod.POST)
	public void vote(@Named("id") Long id, @Named("up") boolean up){
		Activity act = ofy().load().type(Activity.class).id(id).now();
		if(up)
			act.setNumUpVotes(act.getNumUpVotes() + 1);
		else
			act.setNumDownVotes(act.getNumDownVotes() + 1);
		ofy().save().entity(act).now();
	}
	
	@ApiMethod(path="createAnswer/{id}", httpMethod=HttpMethod.POST)
	public void createAnswer(@Named("id") Long id, Answer ans){
		ans.setId(null);
		ofy().save().entity(ans).now();
		Activity act = ofy().load().type(Activity.class).id(id).now();
		act.getAnswerList().add(ans.getId());
		ofy().save().entity(act).now();
	}
	
	@ApiMethod(path="getAnswers", httpMethod=HttpMethod.GET)
	public List<Answer> getAnswers(@Named("id") Long id){
		Activity act = ofy().load().type(Activity.class).id(id).now();
		Map<Long, Answer> map = ofy().load().type(Answer.class).ids(act.getAnswerList());
		ArrayList<Answer> res = new ArrayList<>();
		for(Long a1 : map.keySet()){
			res.add(map.get(a1));
		}
		return res;
	}
}

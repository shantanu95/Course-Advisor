package com.courseadvisor;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.courseadvisor.entity.Activity;
import com.courseadvisor.entity.Answer;
import com.courseadvisor.entity.Course;
import com.courseadvisor.entity.Question;
import com.courseadvisor.entity.Review;
import com.courseadvisor.entity.User;
import com.googlecode.objectify.ObjectifyService;

public class ServletLifecycleListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		ObjectifyService.register(User.class);
		ObjectifyService.register(Activity.class);
		ObjectifyService.register(Answer.class);
		ObjectifyService.register(Course.class);
		ObjectifyService.register(Question.class);
		ObjectifyService.register(Review.class);
		
	}

}

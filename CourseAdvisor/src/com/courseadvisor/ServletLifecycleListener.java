package com.courseadvisor;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

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
	}

}

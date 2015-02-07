package com.courseadvisor.entity;

import java.util.ArrayList;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class User {

	@Id private String email;
	private String name;
	private String university;
	private String major;
	private String country;
	private ArrayList<String> coursesTaken = new ArrayList<>(),
			coursesInterestedIn = new ArrayList<>();
	
}

package com.courseadvisor.entity;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Course {
	
	@Id private String code;
	private String title;
	private String description;
	private int au;

}

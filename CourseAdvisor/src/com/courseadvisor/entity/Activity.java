package com.courseadvisor.entity;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Activity {
	
	@Id private Long id;
	private String code;
	private String email;
	private int whatKind; // 1 = review; 2 = question; 3 = answer
	private Date timestamp;
}
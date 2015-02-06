package com.courseadvisor.entity;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Answer {

	@Id private Long id;
	private String email;
	private String data;
	private Date timestamp;
}

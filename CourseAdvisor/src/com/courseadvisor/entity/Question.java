package com.courseadvisor.entity;

import java.util.ArrayList;
import java.util.Date;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Question {
	
	@Id private Long id;
	private String code;
	private String email;
	private String data;
	private Date timestamp;
	private int numUpVotes, numDownVotes;
	private ArrayList<Key<Answer>> answerList = new ArrayList<>();

}

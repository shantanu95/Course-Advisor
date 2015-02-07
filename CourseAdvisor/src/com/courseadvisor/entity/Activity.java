package com.courseadvisor.entity;

import java.util.ArrayList;
import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Activity {
	
	@Id private Long id;
	private String code;
	private String email;
	private int whatKind; // 1 = review; 2 = question; 3 = answer
	private String activityData;
	private ArrayList<Long> answerList = new ArrayList<>();
	private int numUpVotes, numDownVotes;
	private Date timestamp;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getWhatKind() {
		return whatKind;
	}

	public void setWhatKind(int whatKind) {
		this.whatKind = whatKind;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getActivityData() {
		return activityData;
	}

	public void setActivityData(String activityData) {
		this.activityData = activityData;
	}

	public ArrayList<Long> getAnswerList() {
		return answerList;
	}

	public void setAnswerList(ArrayList<Long> answerList) {
		this.answerList = answerList;
	}

	public int getNumDownVotes() {
		return numDownVotes;
	}

	public void setNumDownVotes(int numDownVotes) {
		this.numDownVotes = numDownVotes;
	}

	public int getNumUpVotes() {
		return numUpVotes;
	}

	public void setNumUpVotes(int numUpVotes) {
		this.numUpVotes = numUpVotes;
	}
}
package com.courseadvisor.bean;

import java.util.Date;

public class NewsCardBean implements Comparable<NewsCardBean>{

	private Long id;
	private String courseDetail;
	private String userName;
	private Date timestamp;
	private String data;
	private int numUpVotes, numDownVotes;
	private int whatKind; // 1 = review; 2 = question; 3 = answer
	
	public String getCourseDetail() {
		return courseDetail;
	}
	
	public void setCourseDetail(String courseDetail) {
		this.courseDetail = courseDetail;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public int getNumUpVotes() {
		return numUpVotes;
	}

	public void setNumUpVotes(int numUpVotes) {
		this.numUpVotes = numUpVotes;
	}

	public int getNumDownVotes() {
		return numDownVotes;
	}

	public void setNumDownVotes(int numDownVotes) {
		this.numDownVotes = numDownVotes;
	}

	public int getWhatKind() {
		return whatKind;
	}

	public void setWhatKind(int whatKind) {
		this.whatKind = whatKind;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public int compareTo(NewsCardBean o) {
		// TODO Auto-generated method stub
		return o.getTimestamp().compareTo(this.timestamp);
	}
}

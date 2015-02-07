package com.courseadvisor.entity;

import java.util.ArrayList;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class User {

	@Id private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public ArrayList<String> getCoursesTaken() {
		return coursesTaken;
	}
	public void setCoursesTaken(ArrayList<String> coursesTaken) {
		this.coursesTaken = coursesTaken;
	}
	public ArrayList<String> getCoursesInterestedIn() {
		return coursesInterestedIn;
	}
	public void setCoursesInterestedIn(ArrayList<String> coursesInterestedIn) {
		this.coursesInterestedIn = coursesInterestedIn;
	}
	private String name;
	private String university;
	private String major;
	private String country;
	private ArrayList<String> coursesTaken = new ArrayList<>(),
			coursesInterestedIn = new ArrayList<>();
	
}

package com.courseadvisor.entity;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Course {
	
	@Id private String code;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getAu() {
		return au;
	}
	public void setAu(int au) {
		this.au = au;
	}
	public int getDifficultyRating() {
		return difficultyRating;
	}
	public void setDifficultyRating(int difficultyRating) {
		this.difficultyRating = difficultyRating;
	}
	public int getNumDifficultyRaters() {
		return numDifficultyRaters;
	}
	public void setNumDifficultyRaters(int numDifficultyRaters) {
		this.numDifficultyRaters = numDifficultyRaters;
	}
	public int getInterestRating() {
		return interestRating;
	}
	public void setInterestRating(int interestRating) {
		this.interestRating = interestRating;
	}
	public int getNumInterestRaters() {
		return numInterestRaters;
	}
	public void setNumInterestRaters(int numInterestRaters) {
		this.numInterestRaters = numInterestRaters;
	}
	public int getNumSubscibers() {
		return numSubscibers;
	}
	public void setNumSubscibers(int numSubscibers) {
		this.numSubscibers = numSubscibers;
	}
	private String title;
	private String description;
	private int au;
	private double difficultyRating, numDifficultyRaters;
	private double interestRating, numInterestRaters;
	private int numSubscibers;
	
}

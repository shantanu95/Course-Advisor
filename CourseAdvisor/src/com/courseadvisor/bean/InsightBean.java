package com.courseadvisor.bean;

public class InsightBean {
	
	private String code;
	private String title;
	private int numTaken, numInterested;
	private int diffRating, interestRating;
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
	public int getNumTaken() {
		return numTaken;
	}
	public void setNumTaken(int numTaken) {
		this.numTaken = numTaken;
	}
	public int getNumInterested() {
		return numInterested;
	}
	public void setNumInterested(int numInterested) {
		this.numInterested = numInterested;
	}
	
	public int getDiffRating() {
		return diffRating;
	}
	public void setDiffRating(int diffRating) {
		this.diffRating = diffRating;
	}
	public int getInterestRating() {
		return interestRating;
	}
	public void setInterestRating(int interestRating) {
		this.interestRating = interestRating;
	}

	
}

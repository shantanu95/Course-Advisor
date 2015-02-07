package com.courseadvisor.bean;

public class InsightBean {
	
	private String code;
	private String title;
	private double numTaken, numInterested;
	private double diffRating, interestRating;
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
	public double getNumTaken() {
		return numTaken;
	}
	public void setNumTaken(double numTaken) {
		this.numTaken = numTaken;
	}
	public double getNumInterested() {
		return numInterested;
	}
	public void setNumInterested(double numInterested) {
		this.numInterested = numInterested;
	}
	
	public double getDiffRating() {
		return diffRating;
	}
	public void setDiffRating(double diffRating) {
		this.diffRating = diffRating;
	}
	public double getInterestRating() {
		return interestRating;
	}
	public void setInterestRating(double interestRating) {
		this.interestRating = interestRating;
	}

	
}

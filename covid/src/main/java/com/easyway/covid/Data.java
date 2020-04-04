package com.easyway.covid;
public class Data
{
	private String country;
	private String totalCases;
	private String newCases;
	private String totalDeath;
	private String newDeath;
	private String totalRecovered;
	private String activeCases;
	private String critical;
	private double casesPercent;
	private double deathPercent;
	private String repotedOn;
	@Override
	public String toString() {
		return "Data [country=" + country + ", totalCases=" + totalCases + ", newCases=" + newCases + ", totalDeath="
				+ totalDeath + ", newDeath=" + newDeath + ", totalRecovered=" + totalRecovered + ", activeCases="
				+ activeCases + ", critical=" + critical + ", casesPercent=" + casesPercent + ", deathPercent="
				+ deathPercent + ", repotedOn=" + repotedOn + "]";
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getTotalCases() {
		return totalCases;
	}
	public void setTotalCases(String totalCases) {
		this.totalCases = totalCases;
	}
	public String getNewCases() {
		return newCases;
	}
	public void setNewCases(String newCases) {
		this.newCases = newCases;
	}
	public String getTotalDeath() {
		return totalDeath;
	}
	public void setTotalDeath(String totalDeath) {
		this.totalDeath = totalDeath;
	}
	public String getNewDeath() {
		return newDeath;
	}
	public void setNewDeath(String newDeath) {
		this.newDeath = newDeath;
	}
	public String getTotalRecovered() {
		return totalRecovered;
	}
	public void setTotalRecovered(String totalRecovered) {
		this.totalRecovered = totalRecovered;
	}
	public String getActiveCases() {
		return activeCases;
	}
	public void setActiveCases(String activeCases) {
		this.activeCases = activeCases;
	}
	public String getCritical() {
		return critical;
	}
	public void setCritical(String critical) {
		this.critical = critical;
	}
	public double getCasesPercent() {
		return casesPercent;
	}
	public void setCasesPercent(double casesPercent) {
		this.casesPercent = casesPercent;
	}
	public double getDeathPercent() {
		return deathPercent;
	}
	public void setDeathPercent(double deathPercent) {
		this.deathPercent = deathPercent;
	}
	public String getRepotedOn() {
		return repotedOn;
	}
	public void setRepotedOn(String repotedOn) {
		this.repotedOn = repotedOn;
	}
	
	
}

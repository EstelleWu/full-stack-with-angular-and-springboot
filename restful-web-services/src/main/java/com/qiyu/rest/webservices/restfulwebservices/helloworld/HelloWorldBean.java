package com.qiyu.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
	private String message;

	public HelloWorldBean(String message) {
		this.setMessage(message);
	}

	public String getMessage() {
		return this.message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return String.format("HelloWordBean [message = %s]", message);
	}
}

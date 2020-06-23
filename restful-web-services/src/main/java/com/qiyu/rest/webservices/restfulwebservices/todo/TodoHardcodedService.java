package com.qiyu.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

/*
 * temporary database
 * we want spring to manage this
 * */
@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "qiugaoqishuang", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "qiugaoqishuang", "Learn Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "qiugaoqishuang", "Learn Angular", new Date(), false));
	}
	public List<Todo> findAll(){
		return todos;
	}
}

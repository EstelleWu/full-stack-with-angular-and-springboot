import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

/*
this is the ui part, it collaborate with todo-data service
*/ 
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  // [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit Dongshan Road', false, new Date()),
  // ]

  message: string


  constructor(
    private todoService: TodoDataService
  ) { }

  refreshTodos(){
    this.todoService.retrieveAllTodos('qiugaoqishuang').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('qiugaoqishuang', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

}

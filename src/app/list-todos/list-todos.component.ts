import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  //= [
  //  new Todo(1, 'Learn to dance', false, new Date()),
  //  new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //  new Todo(3, 'Visit India', false, new Date())
  //]

  message: string;

  constructor(
    private todoService:TodoDataService,
    private router:Router
    ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('augustoneto').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('augustoneto', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`Delete todo ${id}`);
    this.router.navigate(['todos', id]);
  }

}

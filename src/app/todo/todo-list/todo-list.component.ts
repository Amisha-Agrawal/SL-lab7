import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listOfcars=['swift','Kia','Duster','i20']

  constructor() { 

    
    
  }

  ngOnInit(): void {
  }

}

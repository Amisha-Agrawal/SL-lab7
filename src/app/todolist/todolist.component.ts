import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  employeeDetails=[
    {id:1,name:'A',department:'CSE'},
    {id:2,name:'B',department:'ECE'},
    {id:3,name:'C',department:'IT'}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

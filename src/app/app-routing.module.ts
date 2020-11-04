import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
   { path: '', component: TodolistComponent },
   { path: 'ed' , component: TododetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

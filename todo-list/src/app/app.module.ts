import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskComponent } from './task/task.component';
import { SearchTaskComponent } from './search-task/search-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksListComponent,
    TaskComponent,
    SearchTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

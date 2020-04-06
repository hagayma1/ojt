import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks = ["a", "b", "c"];
  
  onTaskAdded(data:string){
    this.tasks.push(data);
  }
}

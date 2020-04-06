import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks = [{text:"a", checked:false}, {text:"b", checked:false}, {text:"c", checked:false}];
  
  onTaskAdded(data:{text:string,checked:boolean}){
    this.tasks.push(data);
    backup();
  }

  onUpdateTask(data:{text:string,checked:boolean}){
    this.tasks.find(item => item.text === data.text).checked = data.checked;
    backup();
  }

  onDeleteTask(data:{text:string,checked:boolean}){
    let indexToDelete = this.tasks.indexOf(data);
    this.tasks.splice(indexToDelete,1);
    backup();
  }
}

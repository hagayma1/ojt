import { Component } from '@angular/core';
import backupSaver from './modules/backupSaver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
  tasks = backupSaver.restore("tasks");
  
  onTaskAdded(data:{text:string,checked:boolean}){
    this.tasks.push(data);
    this.backup();
  }

  onUpdateTask(data:{text:string,checked:boolean}){
    let indexToUpdate = this.tasks.findIndex(item => item.text === data.text);
    this.tasks[indexToUpdate].checked = data.checked;
    this.backup();
  }

  onDeleteTask(data:{text:string,checked:boolean}){
    let indexToDelete = this.tasks.indexOf(data);
    this.tasks.splice(indexToDelete,1);
    this.backup();
  }

  backup():void {
    backupSaver.save("tasks",this.tasks);
  }
}

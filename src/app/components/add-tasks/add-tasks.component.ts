import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks'
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;

  onSubmit(){
    if(!this.text){
      alert('Please add a task!')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

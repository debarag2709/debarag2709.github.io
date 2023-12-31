import { Component } from '@angular/core';
import {Task} from '../../Tasks';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  title : string = 'Task Tracker'
  toggleAddTask(){
    console.log('Clicked')
  }
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task: any){
    this.taskService.deleteTask(task).subscribe(()=> this.tasks = this.tasks.filter((t) => t.id !==task.id))
  }

  toggleTask(task: Task){
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push()))
  }
}

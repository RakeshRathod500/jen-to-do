import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    const updatedTask = prompt('Edit Task:', this.tasks[index].name);
    if (updatedTask !== null) {
      this.tasks[index].name = updatedTask;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  autoName = "БелАЗ-75710"
  airplaneName = "Ан-225 «Мрия»"
  shipName = "Harmony of the Seas"

  counter = 0;

  plus() {
    if (this.counter < 4) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }
}

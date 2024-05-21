import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestComponent } from './request/request.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW10';
}

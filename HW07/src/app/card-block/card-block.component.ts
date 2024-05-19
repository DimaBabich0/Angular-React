import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {
  @Input() ProductName: string = "";
  @Input() ProductPrice: number = 0;
  @Input() ProductDescription: string = "";

  isVisible = false;

  showDescription() {
    this.isVisible = !this.isVisible;
  }
}

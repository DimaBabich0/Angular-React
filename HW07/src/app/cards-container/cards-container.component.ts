import { Component } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  products = [
    {id: 1, name: 'product 1', price: 101, description: 'product 1 text description'},
    {id: 2, name: 'product 2', price: 102, description: 'product 2 text description'},
    {id: 3, name: 'product 3', price: 103, description: 'product 3 text description'},
    {id: 4, name: 'product 4', price: 104, description: 'product 4 text description'},
    {id: 5, name: 'product 5', price: 105, description: 'product 5 text description'}
  ];
  
  ProductName = ""
  ProductPrice = 0
}

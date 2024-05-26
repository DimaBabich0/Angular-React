import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService
{
  numbers = [6, 2, 5, 1, 7, 8, 3, 10, 4, 9, 8];

  getArray(): number[]
  {
    return this.numbers;
  }

  sortDescending(arr:number[]): number[]
  {
    return arr.sort((a, b) => b - a);
  }

  sortAscending(arr:number[]): number[]
  {
    return arr.sort((a, b) => a - b);
  }

  findMaxValue(arr:number[]): number
  {
    return Math.max(...arr);
  }
}

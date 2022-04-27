import { Injectable } from '@angular/core';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Food> = []

  constructor() { }

  add(food: Food): void {
    console.log('add', food)
    this.items.push(food);
  }
}

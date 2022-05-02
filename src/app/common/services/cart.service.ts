import { Injectable } from '@angular/core';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: {
    [key: string]: Food
  } = {}

  constructor() { }

  add(food: Food): void {
    if (this.items[food.name]?.qty) {
      this.items[food.name].qty++;
    }
    else {
      food.qty = 1;
      this.items[food.name] = food;
    }
  }

  getFoods(): Array<Food> {
    return Object.values(this.items);
  }

  getFoodQty(): number {
    return Object.keys(this.items).reduce((p, c) => p + this.items[c].qty, 0)
  }
}
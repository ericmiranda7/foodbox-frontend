import { Component, OnInit } from '@angular/core';
import { Food } from '../common/models/Food';
import { CartService } from '../common/services/cart.service';
import { FoodService } from '../common/services/food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foods: Array<any> = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.foodService.getFoodItems()
      .subscribe({
        next: (foods: Array<Food>) => {
          this.foods = foods;
        },
        error: (err) => console.log(err),
        complete: () => { }
      })
  }

  addToCart(food: Food): void {
    this.cartService.add(food);
  }

}
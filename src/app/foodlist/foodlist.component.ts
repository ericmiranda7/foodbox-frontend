import { Component, OnInit } from '@angular/core';
import { Food } from '../common/models/Food';
import { FoodService } from '../common/services/food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foods: Array<any> = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFoodItems()
      .subscribe({
        next: (foods: Array<Food>) => {
          this.foods = foods;
        },
        error: (err) => console.log(err),
        complete: () => console.log(this.foods)
      })
  }

}

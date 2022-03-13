import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foods: Array<Food> = [];

  constructor(private http: HttpClient) { }

  getFoodItems(): Observable<Array<Food>> {
    return this.http
      .get<Array<Food>>('http://localhost:8080/api/foods')
  }
}

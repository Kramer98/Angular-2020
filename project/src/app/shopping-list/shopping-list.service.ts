import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }

  addToShopping(ingredients: Ingredient[]) {
    ingredients.map((ingredient) => this.ingredients.push(ingredient));
    this.ingredientsChanged.next([...this.ingredients]);
  }
}

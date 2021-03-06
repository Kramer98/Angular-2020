import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChanged = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }
}

import { Component, OnInit, Input } from "@angular/core";

import { Recipe } from "../recipe.model";
import { ShoppingService } from "src/app/shopping-list/shopping-list.service";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  toShoppingList() {
    this.shoppingService.addToShopping(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}

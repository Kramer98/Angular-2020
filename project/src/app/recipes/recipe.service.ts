import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "Tasty Schnitzel",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),

    new Recipe(
      "Big Fat Burger",
      "This is a test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 2)]
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}

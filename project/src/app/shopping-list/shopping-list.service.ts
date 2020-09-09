import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppingService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    addFromRecipes = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        // console.log(ingredient)
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit([...this.ingredients])
        // console.log(this.ingredients)
    }

    getIngredients() {
        return [...this.ingredients]
    }

    addToShopping(ingredients: Ingredient[]) {
        // console.log(ingredients)
        // this.ingredients = [...ingredients, ...this.ingredients]
        ingredients.map(ingredient => this.ingredients.push(ingredient))
        this.addFromRecipes.emit([...this.ingredients])
    }



}
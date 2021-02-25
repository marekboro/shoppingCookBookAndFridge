import { Component, OnInit } from "@angular/core";
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe(
            "Fajitas",
            "Spicy mexican dish that will fill your stomach, satisfy your hunger and burn on the way out...",
            "https://reciperunner.com/wp-content/uploads/2015/04/SkilletChickenFajitas1.jpg"
            ),
        new Recipe(
            "Shredded chicken in sweet chili sauce",
            "Chinese food that that is as delicious as it will get you closer to a diabetic coma",
            "https://reciperunner.com/wp-content/uploads/2015/04/SkilletChickenFajitas1.jpg"
            ),
        new Recipe(
            "TEST recipe 1",
            "Test description",
            "https://reciperunner.com/wp-content/uploads/2015/04/SkilletChickenFajitas1.jpg"
            )
      ];
      constructor() { }
  
    ngOnInit(): void {
    }

}


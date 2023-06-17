import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes :Recipe[] = [{name: 'test', description: 'test description', imagePath: 'https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0='}]

  constructor() {}

  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }
}

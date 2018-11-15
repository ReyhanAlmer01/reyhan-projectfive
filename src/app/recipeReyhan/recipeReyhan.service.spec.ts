/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeReyhanService } from './recipeReyhan.service';

describe('Service: RecipeReyhan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeReyhanService]
    });
  });

  it('should ...', inject([RecipeReyhanService], (service: RecipeReyhanService) => {
    expect(service).toBeTruthy();
  }));
});

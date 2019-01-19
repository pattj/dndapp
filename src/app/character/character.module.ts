import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedModule } from '../shared/shared.module'
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CharactersComponent, CharactersListComponent],
  exports: [CharactersComponent]
})
export class CharacterModule { }

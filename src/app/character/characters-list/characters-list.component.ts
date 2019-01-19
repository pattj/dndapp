import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character'
import { ICharacter } from '../../shared/interfaces'
 
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

 // Characters: Character[];
  private _characters: Character[]; //original list of characters before filter, for when user clears filter
  Filtered_Characters: Character[];

  @Input() get Characters(): Character[] {

    return this._characters;
  }


  set Characters(value: Character[]) {
    if (value) {
      this._characters = this.Filtered_Characters = value;
    }
     
  }


  constructor() { }

  ngOnInit() {

   

  }



}

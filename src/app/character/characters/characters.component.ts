import { Component, OnInit } from '@angular/core';
import { Character } from '../character';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  title: string;
  character: Character;
  Characters: Character[];

  ngOnInit() {

    this.Characters = [
      { id: 1, name: 'john Doe', race: 'Phoenix', },
      { id: 2, name: 'Jane Doe', race: 'Chandler', },
      { id: 3, name: 'Michelle Thomas', race: 'Seattle', },
      { id: 4, name: 'Jim Thomas', race: 'New York', },

    ];
  }




  constructor() { }


}


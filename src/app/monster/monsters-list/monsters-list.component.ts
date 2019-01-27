import { Component, OnInit , Input} from '@angular/core';

//import { m } from '../monsters/monsters.component'; 
import { IMonster } from '../../shared/interfaces';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.css']
})
export class MonstersListComponent implements OnInit {

  @Input() Monsters: any[] = [];
  selectedMonster: any;
  constructor() { }

  ngOnInit() {
  }

  showMonsters(monsterName: string) {


    console.log(this.Monsters[10].name);

    this.selectedMonster = this.Monsters.filter((monsters: any) => monsters.name == monsterName);
    console.log(this.selectedMonster);
    
  }

}

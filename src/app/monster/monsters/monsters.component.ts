import { Component, OnInit } from '@angular/core';
import { IMonster } from '../../shared/interfaces';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  title: string;
  Results: any; //maybe change the name to results instead and assign to api calls
 //  count : any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = "Monsters";
    
    this.dataService.getMonsters()
      .subscribe((Results: IMonster) => {
        this.Results = Results.results;
       // this.count = Monsters;
      });
    

  }

  showMonsters() {

    console.log(this.Results[0].name);
   // console.log(this.count.count);
  }
}

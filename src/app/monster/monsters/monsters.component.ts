import { Component, OnInit } from '@angular/core';
import { concatMap, expand } from "rxjs/operators";


import { IMonster } from '../../shared/interfaces';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  title: string;
  Response: any; //entire JSON body response from get call
  Results: any; //maybe change the name to results instead and assign to api calls
  next: string;
  pageNumber: number;
 //  count : any;
  constructor(private dataService: DataService) {
    this.pageNumber = 1;
  }

  ngOnInit() {
    this.title = "Monsters";
     
    this.dataService.getMonsters(this.pageNumber)
      .subscribe((Results: IMonster) => {
        this.Results = Results.results;
        this.next = Results.next;
        this.pageNumber += 1;
       // this.count = Monsters;
      });
    
  }

  showMonsters() {
    console.log(this.Results);
    
   // console.log(response.xhr.getResponseHeader("next"));
  //  console.log(this.Page);
   // console.log(this.count.count);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersComponent } from './monsters/monsters.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MonstersComponent, MonstersListComponent],
  exports: [MonstersComponent, MonstersListComponent]
})
export class MonsterModule { }

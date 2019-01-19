import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterTextboxComponent, CapitalizePipe],
  exports: [FilterTextboxComponent, CapitalizePipe]
})
export class SharedModule { }

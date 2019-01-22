import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module';
import { MonsterModule } from './monster/monster.module';

@NgModule({
  declarations: [
    AppComponent,

   // CharactersComponent
  ],
  imports: [
    BrowserModule,
    CharacterModule,
    UserModule,
    SharedModule,
    CoreModule,
    MonsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

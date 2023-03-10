import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { GameRoomComponent } from './game/game-room/game-room.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './game/not-found/not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinGameComponent,
    GameRoomComponent,
    GameComponent,
    NotFoundComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

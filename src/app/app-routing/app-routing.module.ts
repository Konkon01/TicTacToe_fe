import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { JoinGameComponent } from '../join-game/join-game.component';
import { GameRoomComponent } from '../game/game-room/game-room.component';
import { GameComponent } from '../game/game.component';
import { NotFoundComponent } from '../game/not-found/not-found.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'join-game', component: JoinGameComponent },
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: ':id', component: GameRoomComponent },
      { path: 'not-found', component: NotFoundComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

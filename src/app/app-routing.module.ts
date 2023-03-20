import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreComponent } from './score/score.component';
import { ResultComponent } from './result/result.component';
import { AboutComponent } from './about/about.component';
import { LogoComponent } from './logo/logo.component';
import { Page404Component } from './page404/page404.component';
import { LevelsComponent } from './levels/levels.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'game',
    component: GameComponent,
  },

  {
    path: 'rules',
    component: RulesComponent,
  },

  {
    path: 'logo',
    component: LogoComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'levels',
    component: LevelsComponent,
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

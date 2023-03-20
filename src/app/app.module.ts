import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { ResultComponent } from './result/result.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';
import { EqualizerComponent } from './equalizer/equalizer.component';
import { LogoComponent } from './logo/logo.component';
import { ConstructAnswersComponent } from './construct-answers/construct-answers.component';
import { ConstructQuestionsComponent } from './construct-questions/construct-questions.component';
import { Page404Component } from './page404/page404.component';
import { LevelsComponent } from './levels/levels.component';
import { CounterScoreComponent } from './counter-score/counter-score.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ScoreComponent,
    ResultComponent,
    RulesComponent,
    AboutComponent,
    ConstructAnswersComponent,
    ConstructQuestionsComponent,
    EqualizerComponent,
    LogoComponent,
    Page404Component,
    LevelsComponent,
    CounterScoreComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

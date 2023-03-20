import { Component, OnInit, NgZone } from '@angular/core';
import { Question } from 'src/Model/Model';
import { AskingQuestionsService } from '../asking-questions.service';

@Component({
  selector: 'app-construct-questions',
  templateUrl: './construct-questions.component.html',
  styleUrls: ['./construct-questions.component.css'],
})
export class ConstructQuestionsComponent implements OnInit {
  //tableau de questions:
  arrayOfMovies: Question[] = [];
  //question n° ?
  question: number = -1;
  //source de musique à jouer
  audioSrc: string = '';
  //durée des questions
  count = 30;
  // question répondue ?
  questionAnswered: any = {
    answeredQuestionTF: false,
    goodAnswer: false,
    score: 0,
    questionAnswered: 0,
  };
  //score à afficher:
  scoreToShow: number = 0;
  questionToScoreChange: number = 0;
  scoreFinalToDisplay: number = 0;

  // affichage des composants:
  // indexComp = 1 >> affiche les posters pour jouer;
  // indexComp = 2 >> affiche le score et la bonne réponse
  // indexComp = 3 >> affiche le composant qui contient {score final + recap}
  indexAffichageComposant = 1;

  //initialisation timer Angular
  constructor(
    private ngZone: NgZone,
    public difficultyService: AskingQuestionsService
  ) {}

  // à l'affichage du composant:
  ngOnInit() {
    this.arrayOfMovies = this.difficultyService.returnDifficulty();
    //on change la question (qestion +1; timer = 30 sec; audio lancé)
    this.enchainQuestion();

    // timer Angular
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          //compteur 30secondes décrémenté chaque 1000 ms
          this.count--;

          // si fin du temps (compteur =0)  && affichage des posters en cours:
          if (
            (this.count < 0 && this.indexAffichageComposant === 1) ||
            this.questionAnswered.answeredQuestionTF
          ) {
            //on change d'affichage ( affiche la réponse )
            this.indexAffichageComposant = 2;
            // on attend 30 secondes avant la prochaine question (par defaut sauf si clic sur bouton)
            this.count = 30;
            this.questionAnswered.answeredQuestionTF = false;

            // on a changé l'affichage et on décompte 15 secondes avant d'executer le clic automatique du bouton
          } else if (this.count < 0 && this.indexAffichageComposant === 2) {
            this.isQuizzFinished();
          } else if (this.question >= 9 && this.indexAffichageComposant === 2) {
            if (this.count <= 0) {
              this.indexAffichageComposant = 3;
            }
          }
        });
      }, 1000);
    });
  }
  // retours des valeurs du composant construct-answers
  answerReceived(event: any) {
    this.questionAnswered = event;
    if (this.questionAnswered.goodAnswer === false) {
      this.audioSrc = '';
    }
    if (this.questionAnswered.answeredQuestionTF === false) {
      this.questionAnswered.score = 0;
    }
    this.scoreToShow = event.score;
    this.questionToScoreChange = this.questionAnswered.questionAnswered;
  }

  // questions suivantes
  enchainQuestion() {
    this.question++;
    this.questionAnswered.goodAnswer = false;
    this.audioSrc = this.arrayOfMovies[this.question].track;
    this.count = 30;
  }

  // gestion des changements d'affichage des composants result et construct-answers
  isQuizzFinished() {
    if (this.question < 9) {
      this.indexAffichageComposant = 1;
    } else {
      this.indexAffichageComposant = 3;
      this.audioSrc = '';
    }
    this.enchainQuestion();
  }

  transferedScoreToDisplay(event: any): void {
    this.scoreFinalToDisplay = event;
  }
}

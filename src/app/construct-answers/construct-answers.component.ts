import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostersIMG } from 'src/Data/posters';
import { AskingQuestionsService } from '../asking-questions.service';
@Component({
  selector: 'app-construct-answers',
  templateUrl: './construct-answers.component.html',
  styleUrls: ['./construct-answers.component.css'],
})
export class ConstructAnswersComponent {
  // récupération du numéro de question:
  @Input() questionNumber: number = 0;

  // récupération du temps restant du compteur pour le calcul de score
  @Input() counterQuestion: number = 0;

  // difficulté du questionnaire ??
  arrayOfMoviesQuestions: any = [];

  // tableau des réponses possibles à afficher
  postersImgForAnswers: string[] = PostersIMG;
  postersToClickForAnswers: string[] = [``, ``, ``, ``];

  // tirage au sort des postersToClickForAnswers à afficher parmis les mauvaises réponses possibles
  randomPostersArray: number[] = [];

  //réponse de l'utilisateur au clic sur le poster:
  answeredQuestion = {
    answeredQuestionTF: false,
    goodAnswer: false,
    score: 0,
    questionAnswered: 0,
  };
  @Output() returnedAnswer: EventEmitter<any> = new EventEmitter();

  //scores:
  scoreForThisAnswer: number = 0;

  constructor(public difficultyService: AskingQuestionsService) {}

  ngOnInit() {
    //choix du tableau à charger en fonction du bouton qui a été cliqué sur la page d'accueil.
    this.arrayOfMoviesQuestions = this.difficultyService.returnDifficulty();
    this.randomTirage();
    this.randomPoster();
  }

  // fonction pour le randomPostersArray aléatoire des affiches de films pour les mauvaises réponses
  randomTirage() {
    let randomNumber;
    //longueur du tableau = nombre de mauvaises réponses.
    // si changement de valeur pour + ou - de choix de mauvaises réponses, mettre à jour la fonction randomPoster()
    while (this.randomPostersArray.length < 3) {
      //randomPostersArray au sort parmis les (***10***) affiches du tableau de (***questions***)  postersToClickForAnswers  ((((((((((((((((((((((((((((((((((((((( a créer pour afficher + de choix de postersToClickForAnswers en mauvaises réponses )))))))))))))))))))))))))))))))))))))))
      randomNumber = Math.floor(Math.random() * 41);
      // si le nombre tiré n'est pas celui de la question et si le nombre tiré ne se trouve pas déja dans le tableau de randomPostersArray,
      // on push le numéro tiré dans randomPostersArray[].
      if (
        randomNumber !== this.questionNumber &&
        !this.randomPostersArray.includes(randomNumber) &&
        this.arrayOfMoviesQuestions[this.questionNumber].answer !==
          this.postersImgForAnswers[randomNumber]
      ) {
        this.randomPostersArray.push(randomNumber);
      }
    }
  }

  // l'utilisateur clique sur un poster >> réponse jute ou fausse + combien de temps pour répondre.
  isAnswered(poster: string, counterQuestion: number) {
    if (poster === this.arrayOfMoviesQuestions[this.questionNumber].answer) {
      this.answeredQuestion.answeredQuestionTF = true;
      this.answeredQuestion.goodAnswer = true;
      this.answeredQuestion.score = counterQuestion;
      this.answeredQuestion.questionAnswered = this.questionNumber;
    } else {
      this.answeredQuestion.answeredQuestionTF = true;
      this.answeredQuestion.goodAnswer = false;
      this.answeredQuestion.score = 0;
      this.answeredQuestion.questionAnswered = this.questionNumber;
    }
    this.returnedAnswer.emit(this.answeredQuestion);
  }

  // intégration des réponses dans le tableau de postersToClickForAnswers ( inclus la bonne réponse + (3) mauvaises réponses.)
  // si ajout de mauvaises réponses dans le tableau postersToClickForAnswers:
  //  - changer le multiplicateur de math.random()
  //  - faire correspondre le multiplicateur aux nombre de case (ex: x6 >> 6 case (de 0 à 5) ;  x9 >> 9 case (de 0 à 8))
  //  - ajouter dans chaque case les choix possibles avec:   `${this.   (arrayOfMoviesQuestions)   [this.randomPostersArray[ index ++ ] ].poster}`
  randomPoster() {
    switch (Math.floor(Math.random() * 4)) {
      //
      //Math.floor(Math.random() * 4) = 0
      case 0:
        this.postersToClickForAnswers = [
          `${this.arrayOfMoviesQuestions[this.questionNumber].answer}`,
          `${this.postersImgForAnswers[this.randomPostersArray[0]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[1]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[2]]}`,
        ];
        break;
      //
      //Math.floor(Math.random() * 4) = 1
      case 1:
        this.postersToClickForAnswers = [
          `${this.postersImgForAnswers[this.randomPostersArray[0]]}`,
          `${this.arrayOfMoviesQuestions[this.questionNumber].answer}`,
          `${this.postersImgForAnswers[this.randomPostersArray[1]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[2]]}`,
        ];
        break;
      //
      //Math.floor(Math.random() * 4) = 2
      case 2:
        this.postersToClickForAnswers = [
          `${this.postersImgForAnswers[this.randomPostersArray[0]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[1]]}`,
          `${this.arrayOfMoviesQuestions[this.questionNumber].answer}`,
          `${this.postersImgForAnswers[this.randomPostersArray[2]]}`,
        ];
        break;
      //
      //Math.floor(Math.random() * 4) = 3
      case 3:
        this.postersToClickForAnswers = [
          `${this.postersImgForAnswers[this.randomPostersArray[0]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[1]]}`,
          `${this.postersImgForAnswers[this.randomPostersArray[2]]}`,
          `${this.arrayOfMoviesQuestions[this.questionNumber].answer}`,
        ];
        break;
    }
  }
}

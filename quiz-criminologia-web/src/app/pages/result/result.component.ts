import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  score: number = 0;
  totalQuestions: number = 25; // número total de preguntas
  message: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    // Obtener el puntaje almacenado en el servicio
    this.score = this.quizService.getScore();

    // Generar el mensaje según el puntaje
    if (this.score === this.totalQuestions) {
      this.message = '¡Excelente! ¡Dominaste el tema!';
    } else if (this.score >= this.totalQuestions * 0.8) {
      this.message = 'Muy bien, ¡estás casi en la cima!';
    } else if (this.score >= this.totalQuestions * 0.5) {
      this.message = 'Bien hecho, pero hay espacio para mejorar.';
    } else {
      this.message = '¡No te preocupes! Siempre hay algo nuevo que aprender.';
    }
  }
}

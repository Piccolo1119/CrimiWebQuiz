import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  selectOption(selectedIndex: number) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
      this.score++;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // Aquí luego navegamos a ResultComponent
      alert(`Quiz terminado. Puntuación: ${this.score}/${this.questions.length}`);
    }
  }
}

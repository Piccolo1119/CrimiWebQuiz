import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {}

  getQuestions(): Question[] {
    return [
      {
        question: '¿Cuál es la principal diferencia entre criminología y criminalística?',
        options: [
          'La criminología estudia el delito desde una perspectiva social y psicológica, mientras que la criminalística se enfoca en la investigación técnica de los hechos delictivos.',
          'Ambas son lo mismo.',
          'La criminalística estudia la sociedad y la criminología la escena del crimen.',
          'Ninguna de las anteriores.'
        ],
        answer: 0
      },
      {
        question: '¿Qué es un Framework en desarrollo web?',
        options: [
          'Una herramienta para diseñar imágenes.',
          'Un conjunto de herramientas y buenas prácticas para desarrollar aplicaciones web más rápido y de forma estructurada.',
          'Una base de datos en línea.',
          'Un tipo de servidor.'
        ],
        answer: 1
      },
      // Más preguntas...
    ];
  }
}

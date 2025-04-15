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
        question: '¿Qué estudia principalmente la criminología?',
        options: [
          'Las técnicas para procesar una escena del crimen.',
          'Las causas, fenómenos y consecuencias sociales del delito.',
          'Los procedimientos judiciales.',
          'Las leyes penales.'
        ],
        answer: 1
      },
      {
        question: '¿Cuál de estos principios es clave en el diseño de aplicaciones con enfoque social?',
        options: [
          'Minimizar costos a toda costa.',
          'Ignorar las necesidades de usuarios vulnerables.',
          'Accesibilidad y usabilidad inclusiva.',
          'Priorizar publicidad invasiva.'
        ],
        answer: 2
      },
      {
        question: '¿Qué teoría criminológica sostiene que el entorno social influye en la conducta delictiva?',
        options: [
          'Teoría del etiquetado.',
          'Teoría de las oportunidades.',
          'Teoría del aprendizaje social.',
          'Teoría de la anomia.'
        ],
        answer: 3
      },
      {
        question: '¿Qué es el diseño ético en aplicaciones web?',
        options: [
          'Diseñar aplicaciones con animaciones llamativas.',
          'Centrarse en maximizar la interacción adictiva.',
          'Crear aplicaciones que respeten la privacidad, eviten manipulación y promuevan el bienestar digital.',
          'Ignorar la experiencia del usuario.'
        ],
        answer: 2
      },
      {
        question: '¿Qué autor propuso la teoría del control social como factor de prevención del delito?',
        options: [
          'Edwin H. Sutherland.',
          'Travis Hirschi.',
          'Cesare Beccaria.',
          'Robert K. Merton.'
        ],
        answer: 1
      },
      {
        question: '¿Qué concepto hace referencia al diseño de aplicaciones web seguras y accesibles para todos?',
        options: [
          'Seguridad por obscuridad.',
          'Dark patterns.',
          'Desarrollo inclusivo.',
          'Phishing.'
        ],
        answer: 2
      },
      {
        question: '¿Cuál de estos elementos NO corresponde a una buena práctica preventiva desde la criminología ambiental?',
        options: [
          'Mejorar iluminación pública.',
          'Eliminar zonas sin visibilidad.',
          'Promover segregación social.',
          'Facilitar espacios comunitarios.'
        ],
        answer: 2
      },
      {
        question: '¿Qué lenguaje de programación permite tanto frontend como backend con el mismo código base?',
        options: [
          'JavaScript.',
          'Python.',
          'PHP.',
          'C++.'
        ],
        answer: 0
      },
      {
        question: '¿Cuál es la rama de la criminología que estudia las causas sociales y económicas del delito?',
        options: [
          'Criminalística.',
          'Sociología criminal.',
          'Victimología.',
          'Derecho penal.'
        ],
        answer: 1
      },
      {
        question: '¿Cuál de estas prácticas contribuye a la prevención digital de delitos informáticos?',
        options: [
          'Compartir contraseñas en redes sociales.',
          'Usar autenticación de doble factor.',
          'Ignorar actualizaciones de seguridad.',
          'Desactivar el firewall.'
        ],
        answer: 1
      },
      {
        question: '¿Cuál de estas curiosidades es cierta sobre cibercrimen?',
        options: [
          'Solo afecta a gobiernos y grandes empresas.',
          'Más del 60% de los delitos informáticos involucran a usuarios comunes.',
          'No existe regulación alguna.',
          'Solo se comete en la dark web.'
        ],
        answer: 1
      },
      {
        question: '¿Qué enfoque promueve aplicaciones web pensadas para reducir desigualdades y exclusión digital?',
        options: [
          'Software propietario.',
          'Tecnologías inclusivas y de código abierto.',
          'Modelos de negocio opacos.',
          'Publicidad masiva.'
        ],
        answer: 1
      },
      {
        question: '¿Cuál de estas teorías criminológicas destaca la importancia del aprendizaje social en la conducta delictiva?',
        options: [
          'Teoría de la anomia.',
          'Teoría del aprendizaje diferencial.',
          'Teoría racional.',
          'Teoría del control.'
        ],
        answer: 1
      },
      {
        question: '¿Qué herramienta se usa en desarrollo web para controlar versiones de código?',
        options: [
          'Adobe XD.',
          'Git.',
          'Angular CLI.',
          'Chrome DevTools.'
        ],
        answer: 1
      },
      {
        question: '¿Cuál es una buena práctica ética al recolectar datos en una aplicación web?',
        options: [
          'Solicitar solo los datos necesarios y obtener consentimiento informado.',
          'Recopilar todo tipo de datos sin avisar.',
          'Compartir datos con terceros sin control.',
          'Ocultar políticas de privacidad.'
        ],
        answer: 0
      },
      {
        question: '¿Qué autor es referente clásico de la criminología positivista?',
        options: [
          'Cesare Lombroso.',
          'Émile Durkheim.',
          'Howard Becker.',
          'Karl Marx.'
        ],
        answer: 0
      },
      {
        question: '¿Qué concepto propone crear entornos urbanos que desincentiven el delito?',
        options: [
          'Diseño ambiental defensivo.',
          'Zonas de riesgo latente.',
          'Crimen natural.',
          'Teoría de la ventana rota.'
        ],
        answer: 0
      },
      {
        question: '¿Qué código HTTP indica una página segura con cifrado de datos?',
        options: [
          '200 OK',
          '404 Not Found',
          '403 Forbidden',
          'HTTPS'
        ],
        answer: 3
      },
      {
        question: '¿Cuál fue uno de los primeros delitos informáticos registrados en la historia moderna?',
        options: [
          'El ataque a Yahoo en 2013.',
          'El hackeo al sistema telefónico en los años 70 conocido como “phreaking”.',
          'El ransomware WannaCry.',
          'El ataque DDoS a PlayStation Network.'
        ],
        answer: 1
      },
      {
        question: '¿Qué pensador ilustrado es considerado pionero en la defensa de un sistema penal justo y proporcional al delito?',
        options: [
          'Montesquieu.',
          'Jean-Jacques Rousseau.',
          'Cesare Beccaria.',
          'David Hume.'
        ],
        answer: 2
      },
      {
        question: '¿Qué práctica digital contribuye al bienestar mental en entornos web y redes sociales?',
        options: [
          'Limitar notificaciones y configurar tiempos de uso consciente.',
          'Dejar todas las alertas activadas 24/7.',
          'Compartir contraseñas con amigos.',
          'Aceptar términos sin leerlos.'
        ],
        answer: 0
      },
      {
        question: '¿Qué concepto criminológico hace referencia a la reacción social como factor que potencia la criminalidad?',
        options: [
          'Teoría de la anomia.',
          'Teoría del etiquetado.',
          'Teoría del control social.',
          'Teoría racional.'
        ],
        answer: 1
      },
      {
        question: '¿Qué código HTTP indica una página segura con cifrado de datos?',
        options: [
          '200 OK',
          '404 Not Found',
          '403 Forbidden',
          'HTTPS'
        ],
        answer: 3
      }
    ];
  }

}

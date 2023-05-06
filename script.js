/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
    {
      // Texte de la question
      question:
        "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
      // Réponses possibles
      answers: [
        "Darth Vader",
        "Anakin Skywalker",
        "Les deux réponse",
        "Aucune réponse",
      ],
      // Index de la réponse correcte
      correctAnswerIndex: 2,
    },
    {
      question:
        'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
      answers: ["1967", "1974", "1962", "1980"],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
      answers: ["Zelda", "Ganon", "Tom", "Link"],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
      answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
      correctAnswerIndex: 2,
    },
  ];
  
  /********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/
  
  /*************************/
  /* Contenu du DOM chargé */
  /*************************/
  document.addEventListener("DOMContentLoaded", () => {
    // A FAIRE: Compléte le code pour de faire fonctionner le quizz, pour plus d'informations consulte le sujet
  
  // Récupération des éléments du DOM
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers"); 
  const scoreElement = document.getElementById("score");
  
  // Initialisation des variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
  
    // Affichage de la question
    questionElement.textContent = currentQuestion.question;
  
    // Affichage des réponses sous forme de liste <li class="answer"</li>
    answersElement.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.classList.add("answer");
      li.textContent = answer;
  
      // Ecouter évènement, au click passage à la question suivante et score +1 si la réponse est bonne
      li.addEventListener("click", () => {
        if (index === currentQuestion.correctAnswerIndex) {
          score++;
          scoreElement.textContent = score;
        }
  
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
            showNextQuestion();
          } else {
            questionElement.textContent = `Il n'y a plus de questions, merci d'avoir participé. Vous avez obtenu ${score} points sur ${questions.length} !`;
            answersElement.innerHTML = "";
          }
      });
      answersElement.appendChild(li);
    });
  }
  
  // Affichage de la première question
  showNextQuestion();
  });
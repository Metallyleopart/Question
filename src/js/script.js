const questions = [
  {
    question: "198 + 2 ?",
    answers: [
      { text: "2", correct: false },
      { text: "20", correct: false },
      { text: "200", correct: true },
      { text: "2000", correct: false },
    ],
  },
  {
    question: "2 : 3 ?",
    answers: [
      { text: "6", correct: true },
      { text: "20", correct: false },
      { text: "300", correct: false },  
      { text: "4000", correct: false },
    ],
  },
  {
    question: "Siapa anda?",
    answers: [
      { text: "Manusia", correct: true },
      { text: "Orang", correct: false },
      { text: "Makhluk", correct: false },
      { text: "Benda hidup", correct: false },
    ],
  },
  {
    question: "Apakah perlu ganti oli?",
    answers: [
      { text: "Sekali setahun", correct: false },
      { text: "wajib", correct: false },
      { text: "Tidak", correct: true },
      { text: "Sekali seumur hidup", correct: false },
    ],
  },
  {
    question: "Apakah HP bekas cewek selalu dalam kondisi baik?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "1", correct: false },
      { text: "0", correct: false },
    ],
  },
  {
    question: "Kenapa beberapa bulan ini panas sekali?",
    answers: [
      { text: "Ada matahari", correct: true },
      { text: "Ga ada awan", correct: false },
      { text: "Penebangan pohon", correct: false },
      { text: "Ga dipasang AC", correct: false },
    ],
  },
  {
    question: "Kenapa ada matahari?",
    answers: [
      { text: "Pusat tatasurya", correct: false },
      { text: "Buat belanja", correct: true },
      { text: "Keringin jemuran", correct: false },
      { text: "Manasin tetangga", correct: false },
    ],
  },
  {
    question: "Pinjam dulu seratus",
    answers: [
      { text: "1", correct: true },
      { text: "Tidak", correct: false },
      { text: "Boong", correct: false },
      { text: "0", correct: false },
    ],
  }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
let selectedButton = document.getElementsByClassName("btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => selectAnswer(answer, button));
    answerButton.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(answer, btn) {
  const isCorrect = answer.correct;
  if (isCorrect == true) {
    btn.classList.add("correct");
    score++;
  }
  
  Array.from(answerButton.children).forEach((btn) => {
    btn.classList.add("selected");
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Score Anda ${score} dari ${questions.length} pertanyaan`;
  nextButton.innerHTML = "Play again?";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
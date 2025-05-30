// script.js for Donolik Bahsi (Philosophical Debate Game)

const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    philosopher: "Sokrat",
    question: "Haqiqiy donolik nimada?",
    options: [
      { text: "Hamma narsani bilishda", correct: false },
      { text: "O'z bilmasligingni tan olishda", correct: true },
      { text: "Bahsda g'alaba qozonishda", correct: false }
    ],
    feedback: "Sokrat donolikni o'z bilmasligini tan olishda ko'rgan."
  },
  {
    philosopher: "Platon",
    question: "Platon uchun \"ideal shakllar\" nima?",
    options: [
      { text: "Oddiy jismoniy obyektlar", correct: false },
      { text: "Faqat tasavvurda mavjud mukammal g'oyalar", correct: true },
      { text: "Matematik formulalar", correct: false }
    ],
    feedback: "Platon fikricha, ideal shakllar haqiqatning mukammal, lekin sezgi orqali ko'rinmas shaklidir."
  },
  // Add more questions as needed
];

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  clearState();
  const questionObj = questions[currentQuestionIndex];
  questionContainer.innerText = `${questionObj.philosopher}: ${questionObj.question}`;
  questionObj.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option.text;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function clearState() {
  feedbackContainer.innerText = '';
  nextBtn.classList.add('hidden');
  optionsContainer.innerHTML = '';
}

function selectAnswer(selectedOption) {
  const correct = selectedOption.correct;
  const questionObj = questions[currentQuestionIndex];
  if (correct) {
    score++;
    feedbackContainer.innerText = `✅ To'g'ri! ${questionObj.feedback}`;
  } else {
    feedbackContainer.innerText = `❌ Noto'g'ri. ${questionObj.feedback}`;
  }
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (questions[currentQuestionIndex].options.find(opt => opt.text === btn.innerText).correct) {
      btn.classList.add('bg-green-300');
    } else {
      btn.classList.add('bg-red-300');
    }
  });
  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  clearState();
  questionContainer.innerText = `O'yin tugadi! Siz ${questions.length} savoldan ${score} tasiga to'g'ri javob berdingiz.`;
}

startGame();

const allQuestions = {
  easy: [
    { question: "Sokrat kim edi?", answers: [
      { text: "Faylasuf", correct: true },
      { text: "Rassom", correct: false },
      { text: "Shoir", correct: false },
    ]},
    { question: "Platonning mashhur asari?", answers: [
      { text: "Respublika", correct: true },
      { text: "Fizika", correct: false },
      { text: "Etika", correct: false },
    ]},
    { question: "Falsafa nima?", answers: [
      { text: "Haqiqatga intilish", correct: true },
      { text: "Sport turi", correct: false },
      { text: "Matematika turi", correct: false },
    ]},
    { question: "Aristotel kim?", answers: [
      { text: "Faylasuf", correct: true },
      { text: "Shifokor", correct: false },
      { text: "Harbiy", correct: false },
    ]},
    { question: "Sokrat qanday uslub bilan mashhur?", answers: [
      { text: "Suhbat (dialektika)", correct: true },
      { text: "She’r yozish", correct: false },
      { text: "Musobaqa", correct: false },
    ]},
    { question: "Platon qayerda tahsil olgan?", answers: [
      { text: "Sokrat maktabida", correct: true },
      { text: "Aristotel maktabida", correct: false },
      { text: "Afina universitetida", correct: false },
    ]},
    { question: "Falsafa qaysi til so‘zidan olingan?", answers: [
      { text: "Yunoncha", correct: true },
      { text: "Lotincha", correct: false },
      { text: "Arabcha", correct: false },
    ]},
    { question: "Sokrat qanday savollar berardi?", answers: [
      { text: "Ochuvchi va tanqidiy", correct: true },
      { text: "Tasodifiy", correct: false },
      { text: "Oson", correct: false },
    ]},
    { question: "Platon kimning shogirdi?", answers: [
      { text: "Sokrat", correct: true },
      { text: "Aristotel", correct: false },
      { text: "Demokrit", correct: false },
    ]},
    { question: "Aristotel kimning shogirdi?", answers: [
      { text: "Platon", correct: true },
      { text: "Sokrat", correct: false },
      { text: "Pifagor", correct: false },
    ]},
  ],
  medium: [
    { question: "Aristotel qanday ilmiy uslubni targ‘ib qilgan?", answers: [
      { text: "Tajriba", correct: true },
      { text: "Tasodif", correct: false },
      { text: "Mifologiya", correct: false },
    ]},
    { question: "Platonning 'Respublika' asarida ideal jamiyat asosida nima yotadi?", answers: [
      { text: "Adolat", correct: true },
      { text: "Boylik", correct: false },
      { text: "Erkinlik", correct: false },
    ]},
    { question: "Sokrat qanday o‘lim topgan?", answers: [
      { text: "Zahar ichib", correct: true },
      { text: "Qilich bilan", correct: false },
      { text: "Tabiiy o‘lim", correct: false },
    ]},
    { question: "Platon 'shakllar nazariyasi'ni kim orqali ilgari surgan?", answers: [
      { text: "O‘zi", correct: true },
      { text: "Aristotel", correct: false },
      { text: "Sokrat", correct: false },
    ]},
    { question: "Sokrat qanday falsafiy metodni qo‘llagan?", answers: [
      { text: "Mayevtika (savollar orqali haqiqatga yetishish)", correct: true },
      { text: "Eksperiment", correct: false },
      { text: "Yozma traktat", correct: false },
    ]},
    { question: "Platonning akademiyasi qayerda joylashgan edi?", answers: [
      { text: "Afina", correct: true },
      { text: "Rim", correct: false },
      { text: "Iskandariya", correct: false },
    ]},
    { question: "Aristotel qaysi shohning ustozi bo‘lgan?", answers: [
      { text: "Aleksandr Makedonskiy", correct: true },
      { text: "Yuliy Tsezar", correct: false },
      { text: "Napoleon", correct: false },
    ]},
    { question: "Platon qanday jamiyatni tanqid qilgan?", answers: [
      { text: "Demokratik", correct: true },
      { text: "Ilohiy", correct: false },
      { text: "Fashistik", correct: false },
    ]},
    { question: "Sokrat qanday yozma asarlar qoldirgan?", answers: [
      { text: "Hech qanday", correct: true },
      { text: "Dialoglar", correct: false },
      { text: "Poemalar", correct: false },
    ]},
    { question: "Aristotel falsafaning nechta asosiy turini belgilagan?", answers: [
      { text: "3 ta", correct: true },
      { text: "2 ta", correct: false },
      { text: "4 ta", correct: false },
    ]},
  ],
  hard: [
    { question: "Platonning shakllar nazariyasiga ko‘ra, haqiqiy haqiqat qayerda mavjud?", answers: [
      { text: "G‘oya dunyosida", correct: true },
      { text: "Material dunyoda", correct: false },
      { text: "Inson fikrida", correct: false },
    ]},
    { question: "Aristotelning 'Entelixiya' tushunchasi nimani anglatadi?", answers: [
      { text: "Ichki maqsad", correct: true },
      { text: "Tasodifiy hodisa", correct: false },
      { text: "Geometrik shakl", correct: false },
    ]},
    { question: "Platon 'grott' allegoriyasi bilan nimani ifodalaydi?", answers: [
      { text: "Bilimga erishish yo‘li", correct: true },
      { text: "Yurak xatti-harakatlari", correct: false },
      { text: "Urush va tinchlik", correct: false },
    ]},
    { question: "Aristotel qanday fanlarni asos solgan?", answers: [
      { text: "Biologiya va logika", correct: true },
      { text: "Astronomiya va poetika", correct: false },
      { text: "Tarix va musiqa", correct: false },
    ]},
    { question: "Sokratning asosiy maqsadi nima edi?", answers: [
      { text: "Axloqiy tushunchalarni aniqlash", correct: true },
      { text: "Siyosiy tizim yaratish", correct: false },
      { text: "Yangi din asoslash", correct: false },
    ]},
    { question: "Platon qanday ta’lim metodologiyasini qo‘llagan?", answers: [
      { text: "Dialogik uslub", correct: true },
      { text: "Ma’ruza", correct: false },
      { text: "Eksperiment", correct: false },
    ]},
    { question: "Aristotelning metafizikasi qaysi tushunchaga asoslangan?", answers: [
      { text: "Oqibatli sabab", correct: true },
      { text: "Nafs", correct: false },
      { text: "Qismat", correct: false },
    ]},
    { question: "Sokrat nimani 'bilim' deb hisoblagan?", answers: [
      { text: "O‘z bilmasligini anglash", correct: true },
      { text: "Kitob o‘qish", correct: false },
      { text: "O‘rgatish", correct: false },
    ]},
    { question: "Platon nazariyasiga ko‘ra, ruhning necha qismi bor?", answers: [
      { text: "Uchta: aql, g‘azab, xohish", correct: true },
      { text: "Ikki: qalb va nafs", correct: false },
      { text: "To‘rtta: ong, hissiyot, jism, ruh", correct: false },
    ]},
    { question: "Aristotel fikricha, insonning eng oliy maqsadi nima?", answers: [
      { text: "Baxt (evdaimoniya)", correct: true },
      { text: "Hokimiyat", correct: false },
      { text: "Boylik", correct: false },
    ]},
  ]
};


let currentQuestion = 0;
let score = 0;
let questions = [];

function startGame(level) {
  document.getElementById("levelSelect").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");
  score = 0;
  currentQuestion = 0;

  //  Tasodifiy 10 ta savol tanlash
  questions = shuffleArray(allQuestions[level]).slice(0, 10);
  showQuestion();
}

function showQuestion() {
  const qData = questions[currentQuestion];
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  questionEl.textContent = qData.question;
  answersEl.innerHTML = '';

  qData.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.className = "w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-md transition";
    btn.onclick = () => {
      if (answer.correct) score++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
      document.getElementById('score').textContent = `Ball: ${score}`;
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  document.getElementById('question').textContent = "🎉 O'yin yakunlandi!";
  document.getElementById('answers').innerHTML = `<p class="text-lg font-semibold text-green-700">Jami ball: ${score} / ${questions.length}</p>`;
}

// Tasodifiylashtirish funksiyasi
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const gameData = [
  {
    philosopher: "Sokrat",
    question: "Sokratga ko'ra, bilim nima?",
    options: [
      { text: "O'qituvchining bergani", correct: false },
      { text: "Ichki bilish va tan olish", correct: true },
      { text: "Tajribaga asoslangan xulosa", correct: false },
    ],
    feedback: "Sokrat uchun bilim bu o‘zini anglashdan boshlanadi."
  },
  {
    philosopher: "Sokrat",
    question: "Sokratning fikricha eng katta donishmandlik nima?",
    options: [
      { text: "Ko‘p savol berish", correct: false },
      { text: "Bilmaslikni tan olish", correct: true },
      { text: "Hammaga dars berish", correct: false },
    ],
    feedback: "Sokrat aytgan: 'Men faqat bitta narsani bilaman – hech narsa bilmasligimni.'"
  },
  {
    philosopher: "Sokrat",
    question: "Sokratning o‘limiga nima sabab bo‘lgan?",
    options: [
      { text: "Falsafiy qarashlari", correct: true },
      { text: "Jangda halok bo‘lgan", correct: false },
      { text: "Tabiiy o‘lim", correct: false },
    ],
    feedback: "U yoshlarni buzmoqda degan ayblov bilan o‘limga hukm qilingan."
  },
  {
    philosopher: "Sokrat",
    question: "Sokrat qanday uslubda saboq bergan?",
    options: [
      { text: "Sokratik dialog orqali", correct: true },
      { text: "Kitob yozish orqali", correct: false },
      { text: "Ovozli yozuvlar orqali", correct: false },
    ],
    feedback: "Sokrat savol-javob uslubi bilan tanilgan."
  },
  {
    philosopher: "Sokrat",
    question: "Sokrat qaysi shaharda yashagan?",
    options: [
      { text: "Rim", correct: false },
      { text: "Afina", correct: true },
      { text: "Sparta", correct: false },
    ],
    feedback: "Afina qadimiy falsafa markazi bo‘lgan."
  },

  {
    philosopher: "Platon",
    question: "Platonning 'g‘or' allegoriyasi nimani anglatadi?",
    options: [
      { text: "Yashirin haqiqatlar faqat bilim orqali ochiladi", correct: true },
      { text: "G'or - himoyalangan joy", correct: false },
      { text: "Haqiqatga yetishish uchun ko‘zlarni yummoq kerak", correct: false },
    ],
    feedback: "To‘g‘ri! Bu allegoriya haqiqat va xurofot o‘rtasidagi tafovutni tushuntiradi."
  },
  {
    philosopher: "Platon",
    question: "Platon qaysi mashhur maktabni tashkil qilgan?",
    options: [
      { text: "Likey", correct: false },
      { text: "Akademiya", correct: true },
      { text: "Peripatetiklar", correct: false },
    ],
    feedback: "Platonning Akademiyasi falsafa va ilmiy tadqiqotlar markazi edi."
  },
  {
    philosopher: "Platon",
    question: "Platon uchun haqiqiy dunyo qayerda?",
    options: [
      { text: "Tajribada", correct: false },
      { text: "Ideyalar olamida", correct: true },
      { text: "Tabiatda", correct: false },
    ],
    feedback: "Platon real haqiqatni ideyalar olamida ko‘rgan."
  },
  {
    philosopher: "Platon",
    question: "Platonning siyosiy qarashlari qanday edi?",
    options: [
      { text: "Demokratiyani qo‘llab-quvvatlagan", correct: false },
      { text: "Ideal davlat faylasuflar tomonidan boshqarilishi kerak", correct: true },
      { text: "Harbiy rahbarlar hukmron bo‘lishi kerak", correct: false },
    ],
    feedback: "Platon ideal jamiyat boshida donishmand faylasuf turishini istagan."
  },
  {
    philosopher: "Platon",
    question: "Platon kimning shogirdi bo‘lgan?",
    options: [
      { text: "Aristotel", correct: false },
      { text: "Sokrat", correct: true },
      { text: "Pifagor", correct: false },
    ],
    feedback: "Platon Sokratdan ilhom olib, keyinchalik o‘z maktabini yaratgan."
  },

  {
    philosopher: "Aristotel",
    question: "Aristotelning ustozlari kim edi?",
    options: [
      { text: "Platon", correct: true },
      { text: "Sokrat", correct: false },
      { text: "Epiktet", correct: false },
    ],
    feedback: "Aristotel Platonning Akademiyasida tahsil olgan."
  },
  {
    philosopher: "Aristotel",
    question: "Aristotelning 'oltin o‘rtacha' nazariyasi nimani anglatadi?",
    options: [
      { text: "O‘rtacha boylik", correct: false },
      { text: "Ifloslik va poklik orasidagi chegarani", correct: false },
      { text: "Ikkita ifrat o‘rtasidagi me’yoriy yo‘l", correct: true },
    ],
    feedback: "Aristotel muvozanatli xulqni fazilat deb hisoblagan."
  },
  {
    philosopher: "Aristotel",
    question: "Aristotelga ko‘ra, odamning asosiy maqsadi nima?",
    options: [
      { text: "Shon-shuhrat", correct: false },
      { text: "Baxt (evdaimoniya)", correct: true },
      { text: "Mol-dunyo", correct: false },
    ],
    feedback: "Baxtga erishish – Aristotel falsafasining markaziy g‘oyasi."
  },
  {
    philosopher: "Aristotel",
    question: "Aristotelning fikricha bilim qanday olinadi?",
    options: [
      { text: "Ilhom orqali", correct: false },
      { text: "Tajriba va mantiq orqali", correct: true },
      { text: "Faylasuflar gapidan", correct: false },
    ],
    feedback: "U empirik va mantiqiy bilishga urg‘u bergan."
  },
  {
    philosopher: "Aristotel",
    question: "Aristotel qaysi fanlarning asoschisi hisoblanadi?",
    options: [
      { text: "Biologiya va mantiq", correct: true },
      { text: "Matematika va fizika", correct: false },
      { text: "Astronomiya va musiqa", correct: false },
    ],
    feedback: "U biologiyani tizimlashtirgan va mantiq fanini asos solgan."
  }
];


let current = 0;

function loadStage() {
  const stage = gameData[current];
  document.getElementById('philosopher').innerText = stage.philosopher;
  document.getElementById('question').innerText = stage.question;
  document.getElementById('feedback').innerText = '';
  document.getElementById('next').classList.add('hidden');

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';
  stage.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'block w-full text-left px-4 py-2 bg-gray-200 rounded hover:bg-lime-200';
    btn.innerText = opt.text;
    btn.onclick = () => checkAnswer(opt.correct);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(correct) {
  const feedback = document.getElementById('feedback');
  if (correct) {
    feedback.innerText = gameData[current].feedback;
    document.getElementById('next').classList.remove('hidden');
  } else {
    feedback.innerText = "Xato. Yana urinib ko'ring.";
  }
}

function nextStage() {
  current++;
  if (current < gameData.length) {
    loadStage();
  } else {
    document.getElementById('game').innerHTML = '<h2 class="text-xl font-bold text-center">Tabriklaymiz! Siz barcha bosqichlardan muvaffaqiyatli o‘tdingiz.</h2>';
  }
}

window.onload = loadStage;
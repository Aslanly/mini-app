// Данные викторины
const quiz = [
    {
        question: "Столица Франции?",
        answers: ["Берлин", "Мадрид", "Париж", "Рим"],
        correct: 2,
    },
    {
        question: "2 + 2 * 2 = ?",
        answers: ["6", "8", "4"],
        correct: 0,
    },
];

let currentQuestion = 0;
let score = 0;

// Загружаем вопрос
function loadQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

// Проверка ответа
function checkAnswer(index) {
    if (index === quiz[currentQuestion].correct) {
        score++;
        document.getElementById("result").textContent = "✅ Верно!";
    } else {
        document.getElementById("result").textContent = "❌ Неверно!";
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Завершение викторины
function endQuiz() {
    document.getElementById("question").textContent = "Викторина завершена!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").textContent = `Твой результат: ${score} из ${quiz.length}`;

    // Отправляем результат в бота (если Mini App запущен в Telegram)
    if (window.Telegram && Telegram.WebApp.sendData) {
        Telegram.WebApp.sendData(JSON.stringify({ score }));
    }
}

// Запуск при загрузке
loadQuestion();
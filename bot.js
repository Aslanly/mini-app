const { Telegraf } = require("telegraf");
const bot = new Telegraf("7881568443:AAGDoJ1tSUkKPS-K8wBUQGJ4VU-Rz2pmqqw"); // Замени на свой токен

// Команда /start
bot.command("start", (ctx) => {
    ctx.reply("Привет! Нажми кнопку, чтобы начать викторину 🎮", {
        reply_markup: {
            inline_keyboard: [
                // Кнопка с Mini App
                [{
                    text: "Начать викторину",
                    web_app: { url: "https://github.com/Aslanly/mini-app.git" }
                }]
            ]
        }
    });
});

// Запуск бота
bot.launch();
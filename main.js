const TelegramBot = require('node-telegram-bot-api');
const token = '6597440020:AAHXz6ZpIMzi22zMcqStuBs24DsRsrHCrUY';

const ChooseCoin = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'BTC', callback_data: 'btc'},{text: 'THX', callback_data: 'thx'},{text: 'ETH', callback_data: 'eth'}]
    ]
  })
}
// Замените 'YOUR_BOT_TOKEN' на токен вашего бота, полученный у BotFather в Telegram
const bot = new TelegramBot(token, {polling: true});

// Обработка команды /start
bot.on('message', msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
 if (text === '/start') {
 return bot.sendMessage(chatId, `hello, ${msg.from.first_name}`)
 }
 if (text === '/coin') {
  return bot.sendMessage(chatId, 'choose a coin', ChooseCoin)
 }
} )
bot.on('callback_query', msg => {
  const data = msg.data;
  const chatId = msg.message.chat.id;
  bot.sendMessage(chatId, `ты выбрал ${data}`);
  console.log(msg)
})


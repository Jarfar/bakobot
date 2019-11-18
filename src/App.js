const Telegraf = require('telegraf');
const bot = new Telegraf('988383770:AAF-8VBHirD6Ur-eO-GwD-v6gV5XaLC-heI');

bot.start((ctx) => {
   console.log('User Id: ', ctx.from.id);
   return ctx.reply('Добро пожаловать!');
});

bot.command('fag', ctx => ctx.reply('You!'));
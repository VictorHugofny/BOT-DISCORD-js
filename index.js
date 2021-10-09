const Discord = require('discord.js');

const bot = new Discord.Client();

const token = require("./meubot.js");

bot.login(token);
bot.on('ready',() =>{
    bot.user.setActivity('!comandos bot 0.1');
    console.log('estou pronto para ser usado');
});

bot.on('message',msg =>{
  prefixo = "!"
  console.log(msg.content)

})
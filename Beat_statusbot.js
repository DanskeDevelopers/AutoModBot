const Discord = require('discord.js'); // Importer discord.js indtil din bot 
const { MessageEmbed } = require('discord.js') // Gør sådan vi, kan skrive MessageEmbed istedet for Discord.MessageEmbed
const bot = new Discord.Client(); // Den her laver en ny discord bruger
const Token_Discord = "DIN DISCORD BOT TOKEN HER!!"; // Dette er til din bots token




// Ready Evevt

bot.on('ready', () => {
  console.log(`Logged ind som ${bot.user.tag}!`); // Dette vil botten sige når den går online
  bot.user.setActivity("Din STATUS her") // Dette er status til discord bot
 


});

// Edit mig;D

bot.on('message', (message) => { // MessageEvent
  if(message.content === `status`) { // Her skal det ord, du vælger som botten skal slette
   
    message.delete() // Vi beder botten om at slette, den bedsked medlemmer skriver.
    message.channel.send(new MessageEmbed() // Her laver du en ny message embed
      .setTitle('?status') // Sæt din title
      .setDescription('Status:, Online 🟢') // Plaser noget til din beskrivelse
      .addField('Tak fordi du valdte hvors teamplate;D') // Plaser noget her text her.
      .setColor('C60000') // Sæt Din Farve
      .setTimestamp()
     
    )
  }
})

bot.login(Token_Discord); 

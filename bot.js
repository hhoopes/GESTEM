const Eris = require('eris'); 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);


bot.on('ready', () => {                                                  // When the bot is ready to go
    console.log("Yeehaw! I'm awake!");
});
 
bot.on("messageCreate", (message) => { // When a message is created
    var msg = message.content.toLowerCase();                             // We don't want our user having to worry about capitalization
    console.log("The message is:", msg);
    
  if(msg.includes("hello")) {
      bot.createMessage(message.channel.id,
        "world!"
      )
    
  } else if(msg.includes("what transportation options are available")) { // Look for the word pattern that starts one of our user's questions
    bot.createMessage(message.channel.id,
      // Add your response in the "" marks
      ""
    )
      
  } else if(msg.includes("what locations are popular")) {               // look for the pattern for another of our user's questions
      bot.createMessage(message.channel.id,
        // Add your response in "" marks
        ""
    );
      
  } else if(msg.includes("what locations are popular")) {               // look for the pattern for another of our user's questions
      bot.createMessage(message.channel.id,
        // Add your response in "" marks
        ""
    );
      
  } else if(msg.includes("Add your own message you want the bot to look for here!")) {
      bot.createMessage(message.channel.id,
        // Add your response in "" marks
        ""
    );
  }
});


bot.connect();                                         // Get the bot to connect to Discord

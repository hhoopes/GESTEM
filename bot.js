const Eris = require('eris'); 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);


bot.on('ready', () => {                                                  // When the bot is ready to go
    console.log("Yeehaw! I'm awake!");
});
 
bot.on("messageCreate", (message) => {                                 // When a message is created
  if(message.author.id != bot.user.id) {                              // Our bot shouldn't respond to its own messages
    var msg = message.content.toLowerCase();                         // We don't want to worry about capitalization
    console.log("The message is:", msg);
    
    // Look for the message "hello"
    if(msg.includes("hello")) {                                     
      bot.createMessage(message.channel.id,   
        "world!"
      )
      
    // Look for the word pattern that starts one of our user's questions
    } else if(msg.includes("Question 1!")) {
      bot.createMessage(message.channel.id,
        // Add your response in the "" marks
        ""
      )
      
    } else if(msg.includes("Question 2!")) {
      bot.createMessage(message.channel.id,
        // Add your response in the "" marks
        ""
      )
      
    } else if(msg.includes("Question 3!")) {                        
      bot.createMessage(message.channel.id,
        // Add your response in the "" marks
        ""
      )
      
    } else if(msg.includes("Some other message")) {
      bot.createMessage(message.channel.id,
        // Add your response in the "" marks
        ""
      )
    }
  }
})

// Get the bot to connect to Discord
bot.connect();                                         

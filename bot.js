const Eris = require('eris'); 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);


bot.on('ready', () => {                                                  // When the bot is ready to go
    console.log("Yeehaw! I'm awake!");
});
 
bot.on("messageCreate", (message) => {                                   // When a message is created
    if(message.user.id != bot.id) {                                      // Our bot shouldn't respond to its own messages
        var msg = message.content.toLowerCase();                         // We don't want our user having to worry about capitalization
        console.log("The message is:", msg);
    
        if(msg.includes("hello")) {                                     // Look for the message "hello"
            bot.createMessage(message.channel.id,   
                "world!"
            )
        
        } else if(msg.includes("Question 1!")) {                        // Look for the word pattern that starts one of our user's questions
            bot.createMessage(message.channel.id,
                // Add your response in the "" marks
                ""
            )
      
        } else if(msg.includes("Question 2!")) {                        // look for the pattern for another of our user's questions
            bot.createMessage(message.channel.id,
                // Add your response in "" marks
                ""
            )
      
        } else if(msg.includes("Question 3!")) {                        // look for the pattern for another of our user's questions
            bot.createMessage(message.channel.id,
                // Add your response in "" marks
                ""
            );
      
        } else if(msg.includes("")) {
            bot.createMessage(message.channel.id,
                // Add your response in "" marks
                ""
            );
        }
    }
});


bot.connect();                                         // Get the bot to connect to Discord

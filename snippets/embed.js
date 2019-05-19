      bot.createMessage(message.channel.id, {
        embed: {
          title: "I have an answer for your question!", // Title of the embed
          description: "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
          author: {  // addresses the customer that had the question
            name: message.author.username,
            icon_url: message.author.avatarURL
          },
          color: 0xcde4e6, // Color of the bar on the side, you can find these numbers at https://www.color-hex.com/
          fields: [ // Little text boxes that will go across the screen
            {
              name: "Some extra info.", // Field title
              value: "Some extra value.", // Field
              inline: true // Whether you want multiple boxes in same line
            },
            {
              name: "Some more extra info.",
              value: "Another extra value.",
              inline: true
            }
          ],
          footer: { // Footer text
            text: "GESTEM Intergalactic Travel Agency"
          }
            }
        });
  

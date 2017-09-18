/**
 * Creates a chatbot that you can interact with through the bot framework emulator. 
 * This chatbot is able to give you cute cats or Donald Trump quotes.
 * Choose wisely.
 * 
 * To run this bot, ensure that you have the following packages installed:
 * - botbuilder
 * - express
 * 
 * You can install all the required packages at one go using 'npm install'
 * or you can install them manually using 'npm install <package> --save'
 */

const builder = require('botbuilder');
const express = require('express');
const request = require('request');

const app = express();
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

app.listen(3978, () => {
  console.log('Chatbot server started and listening to port 3978');
});
app.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector);
bot.dialog('/', (session) => {
  if (!session.userData.name) {
    session.beginDialog('greeting');
  }

  switch (session.message.text.toLowerCase()) {
    case 'hi':
    case 'hello':
      session.beginDialog('greeting');
      break;

    case '/cat':
      session.beginDialog('cat');
      break;

    case '/trump':
      session.beginDialog('trump');
      break;

    default:
      session.send(`Sorry, I didn't understand that.`);
  }
});

bot.dialog('greeting', [
  (session) => {;
    if (!session.userData.name) {
      builder.Prompts.text(session, `Hello! What's your name?`);
    } else {
      session.endDialog('Hello %s', session.userData.name);
    }
  }, 
  (session, results) => {
    session.userData.name = results.response;
    session.endDialog('Nice to meet you %s', session.userData.name);
  }
]);

bot.dialog('cat', (session) => {
  session.sendTyping();
  request('http://random.cat/meow', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      imageUrl = body.file
      imageType = imageUrl.slice(imageUrl.lastIndexOf('.') + 1, imageUrl.length);

      const msg = new builder.Message(session)
        .addAttachment({
          contentUrl: imageUrl,
          contentType: `image/${imageType}`,
          name: 'cat'
      });
      
      session.send(`Here's your cat!`);
      session.endDialog(msg);
    } else {
      session.endDialog('Oops, something went wrong with the cats');
    }
  });
});

bot.dialog('trump', (session) => {
  session.sendTyping();
  request('https://api.whatdoestrumpthink.com/api/v1/quotes/random', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      session.send('Mr. Trump says:');
      session.endDialog(body.message);
    } else {
      session.endDialog('Oops, something went wrong with Mr. Trump.');
    }
  });
});

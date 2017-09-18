/**
 * Creates a simple chatbot that you can interact with through the bot framework emulator.
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

const app = express();
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

app.listen(3978, () => {
  console.log('Chatbot server started and listening to port 3978');
});
app.post('/api/messages', connector.listen());

// const bot = new builder.UniversalBot(connector, (session) => {
//   session.send('You said: %s', session.message.text);
// });

const bot = new builder.UniversalBot(connector);
bot.dialog('/', (session) => {
  // session.beginDialog('greeting');

  if (!session.userData.name) {
    session.beginDialog('greeting');
  }

  switch (session.message.text.toLowerCase()) {
    case 'hi':
    case 'hello':
      session.beginDialog('greeting');
      break;

    default:
      session.send(`Sorry, I didn't understand that.`);
  }
});

bot.dialog('greeting', [
  (session) => {
    // builder.Prompts.text(session, `Hello! What's your name?`);

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
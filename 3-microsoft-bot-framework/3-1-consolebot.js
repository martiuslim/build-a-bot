/**
 * Creates a simple chatbot that you can interact with through the console.
 * 
 * To run this bot, ensure that you have the following packages installed:
 * - botbuilder
 * 
 * You can install all the required packages at one go using 'npm install'
 * or you can install them manually using 'npm install <package> --save'
 */

const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector, (session) => {
  let userMessage = session.message.text;
  session.send(`You said: ${userMessage}`);
  session.send('You said: %s', userMessage);
});

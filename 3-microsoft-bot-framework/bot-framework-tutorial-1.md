# Console Echobot [link to code](./3-1-consolebot.js)
We will be using the [Bot Builder SDK for Node.js](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart) from Microsoft Bot Framework to build our chatbot. Read more about [what is a SDK here](https://en.wikipedia.org/wiki/Software_development_kit).

Create a JavaScript file and name it `app.js`. To use the `Bot Builder SDK`, place this line of code in your `app.js` file:  
`const builder = require('botbuilder');`  
> The `require()` function tells Node.js that you need this module or package in your project. Here, we pass in `botbuilder` as the argument for the `require()` function as the Microsoft Bot Framework SDK for Node.js is called `botbuilder`.  

Now open a new `terminal` or `cmd` window in your current project directory.  
> For Windows users, you can simply point your cursor to anywhere inside the folder, press `Shift + Right Click` and open either a `Powershell` or `Command Prompt` window. For Mac users, you can open a new terminal window, type `cd` with a space after, drag the folder into the terminal window, then press enter. `cd` is a command to change your 'Current Directory'.  

Try starting your bot by running `node app.js` in your terminal. You may encounter an error saying that `botbuilder` cannot be found. That is because you may not have installed the package yet. If you have cloned or downloaded this repo, then you can simply run `npm install` to install the required packages. Otherwise, run `npm install botbotbuilder --save`.  

Next, type this line of code into your `app.js` file:  
`const connector = new builder.ConsoleConnector().listen();`
> The `ConsoleConnector()` constructor [(reference)](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.consoleconnector.html) connects a UniversalBot to the command line via a console window. The `listen()` function starts the connector listening to `stdIn` which is short for 'standard input'.

Now we have the connector, but no bot yet! To build your echobot, type this into your `app.js` file:  
```
const bot = new builder.UniversalBot(connector, (session) => {
  let userMessage = session.message.text;
  session.send(`You said: ${userMessage}`);
  session.send('You said: %s', userMessage);
});
```
> The `UniversalBot()` constructor [(reference)](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.universalbot.html) creates a new instance of the UniversalBot that allows you to manage your bot conversations with users across multiple channels. Here we pass in the `connector` that we created earlier as the first argument, indicating that we want to connect the bot to the console, as well as a callback function with the `session` parameter.

Start your echobot via the console using `node app.js` and talk to it!  
> The `session` [(reference)](https://docs.botframework.com/en-us/node/builder/chat-reference/classes/_botbuilder_d_.session.html) is an object that manages the bot's conversation with a user. The echobot is replying to your messages using `send()` function which is the default message handler built into the `session` object. The bot receives your messages through the `session.message` property and is able to access it through `session.message.text`  

Notice that we are able to use 2 ways to format the message that the bot sends back to you. The first way using `${}` is called the `JavaScript string template` where you can pass in variables within the curly braces. Note that this method requires you to use backticks `` ` ``. The second way is to pass in additional arguments to the string and use placeholders such as `%s` as specified [here](https://nodejs.org/api/util.html#util_util_format_format_args).   

Congrats! You have successfully created a simple console echobot. Take some time to understand the fundamentals of how the Microsoft Bot Framework works before moving on to build a better bot! 

# Part 3: Microsoft Bot Framework
Welcome to the bot framework tutorial/ hands-on lab where we will learn how to build a chatbot together using Node.js & Express. 

This tutorial is divided into several parts and we will be improving our chatbot incrementally. All the code is available for reference (in the respective JavaScript files) from just a basic console echobot to more sophisticated chatbots.

1. Console Echobot [link to tutorial](./bot-framework-tutorial-1.md)
    - [consolebot code](./3-1-consolebot.js)
2. Basic Chatbot [link to tutorial](./bot-framework-tutorial-2.md)
    - [basicbot code](./3-2-basicbot.js)
3. Query Chatbot (tutorial in progress..)
    - [querybot code](./3-3-querybot.js)

First, ensure that you have the following software installed before proceeding:  
- Code editor: [Visual Studio Code](https://code.visualstudio.com/)
- JavaScript runtime: [Node.js](https://nodejs.org/en/)
- Bot Emulator: [Bot Framework Emulator](https://emulator.botframework.com/)

If you have cloned or downloaded this repo, then you can use this folder `3-microsoft-bot-framework` as your Node.js project directory. Otherwise, create a new folder, open a terminal or cmd window in that directory, then run `npm init`. Refer to the [Session 2 Workshop](../2-javascript-and-node) for more information on `npm` and `npm init`.

## Resources and reference
Note: this tutorial uses `express` as the web framework to build the API endpoint for the Microsoft Bot Framework. You may notice that the official documentation uses `restify` as the web service framework instead. I chose `express` simply because I'm more familiar with it and you can use either packages. Fundamentally they both serve the same purpose in this regard and are just syntactically different.

- [Microsoft Bot Framework](https://docs.microsoft.com/en-us/bot-framework/)
- [Bot Framework Nodejs Overview](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-overview)
- [Bot Framework Nodejs API Documentation](https://docs.botframework.com/en-us/node/builder/chat-reference/modules/_botbuilder_d_.html)
- [Bot Framework Code Samples (Basic)](https://github.com/Microsoft/BotBuilder/tree/master/Node/examples)
- [Bot Framework Code Samples (Advanced)](https://github.com/Microsoft/BotBuilder-Samples)
# Part 4: Bring Your Bot Online
Now that you have built your bot and tested it locally using the Bot Framework Emulator, it's time to bring it online and deploy it live on messaging platforms such as `Telegram`.

## Prerequisites
First, ensure that you have the following prerequisites:
- Install [git](https://git-scm.com/downloads)
- Have a personal Microsoft email account ready (such as @outlook or @live, **NOT** your school email!) or create a new one if you don't
- Have a GitHub account ready or create one if you don't

### Unlock your student benefits
To get started on using **Microsoft Azure**, Microsoft's Cloud Computing Platform & Services, you will need to unlock your student benefits with **Microsoft Imagine**.

#### Verify your student status on Imagine
1. Navigate to [Microsoft Imagine](https://imagine.microsoft.com/en-us) through an `incognito` window if you're using Chrome or the relevant private browsing window for other browsers. 
2. Sign in to `Microsoft Imagine` using your **personal Microsoft email account**. Do not sign in using your school email!
3. Click on the `Account` tab in the header to view/ manage your account details.
4. On the left side, click on `Please verify your student status` to perform the verification process to unlock your student benefits.
5. Now verify your student status using your **school email address**.
6. Check your email for the verification link. Congrats, you now have access to a wide range of Microsoft resources to learn and build cool stuff!

#### Activate your student Azure subscription
1. Navigate back to the `Account` page. You will now see that your account status has been verified as a Student.
2. Below that is a blue container that says `Get Azure`. Click on the `Activate Azure` button in the container to activate your student Azure subscription.
3. Cick on `Register Now` to activate your Azure subscription. You may need to disable pop-up blockers to see the pop-up window. In this new pop-up window, sign in again using your **personal Microsoft email account**.
4. Do the necessary verification.
5. Check out the Azure Portal [here](https://portal.azure.com/).

> Always remember to sign in to the Microsoft services (such as Imagine or Azure) using your personal email account. Your school email account is only used for verifying your student status. If you are facing problems with the login process, try again using a private or incognito window.  

## Deploying your bot online with Azure
For the most part, we will be following the guide from Alyssa's Bot Framework Tutorial [here](https://github.com/alyssaong1/Bot-Framework-Tutorial/blob/master/CHALLENGE2.md).

## Deploying your bot to Telegram
> Ensure that your bot works online first by testing it in the [Bot Framework Developers Portal](https://dev.botframework.com/bots). 

Once your bot is ready for `Telegram`, start by talking to the `BotFather`. Also known as `@BotFather` on Telegram. 

1. Send the `/newbot` command to the BotFather.
2. Follow the instructions for the bot, you can just name your bot using your name for now.
3. BotFather will then give you a `token` for your Telegram bot. Copy that token and go back to the Bot Framework Developers Portal page for your bot.
4. Add the `Telegram` channel and paste the access token into the field.
5. You may now start talking to your bot on Telegram!
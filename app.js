var restify = require('restify');
var guts = require('./guts');

var builder = require('botbuilder')

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: 'YourAppId', appSecret: 'YourAppSecret' })

bot.add('/', function (session) {
    session.send(guts.process(session.message.text))
})

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());

server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
})
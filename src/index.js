require('dotenv').config();
console.log('Manchester united discord bot started');

const { Client, Intents } = require('discord.js');

const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('Manchester united discord bot ready'));

client.login(DISCORD_BOT_TOKEN);

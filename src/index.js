require('dotenv').config();
require('module-alias/register');

const DiscordClient = require('@config/discord-client');
const { Collection } = require('discord.js');

const { DISCORD_BOT_TOKEN } = process.env;

DiscordClient.commands = new Collection();

require('./config/getCommands')(DiscordClient);
require('./config/getEvents')(DiscordClient);

DiscordClient.login(DISCORD_BOT_TOKEN);

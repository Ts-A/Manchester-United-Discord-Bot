require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Returns pong'),
  new SlashCommandBuilder().setName('user').setDescription('Returns user info'),
  new SlashCommandBuilder()
    .setName('best-club')
    .setDescription('Returns the best club in the world'),
].map((command) => command.toJSON());

const rest = new REST({ version: 9 }).setToken(DISCORD_BOT_TOKEN);

rest
  .put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), {
    body: commands,
  })
  .then(() => console.log('Registered application commands'))
  .catch(console.error);

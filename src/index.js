require('dotenv').config();
console.log('Manchester united discord bot started');

const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const path = require('path');

const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandFiles = fs
  .readdirSync(`${path.join(__dirname, '/commands')}`)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

const eventFiles = fs
  .readdirSync(`${path.join(__dirname, '/events')}`)
  .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) client.once(event.name, (...args) => event.execute(...args));
  else client.on(event.name, (...args) => event.execute(client, ...args));
}

client.login(DISCORD_BOT_TOKEN);

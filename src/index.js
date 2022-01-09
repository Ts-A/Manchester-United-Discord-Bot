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

client.once('ready', () => console.log('Manchester united discord bot ready'));

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isCommand())
      return await interaction.reply(
        'Sorry, I do not understand what you mean.'
      );

    const command = client.commands.get(interaction.commandName);

    await command.execute(interaction);
  } catch (error) {
    console.log(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

client.login(DISCORD_BOT_TOKEN);

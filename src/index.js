require('dotenv').config();
console.log('Manchester united discord bot started');

const { Client, Intents } = require('discord.js');

const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('Manchester united discord bot ready'));

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isCommand())
      return await interaction.reply(
        'Sorry, I do not understand what you mean.'
      );

    const { commandName } = interaction;

    switch (commandName) {
      case 'ping':
        await interaction.reply('pong');
        break;
      case 'user':
        await interaction.reply(`Hello ${interaction.user.tag}`);
        break;
      case 'best-club':
        await interaction.reply('Manchester United is the best club 🔴');
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
});

client.login(DISCORD_BOT_TOKEN);

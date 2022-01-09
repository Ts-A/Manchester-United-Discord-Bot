const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Returns user info'),
  async execute(interaction) {
    const { user } = interaction;
    await interaction.reply(`Hello, ${user.username}`);
  },
};

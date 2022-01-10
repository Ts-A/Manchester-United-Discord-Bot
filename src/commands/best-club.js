const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('best-club')
    .setDescription('Returns the information about the best club in the world'),
  async execute(interaction) {
    await interaction.reply(
      `The best club in the world is...\n<drum rolls>\nManchester United is the best club 🔴`
    );
  },
};

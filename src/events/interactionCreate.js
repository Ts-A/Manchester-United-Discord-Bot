module.exports = {
  name: 'interactionCreate',
  async execute(client, interaction) {
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
  },
};

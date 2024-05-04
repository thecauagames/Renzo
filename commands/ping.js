const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Veja a latência do bot'),
	async execute(interaction) {
		await interaction.reply(`:ping_pong: | A latência atual é de **\`${Math.floor(interaction.client.ws.ping)}ms\`**!`);
	},
};

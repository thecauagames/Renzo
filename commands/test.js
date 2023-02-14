const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('teste')
		.setDescription('teste testados testando'),
	async execute(interaction) {
		await interaction.reply('um teste em desenvolvimento');
	},
};

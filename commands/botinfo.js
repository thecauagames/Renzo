const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('botinfo')
		.setDescription('Veja as informações do Renzo!')
		.setDescriptionLocalizations({
			"es-ES": '¡Consulta la información de Renzo!',
			"en-US": 'See Renzo\'s info!',
		}),

	async execute(interaction) {;

        const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Centro de informações do Renzo')
		.addFields(
			{ name: 'Versão do bot:', value: 'Renzo 7 versão 2024.5', inline: false },
			{ name: 'Canal de atualizações:', value: 'Release', inline: false },
			{ name: 'Codinome:', value: 'Renzo 7 "Taphia"', inline: false },
			{ name: 'Versão do discord.js:', value: 'discord.js v14', inline: false },
		)	
		.setDescription('Seja bem vindo ao centro de informações do Renzo! Aqui poderá ver a versão do bot, a versão do discord.js e muito mais!');

    	await interaction.reply({
			embeds: [embed]
		})
	},
};



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
			{ name: 'Versão do bot:', value: 'Renzo 6.1 (Katari)', inline: true },
			{ name: 'Canal de atualizações:', value: 'Alpha Release', inline: true },
			{ name: 'Versão do discord.js:', value: 'discord.js v14', inline: true },
		)	
		.setDescription('Seja bem vindo ao centro de informações do Renzo! Aqui poderá ver a versão do bot, a versão do discord.js e muito mais!');

    	await interaction.reply({
			embeds: [embed]
		})
	},
};



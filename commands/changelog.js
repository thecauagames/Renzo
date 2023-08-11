const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelogs')
		.setDescription('Veja o que mudou no Renzo!')
		.setDescriptionLocalizations({
			"es-ES": '¡Vea qué ha cambiado en Renzo!',
			"en-US": 'See what has changed in Renzo!',
		}),

	async execute(interaction) {;
        const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('📄 Mudanças recentes no Renzo:')
		.addFields(
			{ name: '[17/06/2023] Renzo 6.1?', value: 'Since Discord changed its username system, changing into a special, unique username, Discord classifies those users with the #0000 discriminator. Starting with Renzo version 6.1 "Katari", we are removing the #0000 from those whom changed its username to the new unique username system. \n If you didn\'t changed your username into the new unique username system, restart your client or update your app. If still does not appear, the rollout has not reached your date. \nRenzo 6.1 will be implemented in the following weeks, as is currently released in the Beta channel.', inline: true },
			{ name: '[21/06/2023] Renzo 6.1 is released!', value: 'Well, this is kinda odd, we decided to not remove the discriminator since there\'s some people that didn\'t changed to the new unique username system. For this reason, we moved the discriminator to a new field in /userinfo.', inline: true },
		)	
		.setDescription(':warning: /changelogs não mostra Unboxed News!');

    	await interaction.reply({
			embeds: [embed], ephemeral: true
		})
	},
};

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Veja algumas informações sobre você')
		.setDescriptionLocalizations({
            "es-ES": 'Aquí tiene información sobre usted',
            "en-US": 'See some information about you',
        })
		.addUserOption(option => option.setName('target').setDescription('Escolha outro usuário para ver as informações dele')),
	async execute(interaction) {

		const user = interaction.options.getUser("target") ? interaction.options.getUser("target") : interaction.user

        const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Informações sobre: ' + `${user.username}`)
		.setThumbnail(`${user.displayAvatarURL()}`)
		.addFields(
			{ name: '🪪 ID do usuário', value: `${user.id}`, inline: true },
			{ name: '📆 Data de criação do usuário', value: '<t:' + (user.createdTimestamp / 1000).toFixed(0) + ':F>' , inline: true },
			{ name: '🤖 Usuário é um bot?', value: `${user.bot === true?"Sim":"Não"}`, inline: true },
	
		)	
    	await interaction.reply({
			embeds: [embed]
		})
	},
};
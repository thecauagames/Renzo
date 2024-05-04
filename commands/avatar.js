const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder, User } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Veja seu próprio avatar ou de outro usuário!')
		.setDescriptionLocalizations({
			"es-ES": '¡Ver tu propio avatar o el de otro usuario!',
			"en-US": 'See your own or another user\'s avatar!',
		})
		.addUserOption(option => option.setName('target').setDescription('O avatar de outro usuário')),
	async execute(interaction) {
		const user = interaction.options.getUser("target") ? interaction.options.getUser("target") : interaction.user

		const embed = new EmbedBuilder()
		.setColor("#0155b6")
      	.setTitle(`Avatar de **${user.username}**`)
      	.setImage(`${user.displayAvatarURL({size: 512, dynamic: true})}`)

			
  			const button = new ButtonBuilder()
			.setLabel(`Abra no navegador`)
			.setStyle(ButtonStyle.Link)
			.setURL(`${user.displayAvatarURL({size: 1024, dynamic: true})}`);


	await interaction.reply({
		embeds: [embed], components: [new ActionRowBuilder().addComponents(button)], ephemeral: false,
	});
	},
};
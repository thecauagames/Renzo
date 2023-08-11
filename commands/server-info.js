const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

/**
 * @param {import('discord.js').Guild} guild
 */

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Veja as informações do servidor')
		.setDescriptionLocalizations({
            "es-ES": 'Ver información del servidor',
            "en-US": 'View server information',
        }),
	async execute(interaction) {;
		
        const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setThumbnail('https://cdn.discordapp.com/icons/' + `${interaction.guild.id}` + '/' + `${interaction.guild.icon}` + '.png')
		.setTitle('Visualizando informações do servidor: ' + `${interaction.guild.name}`)
		.addFields(
			{ name: '👥 Quantidade de membros:', value: `${interaction.guild.memberCount}`, inline: true },
			{ name: '👑 Dono(a) do servidor:', value: `${interaction.user.username}` + '#' + `${interaction.user.discriminator}` + '\n' + 'ID do dono(a): ' + `**${interaction.guild.ownerId}**`, inline: true },
			{ name: '🪪 ID do servidor:', value: `${interaction.guild.id}`, inline: true },
			{ name: '📆 Servidor criado em:', value: '<t:' + (interaction.guild.createdTimestamp / 1000).toFixed(0) + ':F>', inline: true },
			{ name: '🔞 Servidor NSFW?', value: `${interaction.guild.nsfwLevel === 1?"Sim":"Não"} `, inline: true },
			{ name: '<:partner:1075512602546929694> Servidor parceiro do Discord?', value: `${interaction.guild.partnered === 1?"Sim":"Não"}`, inline: true },
			{ name: '<:verified:1075512788581105664> Servidor verificado pelo Discord?', value: `${interaction.guild.verified === 1?"Sim":"Não"}`, inline: true },
		)	

    	await interaction.reply({
			embeds: [embed]
		})
	},
};


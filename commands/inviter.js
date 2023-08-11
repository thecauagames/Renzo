const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Venha me convidar a seu servidor!'), ephemeral: true
        .setDescriptionLocalizations({
			"es-ES": '¡Invítame a tu servidor!',
			"en-US": 'Invite me into your server!',
		}),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Me convide a seu servidor!')
            .setDescription('Tenho certeza que ficou curioso sobre o bot e quis adicioná-lo a seu servidor, pois aqui estou!')
            .addFields(
                {
                    name: `:warning: Lembre-se que ainda estou na versão Alpha e coisas podem quebrar a qualquer momento!`,
                    value: `No momento tenho 6 comandos, o /avatar, /botinfo, /invite, /serverinfo, /userinfo e /changelogs!`,
                    inline: true
                });

        const button = new ButtonBuilder()
            .setLabel(`Me convide!`)
            .setStyle(ButtonStyle.Link)
            .setURL('https://discord.com/api/oauth2/authorize?client_id=864526736335175690&permissions=122675520566&scope=bot%20applications.commands');
    

        await interaction.reply({
            embeds: [embed], components: [new ActionRowBuilder().addComponents(button)], ephemeral: true
        });
    }
}


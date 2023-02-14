const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Venha me convidar a seu servidor!'), ephemeral: true,
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Me convide a seu servidor!')
            .setDescription('Tenho certeza que ficou curioso sobre o bot e quis adicioná-lo a seu servidor, pois aqui estou!')
            .addFields(
                {
                    name: `:warning: Lembrando! Eu ainda estou na versão Alpha, coisas podem explodir!`,
                    value: `No momento tenho 5 comandos, o /avatar, /botinfo, /invite, /teste e /userinfo!`,
                    inline: true
                });

        const button = new ButtonBuilder()
            .setLabel(`Me convide!`)
            .setStyle(ButtonStyle.Link)
            .setURL('');
            // In .setUrl(''), copy & paste your Discord's OAuth2 inviter link!
    

        await interaction.reply({
            embeds: [embed], components: [new ActionRowBuilder().addComponents(button)], ephemeral: true
        });
    }
}


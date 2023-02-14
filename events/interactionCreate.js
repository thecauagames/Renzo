module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`O usuário ${interaction.user.tag} no canal #${interaction.channel.name} fez uma interação.`);
	},
};

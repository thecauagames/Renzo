module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Prontinho da Silva! Estou logado como ${client.user.tag}, vejo você daqui a algum tempo.`);
	},
};

client.on('message', msg => {
  if (msg.content === '/teste bot') {
    msg.reply('O bot está funcionando corretamente!');
  }
});



client.on('message', msg => {
  if (msg.content === '/pesquisa') {
    msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
    msg.reply('Olá! Esta função ainda não está disponível. Desculpe! :sob:');
  }
});

client.on('message', msg => {
  if (msg.content === '/pesquisa nsfw') {
   msg.reply('P-perai, você acha mesmo que eu iria mostrar isso?');
  }
});

client.on('message', msg => {
  if (msg.content === '/old ajuda') {
    msg.reply('/pesquisa <texto>: Zero pesquisa coisas na Web e tenta te dizer oque é.');
    msg.reply('/mccrafting <item>: Zero te diz os craftings que você quer.');
    msg.reply('/botinfo: Informações do Zero.');
    msg.reply(':X: /tecnologic: Zero conta a história do Tecnologic, um cluster para bots. (**desativado**)');
  }
});

client.on('message', msg => {
  if (msg.content === '/mccrafting') {
    msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
    msg.reply('Para isso você precisa ter o Minecraft instalado, caso tenha eu vou te dizer os craftings do Minecraft!');
  }
});

client.on('message', msg => {
    if (msg.content === '/mccrafting ender_chest') {
        msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
      msg.reply('https://www.dummies.com/wp-content/uploads/449082.image0.jpg');

    }
  });

  client.on('message', msg => {
    if (msg.content === '/mccrafting pickaxe') {
        msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
      msg.reply('Pickaxe material: P                   ');
      msg.reply('Nothing: X                            ');
      msg.reply('Stick: S                  P | P | P   ');
      msg.reply('                          X | S | X   ');
      msg.reply('                          X | S | X   ');
    }
  });
  

client.on('message', msg => {
  if (msg.content === '/old botinfo') {
    msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
    msg.reply(':bookmark: | Atualmente o Zero está usando a versão: 1.0.2');
    msg.reply(':satellite_orbital: | Atualmente o Zero está usando o cluster: Zero Tecnologic 1.1.3');
  }
});



client.on('message', msg => {
  if (msg.content === '/notificar') {
    msg.reply('<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!');
    msg.reply('<a:notification:741359881252241490>| O Zero irá fazer um lembrete de algo que você queira saber. Exemplo: `s!lembrete almoçar`');
  }
});

client.on('message', async (message) => {

  if (message.content.toLowerCase() === '/ajuda') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Seja bem vindo a central de ajuda do Zero.')
      .setURL('')
      .setAuthor('')
      .setDescription('Aqui você vai ver todos os meus comandos, mas alguns desses comandos estão desativados ou não estão funcionando direito!')
      .setColor('#FF2D00')
      .setThumbnail('https://example.png')
      .setImage('https://example.png')
      .setFooter('Central de comandos do Zero', 'https://example.png')
      .addFields({
        name: '**/pesquisa**',
        value: 'O Zero pode pesquisar algumas coisas na Web, mas por enquanto, esse comando está sendo limitado. (totalmente seguro)',
        inline: true
      }, {
        name: '**/botinfo**',
        value: 'Neste comando, ele exibe algumas informações do Zero como versão, clusters e etc.',
        inline: true
      }, {
        name: '**/mccrafting**',
        value: 'Por enquanto só existe 2 craftings aq, mas em breve, terá todos os craftings do Minecraft! (ender_chest e pickaxe)',
        inline: true
      }, {
        name: '**/expulsar**',
        value: 'Aviso: Usando o comando /expulsar <usuário> expulsa instantâneamente!',
        inline: true
      }, {
        name: '**/convidar**',
        value: 'Você irá me convidar para o seu servidor? Sério? Não estou acreditando!',
        inline: true
      })
      .setTimestamp();

    message.channel.send(embed);
  }
})

client.on("ready", () => {
  let activities = [
    `Use /ajuda!`,
    'Deixe me jogar Roblox! Por favor!',
    'Algumas pessoas me dizeram que eu sou só linhas de código, mas não é verdade!',
    'Eu estou em fase de testes, posso não funcionar muito bem.',
    'Espero que 2021 seja um ano bom para todos!',
    'Eu gostaria que alguém me adicionasse no servidor, eu irei ficar muito feliz se me adicionar!',
    `require "VSCode" client.user.ZeroB end`,

  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 20000);
  client.user
    .setStatus("online") // tem dnd , idle e offline pelo que eu me lembro

    .catch(console.error);

  console.log("estou online yay")
})

client.on('message', message => {
  if (message.content === '/latencia') {  
    message.channel.send(`🏓 A latência é de ${Date.now() - message.createdTimestamp}ms. A Latência da API é de ${Math.round(client.ws.ping)}ms`);
  }
});

client.on('message', message => {
  if (message.content === '/ping') {  
    message.channel.send(`🏓 A Latência é de ${Date.now() - message.createdTimestamp}ms. A Latência da API é de ${Math.round(client.ws.ping)}ms`);
  }
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Kick command is working mighty fine there JSchatt!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "/expulsar"
  if (message.content.startsWith('/expulsar')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`O usuário ${user.tag} foi expulso do servidor com sucesso!`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('Não consegui expulsar o usuário! Causas possíveis: Permissões estão faltando ou hierarquia de cargo.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("O usuário que você queria expulsar, não está nesse servidor!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("Não consegui expulsar ninguém, já que ninguém mencionou o usuário para ser expulso!");
    }
  }
});

client.on('message', async (message) => {

  if (message.content.toLowerCase() === '/botinfo') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Seja bem vindo a central de Informações do Zero')
      .setDescription('Aqui tem todas as informações sobre o bot Zero, como a versão atual dele, clusters, APIs e algumas informações de build e etc.')
      .setColor('#7EA9CF')
      .setFooter('Central de Informações do Zero',)
      .addFields({
        name: 'Versão do Zero',
        value: 'O Zero está atualmente na versão 1.0.2b',
        inline: true
      }, {
        name: 'Clusters',
        value: 'O Zero somente usa 1 cluster de fabricação do CauaVITOR097#2880, O ZTekno',
        inline: true
      }, {
        name: 'APIs',
        value: 'O Zero usa a API do discord.js, uma ferramenta incrível, você deveria testar.',
        inline: true
      }, {
        name: 'Informações aleatórias',
        value: 'O Zero está na build 1.0.2.5.01212021',
        inline: true
      })
      .setTimestamp();

    message.channel.send(embed);
  }
})

client.on('message', msg => {
  if (msg.content === '/convidar') {
    msg.reply('Você vai me convidar pra eu entrar em seu servidor? Mais um(a) amigo(a) para a minha lista! Me convide aqui neste link: https://bityli.com/dz96V');
  }
});

client.on('ready', () => {
  console.log('Ban command is working mighty fine there!');
});

//This is the ban command, you can 
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('/ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'a rasao e indefinida! caso veja isso fale com CauaVITOR097#2880 para resolver este little problem!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`${user.tag} Foi banido com sucesso!`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('Me desculpa? Não consegui banir o membro que você pediu. Ele estava com um cargo mais alto que o seu? Sem permissões?');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("`Parece que você tentou banir ${user.tag}, o problema que ele não estava neste server!`");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("Opa! É novo usando comandos? Se sim, você tem que mencionar a pessoa que quer banir! ");
    }
  }
});
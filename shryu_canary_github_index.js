const { KickCommand } = require("./KickCommand")
const { BanCommand } = require("./BanCommand")
client.on("ready", () => {
  let activities = [
      `Use /ajuda!`,
      "Deixe me jogar Roblox! Por favor!",
      "Algumas pessoas me dizeram que eu sou só linhas de código, mas não é verdade!",
      "Eu estou em fase de testes, posso não funcionar muito bem.",
      "Espero que 2021 seja um ano bom para todos!",
      "Eu gostaria que alguém me adicionasse no servidor, eu irei ficar muito feliz se me adicionar!",
      `require "VSCode" client.user.ZeroB end`,
    ],
    i = 0
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING",
      }),
    20000
  )
  client.user
    .setStatus("online") // tem dnd , idle e offline pelo que eu me lembro

    .catch(console.error)

  console.log("estou online yay")
})
client.on("message", (msg) => {
  const message = msg
  if (!message.guild) return
  if (msg.content === "/teste bot") {
    msg.reply("O bot está funcionando corretamente!")
  } else if (msg.content === "/pesquisa") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply("Olá! Esta função ainda não está disponível. Desculpe! :sob:")
  } else if (msg.content === "/pesquisa nsfw") {
    msg.reply("P-perai, você acha mesmo que eu iria mostrar isso?")
  } else if (msg.content === "/old ajuda") {
    msg.reply(
      "/pesquisa <texto>: Zero pesquisa coisas na Web e tenta te dizer oque é."
    )
    msg.reply("/mccrafting <item>: Zero te diz os craftings que você quer.")
    msg.reply("/botinfo: Informações do Zero.")
    msg.reply(
      ":X: /tecnologic: Zero conta a história do Tecnologic, um cluster para bots. (**desativado**)"
    )
  } else if (msg.content === "/mccrafting") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply(
      "Para isso você precisa ter o Minecraft instalado, caso tenha eu vou te dizer os craftings do Minecraft!"
    )
  } else if (msg.content === "/mccrafting ender_chest") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply("https://www.dummies.com/wp-content/uploads/449082.image0.jpg")
  } else if (msg.content === "/mccrafting pickaxe") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply("Pickaxe material: P                   ")
    msg.reply("Nothing: X                            ")
    msg.reply("Stick: S                  P | P | P   ")
    msg.reply("                          X | S | X   ")
    msg.reply("                          X | S | X   ")
  } else if (msg.content === "/old botinfo") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply(":bookmark: | Atualmente o Zero está usando a versão: 1.0.2")
    msg.reply(
      ":satellite_orbital: | Atualmente o Zero está usando o cluster: Zero Tecnologic 1.1.3"
    )
  } else if (msg.content === "/notificar") {
    msg.reply(
      "<:nao_pertube:741355913537126481>**│** Olá! Você está usando a versão experimental do Zero, por favor não reporte bugs caso não for solicitado!"
    )
    msg.reply(
      "<a:notification:741359881252241490>| O Zero irá fazer um lembrete de algo que você queira saber. Exemplo: `s!lembrete almoçar`"
    )
  } else if (message.content.toLowerCase() === "/ajuda") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Seja bem vindo a central de ajuda do Zero.")
      .setURL("")
      .setAuthor("")
      .setDescription(
        "Aqui você vai ver todos os meus comandos, mas alguns desses comandos estão desativados ou não estão funcionando direito!"
      )
      .setColor("#FF2D00")
      .setThumbnail("https://example.png")
      .setImage("https://example.png")
      .setFooter("Central de comandos do Zero", "https://example.png")
      .addFields(
        {
          name: "**/pesquisa**",
          value:
            "O Zero pode pesquisar algumas coisas na Web, mas por enquanto, esse comando está sendo limitado. (totalmente seguro)",
          inline: true,
        },
        {
          name: "**/botinfo**",
          value:
            "Neste comando, ele exibe algumas informações do Zero como versão, clusters e etc.",
          inline: true,
        },
        {
          name: "**/mccrafting**",
          value:
            "Por enquanto só existe 2 craftings aq, mas em breve, terá todos os craftings do Minecraft! (ender_chest e pickaxe)",
          inline: true,
        },
        {
          name: "**/expulsar**",
          value:
            "Aviso: Usando o comando /expulsar <usuário> expulsa instantâneamente!",
          inline: true,
        },
        {
          name: "**/convidar**",
          value:
            "Você irá me convidar para o seu servidor? Sério? Não estou acreditando!",
          inline: true,
        }
      )
      .setTimestamp()

    message.channel.send(embed)
  } else if (message.content === "/latencia") {
    message.channel.send(
      `🏓 A latência é de ${
        Date.now() - message.createdTimestamp
      }ms. A Latência da API é de ${Math.round(client.ws.ping)}ms`
    )
  } else if (message.content === "/ping") {
    message.channel.send(
      `🏓 A Latência é de ${
        Date.now() - message.createdTimestamp
      }ms. A Latência da API é de ${Math.round(client.ws.ping)}ms`
    )
  } else if (message.content.startsWith("/expulsar")) {
    kickcommand()
  } else if (message.content.toLowerCase() === "/botinfo") {
    const embed = new Discord.MessageEmbed()
      .setTitle("Seja bem vindo a central de Informações do Zero")
      .setDescription(
        "Aqui tem todas as informações sobre o bot Zero, como a versão atual dele, clusters, APIs e algumas informações de build e etc."
      )
      .setColor("#7EA9CF")
      .setFooter("Central de Informações do Zero")
      .addFields(
        {
          name: "Versão do Zero",
          value: "O Zero está atualmente na versão 1.0.2b",
          inline: true,
        },
        {
          name: "Clusters",
          value:
            "O Zero somente usa 1 cluster de fabricação do CauaVITOR097#2880, O ZTekno",
          inline: true,
        },
        {
          name: "APIs",
          value:
            "O Zero usa a API do discord.js, uma ferramenta incrível, você deveria testar.",
          inline: true,
        },
        {
          name: "Informações aleatórias",
          value: "O Zero está na build 1.0.2.5.01212021",
          inline: true,
        }
      )
      .setTimestamp()

    message.channel.send(embed)
  } else if (msg.content === "/convidar") {
    msg.reply(
      "Você vai me convidar pra eu entrar em seu servidor? Mais um(a) amigo(a) para a minha lista! Me convide aqui neste link: https://bityli.com/dz96V"
    )
  } else if (message.content.startsWith("/ban")) {
    BanCommand()
  }
})

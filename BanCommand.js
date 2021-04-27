function BanCommand() {
  if (!message.guild) return

  // if the message content starts with "!ban"

  // Assuming we mention someone in the message, this will return the user
  // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
  const user = message.mentions.users.first()
  // If we have a user mentioned
  if (user) {
    // Now we get the member from the user
    const member = message.guild.members.resolve(user)
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
          reason:
            "a rasao e indefinida! caso veja isso fale com CauaVITOR097#2880 para resolver este little problem!",
        })
        .then(() => {
          // We let the message author know we were able to ban the person
          message.channel.send(`${user.tag} Foi banido com sucesso!`)
        })
        .catch((err) => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.channel.send(
            "Me desculpa? Não consegui banir o membro que você pediu. Ele estava com um cargo mais alto que o seu? Sem permissões?"
          )
          // Log the error
          console.error(err)
        })
    } else {
      // The mentioned user isn't in this guild
      message.channel.send(
        "`Parece que você tentou banir ${user.tag}, o problema que ele não estava neste server!`"
      )
    }
  } else {
    // Otherwise, if no user was mentioned
    message.channel.send(
      "Opa! É novo usando comandos? Se sim, você tem que mencionar a pessoa que quer banir! "
    )
  }
}
module.exports = BanCommand

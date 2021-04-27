function KickCommand() {
  // Ignore messages that aren't from a guild

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
       * Kick the member
       * Make sure you run this on a member, not a user!
       * There are big differences between a user and a member
       */
      member
        .kick("Optional reason that will display in the audit logs")
        .then(() => {
          // We let the message author know we were able to kick the person
          message.channel.send(
            `O usuário ${user.tag} foi expulso do servidor com sucesso!`
          )
        })
        .catch((err) => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.channel.send(
            "Não consegui expulsar o usuário! Causas possíveis: Permissões estão faltando ou hierarquia de cargo."
          )
          // Log the error
          console.error(err)
        })
    } else {
      // The mentioned user isn't in this guild
      message.channel.send(
        "O usuário que você queria expulsar, não está nesse servidor!"
      )
    }
    // Otherwise, if no user was mentioned
  } else {
    message.channel.send(
      "Não consegui expulsar ninguém, já que ninguém mencionou o usuário para ser expulso!"
    )
  }
}
module.exports = KickCommand

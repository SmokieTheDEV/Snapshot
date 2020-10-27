const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');


module.exports = class EmbedCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'embed',
      usage: 'embed <message>',
      description: 'Sends your message as a embed',
      type: client.types.FUN,
      examples: ['embed Hello world!']
    });
  }
  run(message, args) {
    const msg = args.join(' ');
    if (!msg) return this.sendErrorMessage(message, 0, 'Please provide a message to say in embed');
    const embed = new MessageEmbed()
      .setTitle(`<a:light_staff:767984202188062732> **${msg}** <a:light_staff:767984202188062732>`) //you can set title if you want to or just leave it
      //.setDescription(`**${msg}**`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
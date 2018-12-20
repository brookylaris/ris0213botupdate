const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.get(args[0]) || message.member;

    let funEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Fun commands__**")
    .setDescription(funcommands)
    
    pidor.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Info commands__**")
    .setDescription(infoList)

    pidor.send(infoEmbed);


    let supEmbed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Support")
    .setDescription("If you need help with something feel free to join the [Main Server](https://discord.gg/exEBTMA)")
    .setFooter("Rage StatBot Created by: RageEmpress")
    .setTimestamp()

    pidor.send(supEmbed)

    let chanEmbed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#0ff00")
    .setFooter(`Help command used by: ${pidor.user.username}`)
    .setDescription(`${pidor} Check your DMs`);

    message.channel.send(chanEmbed).then(msg => {msg.delete(5000)});

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }

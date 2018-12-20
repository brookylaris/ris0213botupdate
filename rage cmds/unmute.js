module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Larissa didn't give you `Manage Messages` premission")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Please mention an user or ID to mute!");

        let role = message.guild.roles.find(r => r.name === "Rage Mute")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This Rage Member is not muted!");

        await toMute.removeRole(role);
        message.channel.sendMessage("The Rage Member has been unmuted!");

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }

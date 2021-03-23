module.exports = {
    name:'kick',
    description: "this is a kick command",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("Felhasználó kikickelve!")
        }
        else{
            message.channel.send("Nem tudod kikickelni ezt a felhasználót!");
        }
    }
}
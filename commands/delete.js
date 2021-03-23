module.exports = {
    name:'delete',
    description: "this is a delete command",
    async execute(message, args){
        if(!args[0]) return message.reply("Ird be mennyi üzenetet szeretnél törölni!");
        if(isNaN(args[0])) return message.reply("Irj be egy valós számot!");

        if(args[0] > 100) return message.reply("Nem törölhetsz ki 100-nál több üzenetet!");
        if(args[0] < 1) return message.reply("Legalább 1 üzenetet ki kell hogy törölj!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}
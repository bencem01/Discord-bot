module.exports = {
    name:'sugo',
    description: "Sugó command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Legyetek szerencsések !')
        .setURL('https://www.youtube.com/channel/UCAxeatMaHRtanWRzwT9IKYA')
        .setDescription('Segítség')
        .addFields(
            {name: 'Súgó', value: '!sugo: kilistázza az összes parancsot'},
            {name: 'Delete', value: '!delete: (bot permissiontől függően) töröl tetszőleges számú üzenetet'},
            {name: 'Play', value: '!play: zenebot felcsatlakoztatása'},
            {name: 'Leave', value: '!leave: zenebot lecsatlakotatása'},
            {name: 'Kick', value: '!kick: (bot permissiontől függően) felhasználó kickelése'},
        )
        .setImage('https://i.ytimg.com/vi/A5sRZ0bDp9w/hqdefault.jpg')
        .setFooter('Sugo');

        message.channel.send(newEmbed);
    }
    
}
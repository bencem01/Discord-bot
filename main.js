const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

 const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command  = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('music-bot online!');
})

client.on('message',message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command === 'sugo'){
        client.commands.get('sugo').execute(message, args, Discord);
    }
    else if(command === 'delete'){
        client.commands.get('delete').execute(message, args);
    }
    else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }
    else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }
   
});
 









client.login('ODE4NDQyNzEzMjU0ODU0NjU3.YEYILA.-HzHFI8QAR4ZHzwY4usJZjD-zm8');

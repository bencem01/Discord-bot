/* const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name:'play',
    description:'play command music bot',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Hangszobába kell lenned a parancs végrehajtásához');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Nincsen hozzá megfelelő jogod!');
        if (!permissions.has('SPEAK')) return message.channel.send('Nincsen hozzá megfelelő jogod!');
        if (!args.length) return message.channel.send('Írd le mire keresel rá');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) =>{
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0]: null;

        }
        
        const video = await videoFinder(args.join(' '));

        if (video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play (stream, {seek: 0, volume: 1})
            .on('finnish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`:thumbsup: Jelenlegi muzsika: ***${video.title}***`)
        }
        else {
            message.channel.send('A keresett elem nem található');
        }
    }
} */

const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Hangszobába kell lenned a parancs végrehajtásához!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Nincsen hozzá megfelelő jogod!');
        if (!permissions.has('SPEAK')) return message.channel.send('Nincsen hozzá megfelelő jogod!');
        if (!args.length) return message.channel.send('Írd le mire keresel rá!');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('Szoba elhagyása');
            });
 
            await message.reply(`:thumbsup: Bitto duo most húzza: ***A te linked!*** `)
 
            return 
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup:  Bitto duo most húzza: ***${video.title}***`)
        } else {
            message.channel.send('Nincsen találat');
        }
    }
}
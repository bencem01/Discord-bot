module.exports ={
    name: 'leave',
    description: 'stop and leave',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('Hangcsatornába kell lenned hogy leállítsd a zenét!');
        await voiceChannel.leave();
        await message.channel.send('Csatorna elhagyása :smiling_face_with_tear:')
    }
}
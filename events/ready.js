const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        client.user.setPresence({
            activities: [{ name: '! Akira tarafından yapılmıştır.', type: ActivityType.Streaming, url: 'https://www.twitch.tv/akiracikk' }],
            status: 'online',
        });
    },
};
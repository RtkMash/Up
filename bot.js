// @ts-nocheck

require("dotenv").config();

const { getConfig, checkConfig } = require("./functions/config");
checkConfig();
const { token } = getConfig();
const { client } = require("./client");

require("moment-duration-format");
require("./slash")(client);

process
  .on("uncaughtException", console.error)
  .on("unhandledRejection", console.error);
client.login(token);

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => { 
joinVoiceChannel({
channelId: "1246725097079836737",
guildId: "1246725094722633738",       
adapterCreator: client.guilds.cache.get("1246725094722633738").voiceAdapterCreator
    });
});


console.log(`${client.user} Aktif!`);
const activities = [
  "🤖 | Aktif Uptime ",
  "🌑 | Bot Başladı",
  "💕 | Rtk Uptime",
  "🤑 | Rtk Runs"
]

setInterval(async() => {
  client.user.setPresence({ activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}` }], status: 'idle' });
}, 1000 * 15);
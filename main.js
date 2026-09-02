import 'dotenv/config';
import http from 'http';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.once('clientReady', () => [
  console.log("Ready!")
]);


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.includes("https://cdn.discordapp.com/attachments/1519657113175986348/1522643260630237434/togif.gif" || "https://cdn.discordapp.com/attachments/1458159628373463192/1544722080094883960/cool_bear.gif?ex=6a998a0b&is=6a98388b&hm=f572c087dbf49dbdbf9861ecf227b998d464b93edb3461eafdfef156ff2d1dd0&")){
    console.log('Deleted message with medved Vlad');
    message.delete();
  } else {
    console.log("pass")
    
  }
});



http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running\n');
}).listen(process.env.PORT || 3000, () => {
  console.log('Web server is running');
});

client.login(process.env.DISCORD_TOKEN);

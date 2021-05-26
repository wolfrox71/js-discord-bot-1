const Discord = require("discord.js");
const bot = new Discord.Client();

const data =  require("./data.js")

const TOKEN = "Nzc5NDI2Njk1NzczOTQ1OTE3.X7gXrQ.OWi_nNfnLPOjh8sNdb7muupBVik";
const prefix = "!";
const broken_files = data.broken_files;


const fs = require("fs");
var files = fs.readdirSync("commands");
var files2 = [];
for (var i in files){
    console.log(files[i]);
    if (files[i].includes(".js") && !broken_files.includes(files[i])){
        files2.push(files[i]);
    }
}
console.log(`files: ${files2}`)

var commands = [];
for (i in files2) {
    commands.push(require(`./commands/${files2[i]}`))
}
console.log(`commands: ${commands}`)

bot.on("ready", () =>{
    console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on("message", msg =>{
    if (msg.author.bot) {return;}
    if (msg.author.id === "498453986324512788") {msg.reply("Stop committing war crimes!"); return;}
    if (!msg.content.startsWith(prefix)) {return;}
    const args = msg.content.split(/ +/);
    const entered_command = args.shift().toLowerCase().substring(prefix.length)
    var found = false;

    switch (entered_command) {
    
    case "reload":
        commands = [];
        for (i in files2) {
            commands.push(require(`./commands/${files2[i]}`));
        }
        msg.reply(`Reloaded all commands`);
        return;

    default: 
        for (i in commands) {
            if (commands[i].name === entered_command || commands[i].alias.includes(entered_command)) {commands[i].execute(msg, args);found = true; break}
        }
        if (!found){msg.reply(`Command "${entered_command}" not found`)}
    }
});
bot.login(TOKEN)
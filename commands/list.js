const { broken_files } = require("../data.js");

module.exports = {
    name: "list",
    alias: ["commands","ls"],
    description: "Lists avalable commands",
    execute(msg, args) {
        const fs = require("fs");
        var files = fs.readdirSync("commands");
        var files2 = [];
        const data =  require("../data.js")
        const broken_files = data.broken_files;
        for (var i in files){
            if (files[i].includes(".js") && !broken_files.includes(files[i])){
                files2.push(files[i]);
            }
        }
        var commands = [];
        for (i in files2) {
            commands.push(require(`./${files2[i]}`))
        }
        var names = [];
        for (var i in commands) {names.push(commands[i].name)} 
        msg.reply(`Avalable commands: ${names}`)
    },
};
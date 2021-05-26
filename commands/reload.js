module.exports = {
    name: "reload",
    alias: ["restart"],
    description: "",
    execute(msg, args) {
        if (args.length < 1) {
            msg.reply("Must have an argument"); return;
        }
        const fs = require("fs");
        var files = fs.readdirSync("commands");
        const data =  require("../data.js");
        const broken_files = data.broken_files;
        var files2 = [];
        for (var i in files){
            if (files[i].includes(".js") && !broken_files.includes(files[i])){
                files2.push(files[i]);
            }
        }
        var commands = [];
        var found = false;
        for (i in files2) {
            commands.push(require(`./${files2[i]}`))
        }

        for (i in commands) {
            if (commands[i].name === args[0] || commands[i].alias.includes(args[0])) {
                msg.reply(`Reloaded command "${args[0]}`); found = true; break}
                
        }
        if (!found){msg.reply(`Command "${args[0]}" not found`)}
    },
};
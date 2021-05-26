module.exports = {
    name: "exit",
    alias: ["quit","close","stop"],
    description: "Closes the program",
    execute(msg, args) {
        msg.reply("Closing the program...")
        process.exit();
    },
};
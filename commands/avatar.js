module.exports = {
    name: "avatar",
    alias: [],
    description: "Returns the users avatar",
    execute(msg, args) {
        msg.reply(msg.author.displayAvatarURL());
    },
};
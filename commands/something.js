module.exports = {
    name: "something",
    alias: ["pointless"],
    description: "this is a thing doing something",
    execute(msg, args) {
        msg.channel.send("Hello!")
    },
};
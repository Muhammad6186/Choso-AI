const axios = require('axios');
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
    name: "stalk",
    version: "1.0.0",
    hasPermission: 0,
    credits: `Marjhxn`,
    description: "get info using uid/mention/reply to a message",
    usePrefix: true,
    usages: "[reply/uid/@mention/url]",
    commandCategory: "info",
    cooldowns: 0,
};

module.exports.run = async function ({ api, event, args, utils, Users, Threads }) {
    try {
        let { threadID, senderID, messageID } = event;

        var id;
        if (args.join().indexOf('@') !== -1) {
            id = Object.keys(event.mentions);
        } else if (args[0]) {
            id = args[0];
        } else {
            id = event.senderID;
        }

        if (event.type == "message_reply") {
            id = event.messageReply.senderID;
        } else if (args.join().indexOf(".com/") !== -1) {
            const res = await axios.get(`https://api.reikomods.repl.co/sus/fuid?link=${args.join(" ")}`);
            id = res.data.result;
        }

        let userInfo = await api.getUserInfo(id);
        let name = userInfo[id].name;
        let username = userInfo[id].vanity === "unknown" ? "Not Found" : id;
        let url = userInfo[id].profileUrl;
        let gender = userInfo[id].gender === 1 ? "♀️Gender: Female" : userInfo[id].gender === 2 ? "♂️Gender: Male" : "Not Found";
        let birthday = userInfo[id].birthday || "Not Found";
        let followers = userInfo[id].follow || "Not Found";
        let location = userInfo[id].location ? userInfo[id].location.name : "Not Found";
        let hometown = userInfo[id].hometown ? userInfo[id].hometown.name : "Not Found";
        let relationshipStatus = userInfo[id].relationship_status || "Not Found";
        let relationshipPartner = userInfo[id].love ? userInfo[id].love.name : "None";

        let callback = async function () {
            const buffer = await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" });
            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(buffer.data, "utf-8"));

            return api.sendMessage({
                body: `👤Profile: \n\nName: ${name}\n🔗Facebook URL: https://facebook.com/${username}\n🪪UID: ${id}\n${gender}\n🎂Birthday: ${birthday}\n👥Followers: ${followers}\n📍Location: ${location}\n🏡Hometown: ${hometown}\n❤️Relationship Status: ${relationshipStatus}\n👫In Relationship with: ${relationshipPartner}\n\n❍━━━━━━━━━━━━❍`,
                attachment: fs.createReadStream(__dirname + "/cache/avt.png")
            }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avt.png"), event.messageID);
        };

        return callback();
    } catch (err) {
        console.log(err);
        return api.sendMessage(`Error`, event.threadID);
    }
};

/* [ Cracked By Jake Asunto ] */
module.exports.config = {
  name: "dalle",
  version: "0.0.1@cracked",
  hasPermssion: 0,
  credits: "Nguyễn Minh Hiếu",
  description: "Cracked by Jake",
  usePrefix: true,
  commandCategory: "Generate",
  usage: "[dalle]",
  cooldowns: 15
};
module.exports.run = async ({
  api: u,
  event: e,
  args: a,
  Users: b,
  Currencies: c
}) => {
  var j = await c.getData(e.senderID);
  const k = require("axios");
  const l = require("fs");
  const m = require("moment-timezone");
  function _0x14bf(_0x15b269,_0x34391b){var _0x369816=_0x3698();return _0x14bf=function(_0x14bfc8,_0x531453){_0x14bfc8=_0x14bfc8-0x1e5;var _0x5768fa=_0x369816[_0x14bfc8];return _0x5768fa;},_0x14bf(_0x15b269,_0x34391b);}var _0x18ca0b=_0x14bf;(function(_0x530e4e,_0x1839a6){var _0x2fbf4a={_0x34571b:0x1ea,_0x454d5a:0x1e7,_0xfeb7c4:0x1ed,_0x3bbb70:0x1f1,_0x358c89:0x1e8,_0x1ee487:0x1f2},_0x34c617=_0x14bf,_0x5d3c64=_0x530e4e();while(!![]){try{var _0x5888b7=-parseInt(_0x34c617(_0x2fbf4a._0x34571b))/0x1*(parseInt(_0x34c617(_0x2fbf4a._0x454d5a))/0x2)+parseInt(_0x34c617(0x1f5))/0x3+parseInt(_0x34c617(_0x2fbf4a._0xfeb7c4))/0x4*(-parseInt(_0x34c617(0x1ee))/0x5)+parseInt(_0x34c617(0x1f3))/0x6*(parseInt(_0x34c617(_0x2fbf4a._0x3bbb70))/0x7)+-parseInt(_0x34c617(_0x2fbf4a._0x358c89))/0x8+parseInt(_0x34c617(0x1e9))/0x9+parseInt(_0x34c617(_0x2fbf4a._0x1ee487))/0xa;if(_0x5888b7===_0x1839a6)break;else _0x5d3c64['push'](_0x5d3c64['shift']());}catch(_0x19b106){_0x5d3c64['push'](_0x5d3c64['shift']());}}}(_0x3698,0xb88cb));function _0x3698(){var _0x3d27da=['\x63\x72\x65\x64\x69\x74\x73','\x32\x39\x39\x30\x34\x32\x38\x73\x61\x4a\x74\x52\x61','\x31\x36\x30\x36\x32\x39\x38\x30\x77\x69\x53\x58\x63\x59','\x36\x4b\x59\x69\x42\x6e\x47','\x74\x68\x72\x65\x61\x64\x49\x44','\x33\x31\x30\x31\x37\x33\x36\x4f\x75\x42\x57\x62\x47','\x4e\x67\x75\x79\u1ec5\x6e\x20\x4d\x69\x6e\x68\x20\x48\x69\u1ebf\x75','\x63\x6f\x6e\x66\x69\x67','\x32\x6b\x42\x62\x79\x43\x47','\x39\x34\x34\x34\x38\x38\x30\x51\x76\x77\x6c\x51\x49','\x31\x36\x36\x30\x39\x30\x35\x6f\x4d\x55\x63\x45\x65','\x31\x30\x39\x32\x33\x36\x37\x53\x4c\x57\x77\x4e\x4b','\x4a\x75\x73\x74\x20\x62\x65\x63\x61\x75\x73\x65\x20\x69\x20\x63\x72\x61\x63\x6b\x65\x64\x20\x74\x68\x69\x73\x20\x63\x6f\x64\x65\x20\x64\x6f\x65\x73\x6e\x27\x74\x20\x6d\x65\x61\x6e\x20\x79\x6f\x75\x20\x73\x68\x6f\x75\x6c\x64\x20\x64\x69\x73\x72\x65\x73\x70\x65\x63\x74\x20\x74\x68\x65\x20\x61\x75\x74\x68\x6f\x72\x20\x62\x79\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x74\x68\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x61\x73\x73\x69\x67\x6e\x65\x64\x2e\x0a\x50\x6c\x65\x61\x73\x65\x20\x43\x68\x61\x6e\x67\x65\x2c\x20\x59\x6f\x75\x20\x41\x72\x65\x6e\x27\x74\x20\x41\x20\x52\x65\x61\x6c\x20\x43\x6f\x64\x65\x72\x2e\x0a\x43\x72\x61\x63\x6b\x65\x64\x20\x42\x79\x20\x4a\x61\x6b\x65\x20\x41\x73\x75\x6e\x74\x6f\x2e','\x6d\x65\x73\x73\x61\x67\x65\x49\x44','\x34\x58\x56\x41\x6b\x68\x45','\x31\x31\x31\x35\x33\x33\x35\x4e\x76\x70\x4d\x4d\x5a','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'];_0x3698=function(){return _0x3d27da;};return _0x3698();}var _0x73c6=[_0x18ca0b(0x1f0),_0x18ca0b(0x1e6),_0x18ca0b(0x1e5),_0x18ca0b(0x1eb),_0x18ca0b(0x1f4),_0x18ca0b(0x1ec),_0x18ca0b(0x1ef)];if(this[_0x73c6[0x1]][_0x73c6[0x0]]!=_0x73c6[0x2]){u[_0x73c6[0x6]](_0x73c6[0x3],e[_0x73c6[0x4]],e[_0x73c6[0x5]]);return;}
  var n = m.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const o = a.join(" ");
  const p = [];
  const q = [];
  p.push(Date.now());
  if (!a.join(" ")) {
    return u.sendMessage("Please Enter Prompt.", e.threadID, e.messageIF);
  }
  u.sendMessage("⚙AI Is Drawing...\n\n✍️Content: " + o + "\n👥 Requested By: " + (await b.getData(e.senderID)).name, e.threadID, e.messageID);
  var r = await k.get(encodeURI("https://text2img.bo090909.repl.co/?prompt=" + o));
  console.log(r);
  for (i = 0; i < 4; i++) {
    var s = r.data.imageURLs[i];
    let a = (await k.get(s, {
      responseType: "stream"
    })).data;
    q.push(a);
  }
  return u.sendMessage({
    body: "Here is your Image" + (await b.getData(e.senderID)).name + "\n⏰ Command Time: " + n + "\n⏱️Processing Time: " + Math.floor((Date.now() - p[0]) / 1000) + " second",
    mentions: [{
      tag: (await b.getData(e.senderID)).name,
      id: e.senderID
    }],
    attachment: q
  }, e.threadID, e.messageID);
};
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ღ••\n– কোনো নেতার পিছনে নয়.!!🤸‍♂️\n– ধর্মের পিছনে দাড়াও জীবন বদলে যাবে.!!🖤🌻\n۵",
             "-!\n__ঈশ্বরের উপর থেকে নিরাশ হওয়া যাবে না!” ঈশ্বর অবশ্যই তোমাকে ক্ষমা করে দিবেন☺️🌻\nশ্রী কৃষ্ণ🙏🏻💙🌸\n-!",
             "- ধর্ম অহংকার করতে শেখায় না!🌸\n\n-  ধর্ম ধর্মের পথে চলতে শেখায়!🕉️🙏🏻🥀",
             "- জীবনে লক্ষ্য স্থির রাখা আবশ্যক!🙏🏻\n _____🤗🥀 - লক্ষ্য হীন জীবন মানুষ কে ভুল পথে চালিত করে  __🌺🥰\n  __হরে কৃষ্ণ।।",
             "┏━━━━ 🕉️ ━━━━┓\n 🖤🕉️স্মার্ট নয় ধার্মিক 🕉️🥰\n 🖤🕉️জীবন সঙ্গি খুঁজুন 🕉️🥰\n┗━━━━ 🕉️ ━━━━┛",
             "ღ࿐– যখন মানুষের জ্বর হয়,😇\n🖤তখন পাপ গুলো ঝড়ে পড়তে থাকে☺️\n– ভগবান শ্রী কৃষ্ণ🙏🏻●───༊༆",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━হরে কৃষ্ণ 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় ঈশ্বরের প্রতি আসক্ত হও🙏🏻-||-🖤🌸✨\n•___🍒🖇️✨___•",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎মাটির নিচে༎_♡❤\n🦋🥀࿐",
             "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের হিন্দু ধর্মই সেরা•❤️\nহরে কৃষ্ণ🌸❤️",
             "🥀😒কেউ পছন্দ না করলে,,,,\n        কি যায় আসে,,🙂\n                😇ঈশ্বর তো,,\n        পছন্দ করেই বানিয়েছে,,♥️🥀\n         🥰  হরে কৃষ্ণ",
             "🌼 এত অহংকার করে লাভ নেই! 🌺 \n  মৃত্যুটা নিশ্চিত,, শুধু সময়টা\n   অ'নিশ্চিত।🖤🙂 ",
             "_🌻••ছিঁড়ে ফেলুন অতীতের\nসকল পাপের\n                 অধ্যায় ।\n_ফিরে আসুন ঈশ্বরের ভালোবাসায়••🖤🥀",
             "_বুকে হাজারো কষ্ট নিয়ে\n                  হরে কৃষ্ণ বলাটা••!☺️\n_ঈশ্বরের প্রতি অগাধ বিশ্বাসের নমুনা❤️🥀",
             "_ঈশ্বরের ভালোবাসা পেতে চাও•••!🤗\n\n_তবে ভগবান শ্রী কৃষ্ণ কে অনুসরণ করো••!🥰   "
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/7LdGnyjQ/images-31.jpg",
  "https://i.postimg.cc/65c81ZDZ/images-30.jpg",
"https://i.postimg.cc/Y0wvTzr6/images-29.jpg",
"https://i.postimg.cc/1Rpnw2BJ/images-28.jpg",
"https://i.postimg.cc/mgrPxDs5/images-27.jpg",
"https://i.postimg.cc/yxXDK3xw/images-26.jpg",
"https://i.postimg.cc/kXqVcsh9/muslim-boy-having-worship-praying-fasting-eid-islamic-culture-mosque-73899-1334.webp",
"https://i.postimg.cc/hGzhj5h8/muslims-reading-from-quran-53876-20958.webp",
"https://i.postimg.cc/x1Fc92jT/blue-mosque-istanbul-1157-8841.webp",
"https://i.postimg.cc/j5y56nHL/muhammad-ali-pasha-cairo-219717-5352.webp",
"https://i.postimg.cc/dVWyHfhr/images-1-21.jpg",
"https://i.postimg.cc/q7MGgn3X/images-1-22.jpg",
"https://i.postimg.cc/sX5CXtSh/images-1-16.jpg",
"https://i.postimg.cc/66Rp2Pwz/images-1-17.jpg",
"https://i.postimg.cc/Qtzh9pY2/images-1-18.jpg",
"https://i.postimg.cc/MGrhdz0R/images-1-19.jpg",
"https://i.postimg.cc/LsMSj9Ts/images-1-20.jpg",
"https://i.postimg.cc/KzNXyttX/images-1-13.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };

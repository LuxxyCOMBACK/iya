require('./config')
const {
	downloadContentFromMessage,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	InteractiveMessage,
	getContentType
} = require('@whiskeysockets/baileys');
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const { exec, spawn, execSync } = require("child_process")
const { uptotelegra } = require('./lib/upload')
const { tiktokSearchVideo, tiktokDownloaderVideo } = require('./lib/tiktok');
const remini = require('./lib/remini');
const { performance } = require('perf_hooks')
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);

const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
// Tambahkan variabel global untuk menyimpan cooldown
const cooldowns = {}; 
const { toAudio, toPTT, toVideo, addExifAvatar } = require('./lib/converter')
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addAfkUser, checkAfkUser, getAfkReason, getAfkTime, getAfkId, getAfkPosition } = require("./lib/afk");

let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let contacts = JSON.parse(fs.readFileSync('./database/contacts.json'));
let afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

if (time2 < "23:59:00") {
    var ucapanWaktu = `Good Night 🌌`
}
if (time2 < "19:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "15:00:00") {
    var ucapanWaktu = `Good Afternoon 🌅`
}
if (time2 < "11:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
};

module.exports = haruka = async (haruka, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa;
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const { 
	CatBox, 
	fileIO, 
	pomfCDN 
} = require('./lib/uploader');
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await haruka.decodeJid(haruka.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const fmen = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "0@s.whatsapp.net"
				} : {})
			},
			message: {
				conversation: `📝 *Pesan Menfess Baru!* ✨`
			}
		};
        const sender = m.sender
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')

        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

// Fungsi untuk mengirim reaksi emoji
const sendReact = async (key, emojiIndex) => {
  const emojis = ['⏳', '✅', '❌']; // Reaksi untuk proses, selesai, dan error
  await haruka.sendMessage(m.chat, {        
    react: {
      text: emojis[emojiIndex], // Menggunakan emoji berdasarkan indeks
      key: key,
    }
  });
};
        const isAfkOn = checkAfkUser(m.sender, afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await haruka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownerNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const AntiLinkgc = m.isGroup ? ntilinkall.includes(m.chat) : false

		async function newReply(teks) {
			const newrep = {
				contextInfo: {
					forwardingScore: 1,
					isForwarded: true,
					forwardedNewsletterMessageInfo: {
						newsletterName: saluranName,
						newsletterJid: saluran,
					},
					externalAdReply: {
						showAdAttribution: true,
						title: ucapanWaktu,
						body: botName,
						thumbnailUrl: thumbUrl,
						sourceUrl: website
					}
				},
				text: teks
			};
			return haruka.sendMessage(m.chat, newrep, {
				quoted: m,
			});
		}
		const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        if (!haruka.public) {
            if (!isCreator && !m.key.fromMe) return
        }

        if (autoread) {
            haruka.readMessages([m.key])
        }

        if (autotype) {
            haruka.sendPresenceUpdate('composing', m.chat)
        }

        if (autovn) {
            haruka.sendPresenceUpdate('recording', m.chat)
        }

        if (autobio) {
    haruka.updateProfileStatus(`⚡ Online selama: ${runtime(process.uptime())} ⏳`).catch(_ => _);
}
        
        haruka.sendPresenceUpdate('available', m.chat)

        if (m.message && m.isGroup) {
            console.log(chalk.redBright(`\n\nGroup Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.redBright(`\n\nPrivate Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        };
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (checkAfkUser(ment, afk)) {
                    let getId2 = getAfkId(ment, afk)
                    let getReason2 = getAfkReason(getId2, afk)
                    let getTimee = Date.now() - getAfkTime(getId2, afk)
                    let heheh2 = ms(getTimee)
                    newReply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }

            if (checkAfkUser(m.sender, afk)) {
                let getId = getAfkId(m.sender, afk)
                let getReason = getAfkReason(getId, afk)
                let getTime = Date.now() - getAfkTime(getId, afk)
                let heheh = ms(getTime)
                afk.splice(getAfkPosition(m.sender, afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(afk))
                haruka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }

        if (AntiLinkgc) {
            if (budy.includes("https://chat.whatsapp.com")){
                if (!isBotAdmins) return
                if (isAdmins) return
                if (m.key.fromMe) return
                if (isCreator) return
                await haruka.sendMessage(m.chat,
                    {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                    haruka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }

		if (m.mtype === "interactiveResponseMessage") {
			let msg = m.message[m.mtype]|| m.msg
			if (msg.nativeFlowResponseMessage&& !m.isBot) { 
				let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
				if (id) {
					let emit_msg = { 
						key : { ...m.key },
						message: { extendedTextMessage : { text : id } },
						pushName : m.pushName,
						messageTimestamp: m.messageTimestamp || 754785898978
					}
					return haruka.ev.emit("messages.upsert" , {messages : [ emit_msg ], type : "notify"})
				}
			}
		}

switch (command) {
case 'antilinkgc': {

    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    if (args[0] === "on") {
        if (AntiLinkgc) return newReply('⚠️ Fitur antilinkgc sudah aktif sebelumnya, kak!');
        
        ntilinkall.push(m.chat);
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntilinkall));
        newReply('✅ Yeay! Fitur antilinkgc berhasil diaktifkan di grup ini, kak!');

        let groupe = await haruka.groupMetadata(m.chat);
        let members = groupe['participants'];
        let mems = [];
        
        members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
        });
        
        haruka.sendMessage(
            m.chat, 
            { 
                text: `🚨 *Peringatan!* 🚨\n\nHalo semuanya! Mulai sekarang, jangan kirim link sembarangan ya, kecuali kakak adalah admin. Kalau melanggar, bisa langsung dikeluarkan dari grup. Terima kasih! 😊`,
                contextInfo: { mentionedJid: mems }
            }, 
            { quoted: m }
        );
        
    } else if (args[0] === "off") {
        if (!AntiLinkgc) return newReply('⚠️ Fitur antilinkgc sudah nonaktif sebelumnya, kak!');
        
        let off = ntilinkall.indexOf(m.chat);
        ntilinkall.splice(off, 1);
        fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntilinkall));
        newReply('✅ Fitur antilinkgc berhasil dinonaktifkan di grup ini, kak!');
        
    } else {
        await newReply(`🤔 Hmm... Kakak lupa pilih opsi ya? Coba gini:\n\n• *${prefix + command} on* — untuk mengaktifkan antilinkgc.\n• *${prefix + command} off* — untuk mematikan antilinkgc.\n\nPilih salah satu ya, kak! ✨`);
    }
}
break;

case 'deletesession':
case 'delsession':
case 'clearsession': {
    if (!isCreator) return newReply(mess.owner);

    fs.readdir("./TEAMTH", async function(err, files) {
        if (err) {
            console.log('❌ Gagal memindai folder sesi: ' + err);
            return newReply(`⚠️ Uh-oh, ada kesalahan saat memindai folder sesi:\n${err}`);
        }

        let filteredArray = await files.filter(item => 
            item.startsWith("pre-key") ||
            item.startsWith("sender-key") || 
            item.startsWith("session-") || 
            item.startsWith("app-state")
        );

        console.log(`📂 Ditemukan ${filteredArray.length} file sampah.`);
        let teks = `🗑️ Ditemukan *${filteredArray.length}* file sampah di folder sesi:\n\n`;
        
        if (filteredArray.length == 0) return newReply(teks + '✨ Tidak ada file sampah yang perlu dihapus, kak!');
        
        filteredArray.map(function(e, i) {
            teks += `${i + 1}. ${e}\n`;
        });
        
        newReply(teks);
        await sleep(2000);
        newReply('🧹 Sedang membersihkan file sampah...');
        
        await filteredArray.forEach(function(file) {
            fs.unlinkSync(`./TEAMTH/${file}`);
        });
        
        await sleep(2000);
        newReply('✅ Semua file sampah berhasil dihapus, kak! Folder sesi sekarang bersih! 🎉');
    });
}
break;

case 'join': {
  try {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('⚠️ Kak, jangan lupa masukkan tautan grup!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('❌ Tautan tidak valid, kak!');
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Mengirim reaksi proses
    await sendReact(m.key, 0); // Reaksi proses ⏳

    newReply('⏳ Tunggu sebentar ya, aku lagi coba masuk ke grup...');

    let result = args[0].split('https://chat.whatsapp.com/')[1];
    
    await haruka.groupAcceptInvite(result)
      .then((res) => {
        newReply('✅ Berhasil bergabung ke grup! 🎉');
        // Mengubah reaksi menjadi selesai
        sendReact(m.key, 1); // Reaksi selesai ✅
      })
      .catch((err) => {
        newReply(`❌ Gagal bergabung: ${err}`);
        // Mengubah reaksi menjadi error
        sendReact(m.key, 2); // Reaksi error ❌
      });
  } catch (err) {
    newReply('⚠️ Ada kesalahan saat mencoba bergabung ke grup, kak!');
    // Mengubah reaksi menjadi error
    sendReact(m.key, 2); // Reaksi error ❌
  }
}
break;

case 'session': {
    if (!isCreator) return newReply(mess.owner);

    newReply('⏳ Tunggu sebentar ya, aku lagi menyiapkan file sesi...');
    let sesi = await fs.readFileSync('./TEAMTH/creds.json');

    haruka.sendMessage(m.chat, {
        document: sesi,
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, {
        quoted: m
    });
}
break;

case 'shutdown': {
    if (!isCreator) return newReply(mess.owner);

    newReply('😴 Sampai jumpa, kak... Aku mau istirahat dulu ya...');
    await sleep(3000);
    process.exit();
}
break;

case 'restart': {
    if (!isCreator) return newReply(mess.owner);

    newReply('🔄 Sedang merestart sistem, tunggu sebentar ya...');
    exec('pm2 restart all');
}
break;

case 'autoread': {
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    const userAutoRead = m.sender;
    const nowAutoRead = Date.now();

    if (cooldowns[userAutoRead] && nowAutoRead - cooldowns[userAutoRead] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowAutoRead - cooldowns[userAutoRead])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userAutoRead] = nowAutoRead; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (q === 'on') {
        autoread = true;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoRead* berhasil diaktifkan! Sekarang semua pesan akan otomatis terbaca. 👀✨');
    } else if (q === 'off') {
        autoread = false;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoRead* berhasil dimatikan! Pesan tidak akan otomatis terbaca lagi. 🚫👀');
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`⚠️ Opsi tidak valid! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;

			case 'hidetag':
case 'h': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    const userHidetag = m.sender;
    const nowHidetag = Date.now();

    if (cooldowns[userHidetag] && nowHidetag - cooldowns[userHidetag] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowHidetag - cooldowns[userHidetag])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userHidetag] = nowHidetag; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        await haruka.sendMessage(m.chat, {
            text: q ? q : '',
            mentions: participants.map(a => a.id)
        });

        await sendReact(m.key, 1); // Emoji sukses "✅"
        newReply('✅ *Hidetag berhasil!* Semua anggota grup telah ditandai.');
    } catch (error) {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`⚠️ *Gagal mengirim hidetag!*\nError: ${error.message}`);
    }
}
break;

case 'autotype': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    if (q === 'on') {
        autotype = true;
        newReply('✅ Fitur *autotype* berhasil diaktifkan, kak! Sekarang bakal kelihatan kayak lagi ngetik otomatis. ⌨️✨');
    } else if (q === 'off') {
        autotype = false;
        newReply('✅ Fitur *autotype* berhasil dimatikan, kak! Nggak ada efek ngetik otomatis lagi. 🚫⌨️');
    } else {
        newReply(`⚠️ Opsi tidak valid, kak! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;

case 'autovn': {
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    const userAutoVn = m.sender;
    const nowAutoVn = Date.now();

    if (cooldowns[userAutoVn] && nowAutoVn - cooldowns[userAutoVn] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowAutoVn - cooldowns[userAutoVn])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userAutoVn] = nowAutoVn; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (q === 'on') {
        autovn = true;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoVN* berhasil diaktifkan! Sekarang bakal kelihatan kayak lagi ngerekam otomatis. 🎙️✨');
    } else if (q === 'off') {
        autovn = false;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoVN* berhasil dimatikan! Nggak ada efek ngerekam otomatis lagi. 🚫🎙️');
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`⚠️ Opsi tidak valid! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;
        
case "listpremium":
case "listprem": {
  if (!isCreator) return newReply(mess.owner);
  const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
  // Menambahkan reaksi proses
  await sendReact(m.key, 0); // Reaksi proses ⏳

  if (premium.length < 1) {
    await newReply("Tidak ada user premium");
    await sendReact(m.key, 2); // Reaksi error ❌
    return;
  }

  let teks = `\n *#- List all user premium*\n`;
  for (let i of premium) {
    teks += `\n* ${i.split("@")[0]}`;
  }
  teks += `\n*Total : ${premium.length}*`;

  await haruka.sendMessage(m.chat, { text: teks, mentions: premium }, { quoted: m });

  // Mengubah reaksi menjadi selesai
  await sendReact(m.key, 1); // Reaksi selesai ✅
}
    break;
    case 'ambilpremium': {
  if (!isCreator) return newReply(mess.owner);
  
  await newReply("Sabar Mas, Lagi ambil file premium!!!");

  const fs = require('fs');

  // Tentukan path ke file premium.json yang ingin dikirim
  const premiumFilePath = './database/premium.json';
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
  // Mengirim reaksi proses
  await sendReact(m.key, 0); // Emoji proses ⏳

  try {
    // Memastikan file premium.json ada
    if (fs.existsSync(premiumFilePath)) {
      // Mengirimkan file premium.json
      await haruka.sendMessage(
        m.chat,
        {
          document: fs.readFileSync(premiumFilePath),
          mimetype: "application/json",
          fileName: "premium.json",
        },
        { quoted: m }
      );
      
      // Mengubah reaksi menjadi selesai
      await sendReact(m.key, 1); // Emoji selesai ✅
    } else {
      await newReply("File premium.json tidak ditemukan.");
      await sendReact(m.key, 2); // Emoji error ❌
    }
  } catch (error) {
    await newReply("Terjadi kesalahan saat mengirimkan file.");
    await sendReact(m.key, 2); // Emoji error ❌
  }
}
  break;
case 'backup': {
  try {
    if (!isCreator) return newReply(mess.owner);
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Mengirim reaksi "proses"
    await sendReact(m.key, 0); // Emoji proses "⏳"

    await newReply("Harap tunggu sebentar, sedang melakukan backup!");

    const { execSync } = require("child_process");
    const fs = require("fs");

    // Mendapatkan daftar file/folder yang akan di-backup
    const ls = execSync("ls")
      .toString()
      .split("\n")
      .filter(
        (file) =>
          ![
            "node_modules", // Folder yang tidak perlu di-backup
            "temp",
            "package-lock.json",
            "npm",
            "",
            "TEAMTH",
          ].includes(file)
      );

    if (ls.length === 0) {
      return newReply("Tidak ada file atau folder untuk di-backup.");
    }

    // Escaping nama file/folder untuk mencegah error
    const escapedFiles = ls.map((file) => `"${file}"`).join(" ");

    // Membuat file ZIP
    execSync(`zip -r Myscript.zip ${escapedFiles}`);

    // Mengirimkan file ZIP melalui pesan
    await haruka.sendMessage(
      m.chat,
      {
        document: fs.readFileSync("./Myscript.zip"),
        mimetype: "application/zip",
        fileName: "Myscript.zip",
      },
      { quoted: m }
    );

    // Menghapus file ZIP setelah dikirim
    fs.unlinkSync("./Myscript.zip");

    // Mengirim reaksi "selesai"
    await sendReact(m.key, 1); // Emoji selesai "✅"

    await newReply("done ya bang");
  } catch (error) {
    console.error(error);
    await newReply("⚠️ Terjadi kesalahan saat melakukan backup.");

    // Mengirim reaksi "error"
    await sendReact(m.key, 2); // Emoji error "❌"
  }
}
        break      
        
case 'autobio': {
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    const userAutoBio = m.sender;
    const nowAutoBio = Date.now();

    if (cooldowns[userAutoBio] && nowAutoBio - cooldowns[userAutoBio] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowAutoBio - cooldowns[userAutoBio])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userAutoBio] = nowAutoBio; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (q === 'on') {
        autobio = true;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoBio* berhasil diaktifkan, kak! Bio akan diperbarui secara otomatis. 📛✨');
    } else if (q === 'off') {
        autobio = false;
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Fitur *AutoBio* berhasil dimatikan, kak! Bio nggak akan diperbarui otomatis lagi. 🚫📛');
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`⚠️ Opsi tidak valid! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;

			case 'statustext':
case 'upswtext':
case 'upswteks': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply('⚠️ Kak, teksnya mana?');

    const userStatusText = m.sender;
    const nowStatusText = Date.now();

    if (cooldowns[userStatusText] && nowStatusText - cooldowns[userStatusText] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowStatusText - cooldowns[userStatusText])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userStatusText] = nowStatusText; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        await haruka.sendMessage('status@broadcast', { 
            text: q 
        }, { 
            backgroundColor: '#FF000000', 
            font: 3, 
            statusJidList: Object.keys(global.db.data.users) 
        });

        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply('✅ Sukses kirim status teks!');
    } catch (error) {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`⚠️ Terjadi kesalahan saat mengirim status teks: ${error.message}`);
    }
}
			break;

			case 'statusvideo':
case 'upswvideo': {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    const userStatusVideo = m.sender;
    const nowStatusVideo = Date.now();

    if (cooldowns[userStatusVideo] && nowStatusVideo - cooldowns[userStatusVideo] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowStatusVideo - cooldowns[userStatusVideo])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userStatusVideo] = nowStatusVideo; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (/video/.test(mime)) {
        try {
            // Unduh video dari pesan yang di-newReply
            var videosw = await haruka.downloadAndSaveMediaMessage(quoted);

            // Dapatkan informasi default untuk caption
            let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
            let mediaType = mime || 'Tidak diketahui';
            let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
            let sender = `${m.pushName || ownerName}`;

            // Buat caption default
            let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
                `🎥 *Tipe Media:* ${mediaType}\n` +
                `⏰ *Waktu Dikirim:* ${sendTime}\n` +
                `👤 *Dikirim oleh:* ${sender}`;

            // Kirim video ke status WhatsApp
            await haruka.sendMessage('status@broadcast', {
                video: { url: videosw },
                caption: q ? q : defaultCaption
            }, {
                statusJidList: Object.keys(global.db.data.users)
            });

            await sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
        } catch (error) {
            await sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Terjadi kesalahan saat mengirim video: ${error.message}`);
        }
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('⚠️ Tolong newReply ke video dulu ya, Kak! 🎥');
    }
}
			break;

			case 'statusimg':
case 'statusimage':
case 'upswimg': {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    const userStatusImg = m.sender;
    const nowStatusImg = Date.now();

    if (cooldowns[userStatusImg] && nowStatusImg - cooldowns[userStatusImg] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowStatusImg - cooldowns[userStatusImg])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userStatusImg] = nowStatusImg; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (/image/.test(mime)) {
        try {
            // Unduh gambar dari pesan yang di-newReply
            var imagesw = await haruka.downloadAndSaveMediaMessage(quoted);

            // Dapatkan informasi default untuk caption
            let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Tidak diketahui';
            let mediaType = mime || 'Tidak diketahui';
            let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
            let sender = `${m.pushName || ownerName}`;

            // Buat caption default
            let defaultCaption = `📁 *Ukuran File:* ${fileSize}\n` +
                `🖼️ *Tipe Media:* ${mediaType}\n` +
                `⏰ *Waktu Dikirim:* ${sendTime}\n` +
                `👤 *Dikirim oleh:* ${sender}`;

            // Kirim gambar ke status WhatsApp
            await haruka.sendMessage('status@broadcast', {
                image: { url: imagesw },
                caption: q ? q : defaultCaption
            }, {
                statusJidList: Object.keys(global.db.data.users)
            });

            await sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
        } catch (error) {
            await sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Terjadi kesalahan saat mengirim gambar: ${error.message}`);
        }
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('⚠️ Tolong newReply ke gambar dulu ya, Kak! 🖼️');
    }
}
			break;

			case 'statusaudio':
case 'upswaudio': {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    const userStatusAudio = m.sender;
    const nowStatusAudio = Date.now();

    if (cooldowns[userStatusAudio] && nowStatusAudio - cooldowns[userStatusAudio] < 5000) { // 5 detik cooldown
        const remainingTime = ((5000 - (nowStatusAudio - cooldowns[userStatusAudio])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userStatusAudio] = nowStatusAudio; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (/audio/.test(mime)) {
        try {
            // Unduh audio dari pesan yang di-newReply
            var audiosw = await haruka.downloadAndSaveMediaMessage(quoted);

            // Kirim audio ke status WhatsApp
            await haruka.sendMessage('status@broadcast', {
                audio: { url: audiosw },
                mimetype: 'audio/mp4',
                ptt: true
            }, {
                backgroundColor: '#FF000000',
                statusJidList: Object.keys(global.db.data.users)
            });

            await sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Sukses kirim status audio!');
        } catch (error) {
            await sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Terjadi kesalahan saat mengirim audio: ${error.message}`);
        }
    } else {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('⚠️ Tolong newReply audio dulu, ya!');
    }
}
			break;

			case 'self':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = false;
				newReply(`🤖 Bot sekarang masuk Self Mode! Cuma pemilik bot yang bisa make, yang lain santai dulu ya! 🚫`);
			break;

			case 'public':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = true;
				newReply(`🌍 Bot lagi aktif di Public Mode! Semua orang bisa gunakan, ayo coba aja! 🚀`);
			break;

			case 'setexif':
			case 'setwm':
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Contoh: ${prefix + command} packname|author`);
				global.packName = text.split("|")[0];
				global.author = text.split("|")[1];
				newReply(`Yeay! Exif berhasil diubah! 🎉\n\n• Packname: ${global.packname}\n• Author: ${global.author}`);
			break;

			case 'ttslide':
case 'tiktokfoto':
case 'tiktokmp4':
case 'downloadvttiktok':
case 'ttnowm':
case 'tiktoknowm':
case 'tiktok': {
  if (!isPremium) return m.reply(mess.premium);
  
  if (!text) return newReply(
    `⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar TH-ai bisa bantu! 🎥✨`
  );
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
  // Mengirim reaksi "proses"
  await sendReact(m.key, 0); // Emoji proses ⏳

  try {
    let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
    let item = 0;

    for (let imgs of anu.data) {
      if (imgs.type == "nowatermark") {
        await haruka.sendMessage(
          m.chat,
          {
            video: { url: imgs.url },
            caption: `🎥 *Video Info* :\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}`
          },
          { quoted: m }
        );
      }

      if (imgs.type == "photo") {
        if (item == 0) {
          await haruka.sendMessage(
            m.chat,
            {
              image: { url: imgs.url },
              caption: `🖼️ *Photo Info* :\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistik Info* :\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info* :\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info* :\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption* :\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Sisa foto dikirim ke private chat_\n" : "\n" : "\n"}`
            },
            { quoted: m }
          );
        } else {
          await haruka.sendMessage(
            m.sender,
            {
              image: { url: imgs.url }
            },
            { quoted: m }
          );
        }
        item += 1;
        await sleep(2000);
      }
    }

    // Mengirim reaksi "selesai"
    await sendReact(m.key, 1); // Emoji selesai ✅

  } catch (err) {
    console.log(err);
    // Mengirim reaksi "error" jika gagal
    await sendReact(m.key, 2); // Emoji error ❌
    newReply('⚠️ Gagal mengambil data dari TikTok. Pastikan URL valid atau coba lagi nanti.');
  }
}
			break ;
			
			case 'setppbot': {
				if (!isCreator) return newReply(mess.OnlyOwner)
				if (!quoted) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				await haruka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break
	
			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return newReply(mess.owner);
				await haruka.removeProfilePicture(haruka.user.id)
				newReply(mess.done)
			}
			break;

case 'block': {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    if (!text) return newReply('Contoh: *block +62-××××*');

    const userBlock = m.sender;
    const nowBlock = Date.now();

    // Cooldown 5 detik
    if (cooldowns[userBlock] && nowBlock - cooldowns[userBlock] < 5000) {
        const remainingTime = ((5000 - (nowBlock - cooldowns[userBlock])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userBlock] = nowBlock; // Set cooldown user

    // Tentukan target blokir
    let blockTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Coba lakukan blokir
    await haruka.updateBlockStatus(blockTarget, 'block')
        .then(() => {
            sendReact(m.key, 1); // Emoji selesai "✅"
            newReply(`✅ Pengguna berhasil diblokir, kak! 🚫`);
        })
        .catch((err) => {
            sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Gagal memblokir pengguna: ${err}`);
        });
}
break;

case 'unblock': {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    if (!text) return newReply('Contoh: *unblock +62-××××*');

    const userUnblock = m.sender;
    const nowUnblock = Date.now();

    // Cooldown 5 detik
    if (cooldowns[userUnblock] && nowUnblock - cooldowns[userUnblock] < 5000) {
        const remainingTime = ((5000 - (nowUnblock - cooldowns[userUnblock])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userUnblock] = nowUnblock; // Set cooldown user

    // Tentukan target unblock
    let unblockTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Coba lakukan unblock
    await haruka.updateBlockStatus(unblockTarget, 'unblock')
        .then(() => {
            sendReact(m.key, 1); // Emoji selesai "✅"
            newReply(`✅ Pengguna berhasil di-unblock, kak! 🟢`);
        })
        .catch((err) => {
            sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Gagal membuka blokir pengguna: ${err}`);
        });
}
break;
case "keluargroupid": {
    if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

    // Ambil ID grup dari argumen perintah
    let groupId = args[0]; // Misalkan ID grup diberikan sebagai argumen pertama
    if (!groupId) return m.reply("Harap masukkan ID grup yang valid.");

    // Kirim pesan pamitan dengan emoji dadah
    await m.reply('Selamat tinggal, aku diperintahkan keluar dari grup ini. 👋');

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Membuat bot keluar dari grup dengan ID yang diberikan
    try {
        await haruka.groupLeave(groupId); // Pastikan method ini benar sesuai API bot yang kamu gunakan
        await m.reply(`Berhasil keluar dari grup dengan ID: ${groupId}`);
        
        // Mengubah reaksi menjadi selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"
    } catch (error) {
        console.log(error);
        
        // Mengubah reaksi menjadi error
        await sendReact(m.key, 2); // Emoji error "❌"
        
        return m.reply("Gagal keluar dari grup. Pastikan ID yang dimasukkan benar.");
    }
}
break;

			case 'ttaudio':
case 'tiktokmp3':
case 'ttmp3':
case 'tiktokaudio': {
    if (!isPremium) return m.reply(mess.premium);

    if (!text) return newReply(
        `⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar TH-ai bisa bantu! 🎥✨`
    );

    const userId = m.sender;
    const now = Date.now();

    // Cek cooldown
    if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
        const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userId] = now; // Set cooldown user

    // Mengirim reaksi pertama 🕒 saat memulai proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        let anu = await tiktokDownloaderVideo(text); // Menggunakan scraper lokal
        let audio = anu.music_info.url;

        // Kirim informasi audio terlebih dahulu
        await haruka.sendMessage(
            m.chat,
            {
                text: `🎵 *TikTok Audio*\n\n` +
                `🎼 *Title:* ${anu.music_info.title || '-'}\n` +
                `🎤 *Author:* ${anu.music_info.author || '-'}\n` +
                `💿 *Album:* ${anu.music_info.album || '-'}\n\n` +
                `🔗 *Source:* ${text}`
            },
            { quoted: m }
        );

        // Kirim audio sebagai file MP3
        await haruka.sendMessage(
            m.chat,
            {
                audio: { url: audio },
                mimetype: 'audio/mpeg',
                fileName: `${anu.music_info.title || 'audio'}.mp3`
            },
            { quoted: m }
        );

        // Mengubah reaksi menjadi selesai ✅ setelah proses selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (error) {
        console.error(error);
        // Mengubah reaksi menjadi error ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!');
    }
}
break;
case 'getpp': {
if (!isPremium) return m.reply(mess.premium)
    const userId = m.sender;
    const now = Date.now();

    // Cek cooldown (10 detik)
    if (cooldowns[userId] && now - cooldowns[userId] < 10000) {
        const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
        return newReply(`⏳ Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userId] = now; // Set waktu terakhir penggunaan perintah

    try {
        // Kirim reaksi "🕒" saat memproses
        await sendReact(m.key, 0);

        let target;
        if (m.mentionedJid.length > 0) {
            target = m.mentionedJid[0]; // Jika ada tag, gunakan JID tag tersebut
        } else if (text) {
            // Format nomor: hapus semua kecuali angka dan "+"
            let formattedNumber = text.replace(/[^0-9+]/g, '');
            if (!formattedNumber.startsWith('+')) formattedNumber = `+${formattedNumber}`;
            target = formattedNumber.replace(/\+/g, '') + '@s.whatsapp.net'; // Ubah ke format JID
        } else {
            target = m.sender; // Jika tidak ada input, ambil PP sendiri
        }

        // Cek apakah nomor terdaftar di WhatsApp
        const [result] = await haruka.onWhatsApp(target);
        if (!result || !result.exists) {
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`⚠️ Nomor *${text}* tidak ditemukan di WhatsApp!`);
        }

        // Ambil foto profil pengguna
        let ppUrl;
        try {
            ppUrl = await haruka.profilePictureUrl(target, 'image');
        } catch {
            return newReply(`⚠️ Nomor *${text}* tidak memiliki foto profil.`);
        }

        // Kirim foto profil
        await haruka.sendMessage(m.chat, { 
            image: { url: ppUrl }, 
            caption: `📸 Foto profil @${target.split('@')[0]}`, 
            mentions: [target] 
        });

        // Ubah reaksi menjadi "✅" setelah sukses
        await sendReact(m.key, 1);

    } catch (err) {
        console.error(err);
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('⚠️ Terjadi kesalahan saat mengambil foto profil.');
    }
}
break;
case 'tiktoksearch':
case 'carivideotiktok':
case 'ttsearch': {
    if (!isPremium) return m.reply(mess.premium)
    if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Luxxy bisa bantu cari yang kakak mau! 🔍💬`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    try {
        // Menambahkan reaksi untuk proses
        await sendReact(m.key, 0); // Emoji proses "🕒"

        let search = await tiktokSearchVideo(text);
        await newReply(mess.wait);
        newReply(mess.done);

        let teks = `🎥 *${search.videos[0].title}*\n\n` +
        `🆔 *Video ID* : ${search.videos[0].video_id}\n` +
        `👤 *Username* : ${search.videos[0].author.unique_id}\n` +
        `🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
        `⏳ *Duration* : ${search.videos[0].duration} detik\n` +
        `❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
        `💬 *Comment* : ${search.videos[0].comment_count}\n` +
        `🔄 *Share* : ${search.videos[0].share_count}\n\n` +
        `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

        let list = '';
        let no = 1;
        for (let i of search.videos) {
            list += `\n${no++}. 🎵 *${i.title}*\n` +
            `⏳ Duration: ${i.duration} detik\n` +
            `❤️ Likes: ${i.digg_count}\n` +
            `💬 Comments: ${i.comment_count}\n` +
            `🔄 Shares: ${i.share_count}\n` +
            `🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
        }

        await haruka.sendMessage(
            m.chat,
            {
                video: { url: `https://tikwm.com${search.videos[0].play}` },
                caption: teks
            },
            { quoted: m }
        );

        if (search.videos.length > 1) {
            await haruka.sendMessage(
                m.chat,
                {
                    text: `📚 *Daftar Video Lainnya:*\n${list}`
                },
                { quoted: m }
            );
        }

        // Mengubah reaksi menjadi selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"
    } catch (error) {
        console.log(error);
        
        // Mengubah reaksi menjadi error
        await sendReact(m.key, 2); // Emoji error "❌"
        
        newReply("Ups, terjadi kesalahan saat mencari video TikTok! 😅");
    }
}
			break

			case 'delete':
			case 'd':
			case 'del': {
			if (!isCreator) return newReply(mess.owner);
				if (!m.quoted) return newReply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await haruka.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
				newReply('✅ Pesan berhasil dihapus, kak! 🗑️✨');
			}
break;

case 'kick': {
    if (!m.isGroup) return newReply(mess.group); // Cek apakah ini grup
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin); // Cek apakah pengguna adalah admin atau owner
    if (!isBotAdmins) return newReply(mess.botAdmin); // Cek apakah bot adalah admin

    let target = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Mengeluarkan target dari grup
    await haruka.groupParticipantsUpdate(m.chat, [target], 'remove')
        .then(() => {
            sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Pengguna berhasil dikeluarkan dari grup. 🚪👋');
        })
        .catch((err) => {
            sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Gagal mengeluarkan pengguna: ${err}`);
        });
}
break 

case "upteks":
case "chat":{
if (!isCreator) return newReply(mess.owner);
 if (!text) return newReply("contoh\n.chat selamat siang semuanya")
/*var arr = [
"🌑",
"🌘",
"🌗",
"🌖",
"🌕",
"🌖",
"🌗",
"🌘",
"🐣"
]
let load = await haruka.sendMessage(from, {text: '🐣'},{quoted:fcall})
for (let i = 0; i < arr.length; i++) {
await sleep(100)
await haruka.sendMessage(from, {text: arr[i], edit: load.key },{quoted:fcall});
}*/

 const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await haruka.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
haruka.sendMessage(`${global.idch}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: haruka.decodeJid(haruka.user.id)  },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari: ${pushname}`,
 body: `fRoM: ${m.isGroup ? `${groupMetadata.subject}` : !m.isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: 'https://files.catbox.moe/y95cgr.jpg',
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
haruka.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})
 newReply(`sukses mengirim pesan ke channel.`)
 haruka.sendMessage(m.chat, {
 react: {
 text: '🎉',
 key: m.key,
 }})

}
break;
case "cekidch": case "idch": {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await haruka.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return newReply(teks)
}
break;

			case 'tiktoksearch':
case 'carivideotiktok':
case 'ttsearch': {
    if (!isPremium) return m.reply(mess.premium)
    if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Luxxy bisa bantu cari yang kakak mau! 🔍💬`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    try {
        // Menambahkan reaksi untuk proses
        await sendReact(m.key, 0); // Emoji proses "🕒"

        let search = await tiktokSearchVideo(text);
        await newReply(mess.wait);

        let teks = `🎥 *${search.videos[0].title}*\n\n` +
        `🆔 *Video ID* : ${search.videos[0].video_id}\n` +
        `👤 *Username* : ${search.videos[0].author.unique_id}\n` +
        `🏷️ *Nickname* : ${search.videos[0].author.nickname}\n` +
        `⏳ *Duration* : ${search.videos[0].duration} detik\n` +
        `❤️ *VT Like* : ${search.videos[0].digg_count}\n` +
        `💬 *Comment* : ${search.videos[0].comment_count}\n` +
        `🔄 *Share* : ${search.videos[0].share_count}\n\n` +
        `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

        let list = '';
        let no = 1;
        for (let i of search.videos) {
            list += `\n${no++}. 🎵 *${i.title}*\n` +
            `⏳ Duration: ${i.duration} detik\n` +
            `❤️ Likes: ${i.digg_count}\n` +
            `💬 Comments: ${i.comment_count}\n` +
            `🔄 Shares: ${i.share_count}\n` +
            `🔗 Link: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
        }

        await haruka.sendMessage(
            m.chat,
            {
                video: { url: `https://tikwm.com${search.videos[0].play}` },
                caption: teks
            },
            { quoted: m }
        );

        if (search.videos.length > 1) {
            await haruka.sendMessage(
                m.chat,
                {
                    text: `📚 *Daftar Video Lainnya:*\n${list}`
                },
                { quoted: m }
            );
        }

        // Mengubah reaksi menjadi selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"
    } catch (error) {
        console.log(error);
        
        // Mengubah reaksi menjadi error
        await sendReact(m.key, 2); // Emoji error "❌"
        
        newReply("Ups, terjadi kesalahan saat mencari video TikTok! 😅");
    }
}
break;

case 'toimage': 
case 'toimg': {
    if (!isPremium) return m.reply(mess.premium);
    
    if (!quoted) return newReply('Reply Image');
    if (!/webp/.test(mime)) return newReply(`Balas sticker dengan caption *${prefix + command}*`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "⏳"

    let media = await haruka.downloadAndSaveMediaMessage(quoted);
    let ran = await getRandom('.png');
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) {
            console.error(err);
            // Mengubah reaksi menjadi error jika terjadi kesalahan
            return sendReact(m.key, 2); // Emoji error "❌"
        }

        let buffer = fs.readFileSync(ran);
        haruka.sendMessage(m.chat, { image: buffer }, { quoted: m });
        fs.unlinkSync(ran);

        // Mengubah reaksi menjadi selesai
        sendReact(m.key, 1); // Emoji selesai "✅"
    });
}
break;

case 'add': {
    if (!m.isGroup) return newReply(mess.group); // Cek apakah ini grup
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin); // Cek apakah pengguna adalah admin atau owner
    if (!isBotAdmins) return newReply(mess.botAdmin); // Cek apakah bot adalah admin

    let target = m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Menambahkan target ke grup
    await haruka.groupParticipantsUpdate(m.chat, [target], 'add')
        .then(() => {
            sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Pengguna berhasil ditambahkan ke grup! 🎉👤');
        })
        .catch((err) => {
            sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Gagal menambahkan pengguna: ${err}`);
        });
}
break;

case 'promote': {
    if (!m.isGroup) return newReply(mess.group); // Cek apakah ini grup
    if (!isCreator && !isAdmins) return newReply(mess.admin); // Cek apakah pengguna adalah admin atau owner
    if (!isBotAdmins) return newReply(mess.botAdmin); // Cek apakah bot adalah admin

    // Menentukan target untuk dipromosikan
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    // Jika tidak ada target yang valid
    if (!users) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`);

    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    // Melakukan promosi
    await haruka.groupParticipantsUpdate(m.chat, [users], 'promote')
        .then(() => {
            sendReact(m.key, 1); // Emoji selesai "✅"
            newReply('✅ Pengguna berhasil dipromosikan menjadi admin! 🎉👑');
        })
        .catch((err) => {
            sendReact(m.key, 2); // Emoji error "❌"
            newReply(`⚠️ Gagal mempromosikan pengguna: ${err}`);
        });
}
break ;

			case 'carivideoyt': 
case 'ytsearch': {
    if (!isPremium) return m.reply(mess.premium);
    if (!text) return newReply(`Example : ${prefix + command} story wa anime`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"
    
    await newReply(mess.wait);
    try {
        let search = await yts(text);
        let teks = 'YouTube Search\n\nResult From ' + text + '\n\n';
        let no = 1;
        for (let i of search.all) {
            teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n─────────────────\n\n`;
        }
        
        // Mengirim hasil pencarian dengan gambar thumbnail
        await haruka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m });
        
        // Mengubah reaksi menjadi selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"
    } catch (err) {
        console.error(err);
        
        // Mengubah reaksi menjadi error
        await sendReact(m.key, 2); // Emoji error "❌"
        
        newReply("Terjadi kesalahan saat mencari video! 😅");
    }
}
break;

			case 'tourl': {
    if (!isPremium) return m.reply(mess.premium);
    
    if (!mime) return newReply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Menambahkan reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"
    
    try {
        let media = await haruka.downloadAndSaveMediaMessage(quoted);
        if (/image|video/.test(mime)) {
            let response = await CatBox(media);
            let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
            let uploadDate = new Date().toLocaleString();
            let uploader = m.pushName;
            let caption = `🔗 *Link Media* : ${response}\n📅 *Tanggal Upload* : ${uploadDate}\n📂 *Ukuran File* : ${fileSize} KB\n👤 *Pengunggah* : ${uploader}`.trim();
            newReply(caption);
        } else if (!/image/.test(mime)) {
            let response = await pomfCDN(media);
            newReply(response);
        } else {
            newReply(`Jenis media tidak didukung!`);
        }
        await fs.unlinkSync(media);
        
        // Mengubah reaksi menjadi selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"
    } catch (err) {
        console.log(err);
        newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
        
        // Mengubah reaksi menjadi gagal
        await sendReact(m.key, 2); // Emoji error "❌"
    }
}
			break

//================================================================================

case "rvo":
case "liatdong": {
    if (!m.isGroup) return newReply(mess.group); // Check if the command is used in a group
    if (!isPremium) return m.reply(mess.premium); // Check if the user is premium

    if (!m.quoted) return newReply("⚠️ Harap balas pesan dengan media yang ingin dilihat!");

    let msg = m.quoted.message; // Get the quoted message
    let type = Object.keys(msg)[0]; // Determine the type of message (image, video, audio)
    
    if (!msg[type].viewOnce) return newReply("Pesan ini bukan *view once*!");

    let media = await downloadContentFromMessage(msg[type], 
        type === 'imageMessage' ? 'image' : type === 'videoMessage' ? 'video' : 'audio');
    let buffer = Buffer.from([]);

    // Concatenate chunks of media content
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    // Handle different media types
    if (/video/.test(type)) {
        return haruka.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m});
    } else if (/image/.test(type)) {
        return haruka.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m});
    } else if (/audio/.test(type)) {
        return haruka.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m});
    } 
}
break;
case 'downloadfile':{
    if (!isCreator) return newReply('Hanya pemilik bot yang dapat menggunakan perintah ini!');
    if (!text) return newReply('Harap masukkan nama file yang ingin diunduh!');

    const fs = require('fs');
    const path = `./${text}`;
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    try {
        // Kirim reaksi "🕒" saat memulai proses
        await sendReact(m.key, 0); // Emoji proses "🕒"

        newReply('⏳ Proses mengunduh file...');
        if (fs.existsSync(path)) {
            // Kirim file jika ditemukan dan reaksi selesai "✅"
            await haruka.sendMessage(m.chat, { 
                document: { url: path }, 
                mimetype: 'application/octet-stream', 
                fileName: text 
            }, { quoted: m });

            await sendReact(m.key, 1); // Emoji selesai "✅"
        } else {
            // Kirim reaksi error "❌" jika file tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            newReply('File tidak ditemukan di direktori bot.');
        }
    } catch (error) {
        console.error(error);
        // Kirim reaksi error "❌" jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('Terjadi kesalahan saat mencoba mengakses file.');
    }
};
break;
case 'pay': {
    if (!isCreator) return newReply(mess.owner);
    
    try {
        // Mengirim reaksi "proses"
        await sendReact(m.key, 0); // Emoji proses "🕐"
        
        let chatId = m.key.remoteJid;  
        let imagePath = './Media/qris.png'; // Path gambar QRIS
        let caption = '*ꜱᴄᴀɴ & ʙᴀyᴀʀ ᴅᴀʟᴀᴍ ʜɪᴛᴜɴɢᴀɴ ᴅᴇᴛɪᴋ!*';

        // Mengirim gambar QRIS
        haruka.sendMessage(chatId, { image: fs.readFileSync(imagePath), caption: caption });

        // Mengirim reaksi "selesai" setelah gambar QRIS dikirim
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (err) {
        console.error(err);
        await newReply("⚠️ Terjadi kesalahan saat melakukan pembayaran.");

        // Mengirim reaksi "error"
        await sendReact(m.key, 2); // Emoji error "❌"
    }
};
break;

case 'demote': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isCreator && !isAdmins) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... kakak kamu demote siapa? 🤔');
    
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    
    if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... kakak mau ${command} siapa? 🤔`);
    
    // Kirim reaksi untuk proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    await haruka.groupParticipantsUpdate(m.chat, [users], 'demote')
        .then((res) => {
            // Setelah sukses, beri umpan balik
            newReply(`✅ Pengguna dengan ID ${users} berhasil di-demote! 🔻`);
            sendReact(m.key, 1); // Emoji selesai "✅"
        })
        .catch((err) => {
            newReply(`⚠️ Gagal melakukan demote pengguna: ${err}`);
            sendReact(m.key, 2); // Emoji error "❌"
        });
}
break;

case 'setnamegc':
case 'setsubject': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!text) return newReply('⚠️ Kak, jangan lupa tulis nama grup barunya!');

    await haruka.groupUpdateSubject(m.chat, text)
        .then(() => newReply(`✅ Nama grup berhasil diubah menjadi *${text}*! 📛✨`))
        .catch((err) => newReply(`⚠️ Gagal mengubah nama grup: ${err}`));
}
break;

case 'setdesc':
case 'setdesk': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!text) return newReply('⚠️ Kak, jangan lupa tulis deskripsi grup barunya!');

    await haruka.groupUpdateDescription(m.chat, text)
        .then(() => newReply('✅ Deskripsi grup berhasil diperbarui! 📛✨'))
        .catch((err) => newReply(`⚠️ Gagal memperbarui deskripsi grup: ${err}`));
}
break;
case 'addprem':
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`Use ${prefix + command} number\nContoh ${prefix + command} 62xxx`);

    let prrkek = args[0].replace(/[^0-9]/g, ''); // Sanitized phone number
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Kirim reaksi proses "🕒"
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (premium.includes(prrkek)) {
        // Kirim reaksi error "❌" jika nomor sudah premium
        await sendReact(m.key, 2); // Emoji error "❌"
        return newReply(`Nomor ${prrkek} sebelumnya sudah premium!`);
    }

    try {
        // Add the number to the premium list
        premium.push(prrkek);
        fs.writeFileSync('./database/premium.json', JSON.stringify(premium));

        // Kirim reaksi selesai "✅" setelah berhasil
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply(`Nomor ${prrkek} telah menjadi premium!`);
    } catch (error) {
        // Kirim reaksi error "❌" jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`Terjadi kesalahan saat menambahkan nomor: ${error.message}`);
    }
break;
case 'delprem':
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) return newReply(`Use ${prefix + command} number\nContoh ${prefix + command} 62xxx`);

    let delNum = args[0].replace(/[^0-9]/g, ''); // Sanitized phone number
    const userDel = m.sender;
    const nowDel = Date.now();

    if (cooldowns[userDel] && nowDel - cooldowns[userDel] < 10000) { // 10 detik cooldown
        const remainingTimeDel = ((10000 - (nowDel - cooldowns[userDel])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTimeDel}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userDel] = nowDel; // Set cooldown user
    await sendReact(m.key, 0); // Emoji proses "🕒"

    let index = premium.indexOf(delNum);
    if (index === -1) {
        await sendReact(m.key, 2); // Emoji error "❌"
        return newReply(`Nomor ${delNum} tidak ada dalam daftar premium!`);
    }

    try {
        // Hapus nomor dari daftar premium
        premium.splice(index, 1);
        fs.writeFileSync('./database/premium.json', JSON.stringify(premium));

        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply(`Nomor ${delNum} telah dihapus dari premium!`);
    } catch (error) {
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`Terjadi kesalahan saat menghapus nomor: ${error.message}`);
    }

break;

case 'setppgroup':
case 'setppgrup':
case 'setppgc':

    if (!m.isGroup) return newReply(mess.group)
    if (!isAdmins) return newReply(mess.admin)
    if (!isBotAdmins) return newReply(mess.botAdmin)
    if (!quoted) return newReply(`Send/newReply Image With Caption ${prefix + command}`)
    if (!/image/.test(mime)) return newReply(`Send/newReply Image With Caption ${prefix + command}`)
    if (/webp/.test(mime)) return newReply(`Send/newReply Image With Caption ${prefix + command}`)
    var medis = await haruka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
    if (args[0] == 'full') {
        var {
            img
        } = await generateProfilePicture(medis)
        await haruka.query({
            tag: 'iq',
            attrs: {
                to: m.chat,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        })
        fs.unlinkSync(medis)
        newReply(mess.done)
    } else {
        var memeg = await haruka.updateProfilePicture(m.chat, {
            url: medis
        })
        fs.unlinkSync(medis)
        newReply(mess.done)
    }
    break;

break;

case 'menfess': 
case 'menfes': {
if (!isPremium) return m.reply(mess.premium)
    this.menfes = this.menfes || {};
    let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (session) return newReply(`Uhh... Kakak masih ada di sesi ${command} yang sebelumnya nih, selesaikan dulu ya sebelum mulai yang baru! 🤭`);
    if (m.isGroup) return newReply(`Maaf ya Kak, fitur ini cuma bisa dipakai di chat pribadi aja! 😅`);
    if (!text || !text.includes('|')) {
        return newReply(`Kakak bisa pakai format ini ya: ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Halo, apa kabar? 👋`);
    }
    let [namaNya, nomorNya, pesanNya] = text.split('|');
    if (!nomorNya || !pesanNya) {
        return newReply(`Uh-oh, formatnya salah! Pastikan pakai format nama|nomor|pesan ya, Kak! 😄`);
    }
    if (nomorNya.startsWith('0') || isNaN(nomorNya)) {
        return newReply(`Nomornya gak valid, Kak! Gunakan format internasional tanpa awalan '0' ya! 🙏`);
    }
    let pesanTemplate = `\nHai Kak, ada menfess nih 😊✨\n\n👤 *Dari:* ${namaNya}\n✉️ *Pesan:* ${pesanNya}\n\nKakak bisa balas langsung dengan ketik balasmenfes pesan ini untuk menerima menfess, atau abaikan jika tidak ingin membalas.\n\n_Pesan ini cuma disampaikan oleh bot ya, Kak! 🤖_`;
    let id = m.sender;
    this.menfes[id] = {
        id,
        a: m.sender,
        b: nomorNya + '@s.whatsapp.net',
        state: 'WAITING'
    };
    await haruka.sendMessage(nomorNya + '@s.whatsapp.net', {
        text: pesanTemplate
    });
    newReply(`Yay! Pesan ${command} berhasil dikirim ke ${nomorNya}. Sekarang tinggal tunggu responsnya ya, Kak. Kalau gak ada balasan dalam 24 jam, jangan ditunggu lagi ya! 🤭`);
}

break;
case 'balasmenfess': 
case 'balasmenfes': {
    let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!session) return newReply('Hmmm, sepertinya Kakak belum ada sesi menfess yang aktif deh. 😅');
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
    if (!room) return newReply('Gak ada sesi menfess yang menunggu balasan dari Kakak nih. 😢');
    let otherUser = [room.a, room.b].find(user => user !== m.sender);
    room.state = 'CHATTING';
    this.menfes[room.id] = { ...room };

    // Kirim pesan ke pengirim asli
    await haruka.sendMessage(otherUser, { 
        text: `_@${m.sender.split('@')[0]} sudah menerima menfess kamu, sekarang kalian bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, ketik aja .stopmenfess. 😉`, 
        mentions: [m.sender] 
    });

    // Kirim konfirmasi ke penerima balasan
    await haruka.sendMessage(m.chat, { 
        text: `😊🎉 _Menfess sudah diterima, sekarang Kakak bisa ngobrol lewat bot ini ya!_\n\n*Note:* Kalau mau berhenti, tinggal ketik .stopmenfess. 🤗` 
    });
}
break;

			case 'anticall': {
				if (!isCreator) return newReply(mess.owner);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					anticall = true
					newReply(`sudah aktif kak`)
				} else if (args[0] === 'off') {
					anticall = false
					newReply(`sudah nonaktif kak`)
				}
			}
break;

			case 'stopmenfess': 
			case 'stopmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Kayaknya Kakak gak ada sesi menfess yang aktif saat ini deh. 😅');
				let otherUser = session.a === m.sender ? session.b : session.a;
				await haruka.sendMessage(otherUser, { 
					text: `_Teman chat menghentikan sesi menfess ini ya, Kak. Makasih udah coba fitur ini! 😊_`, 
					mentions: [m.sender] 
				});
				newReply('Sesi menfess sudah dihentikan. Kalau mau mulai lagi, tinggal gunakan perintah yang sama ya, Kak! 😄');
				delete this.menfes[session.id];
			}
			break
//================================================================================

case "listgc": case "listgrup": {
if (!isCreator) return newReply(mess.owner);
let teks = `\n *乂 List all group chat*\n`
let a = await haruka.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}

break;

			case 'tolakmenfess': 
			case 'tolakmenfes': {
				let session = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
				if (!session) return newReply('Hmm, gak ada sesi menfess yang Kakak ikuti saat ini. 😕');
				let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
				if (!room) return newReply('Gak ada sesi menfess yang bisa ditolak saat ini, Kak! 😅');
				let otherUser = [room.a, room.b].find(user => user !== m.sender);
				await haruka.sendMessage(otherUser, { 
					text: `_Oops... @${m.sender.split('@')[0]} menolak menfess kamu nih. Gak apa-apa ya, semangat! 🤗_`, 
					mentions: [m.sender] 
				});
				newReply('Menfess berhasil ditolak. Kalau ada yang lain, jangan sungkan buat coba lagi ya, Kak! ✋');
				delete this.menfes[room.id];
			}

break;

			case 'remini':
			case 'hdr':
			case 'hd':{
			if (!isPremium) return m.reply(mess.premium)
			const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
				// Kirim reaksi "🕒" saat memproses
        await sendReact(m.key, 0); // Emoji proses "🕒"
				haruka.enhancer = haruka.enhancer ? haruka.enhancer : {};
				if (m.sender in haruka.enhancer) return newReply(`Masih ada proses yang belum diselesaikan, mohon tunggu sampai proses selesai.`)
				let query = m.quoted ? m.quoted : m;
				let mime = (query.msg || query).mimetype || query.mediaType || "";
				if (!mime) return newReply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
				if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media tidak support!`)
				haruka.enhancer[m.sender] = true;
				try {
					let media = await quoted.download();
					let proses = await remini(media, "enhance");
					await newReply('Gambar berhasil ditingkatkan kualitasnya! ✅');
					// Ubah reaksi menjadi "✅" (centang ijo) setelah sukses
        await sendReact(m.key, 1); // Emoji selesai "✅"
					haruka.sendMessage(m.chat, {image: proses, caption: mess.done}, {quoted: m})
				} catch (err) {
					console.log(err);
					newReply('Terjadi kesalahan pada server.');
					await sendReact(m.key, 2); // Emoji error "❌"
				}
				delete haruka.enhancer[m.sender];
			}
break;

			case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (!/webp/.test(mime) && /image/.test(mime)) {
        if (!text) return newReply(`Penggunaan: ${prefix + command} teks_atas|teks_bawah`);
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
        atas = text.split('|')[0] ? text.split('|')[0] : '';
        bawah = text.split('|')[1] ? text.split('|')[1] : '';

        // Kirim reaksi "🕒" saat memproses
        await sendReact(m.key, 0); // Emoji proses "🕒"

        try {
            let mee = await haruka.downloadAndSaveMediaMessage(quoted);
            let mem = await CatBox(mee);
            let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;

            await haruka.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });

            // Ubah reaksi menjadi "✅" (centang ijo) setelah sukses
            await sendReact(m.key, 1); // Emoji selesai "✅"
        } catch (err) {
            // Ubah reaksi menjadi "❌" jika terjadi kesalahan
            console.error(err);
            await sendReact(m.key, 2); // Emoji error "❌"
            newReply('Terjadi kesalahan 😞');
        }
    } else {
        newReply(`Kirim atau balas gambar dengan caption ${prefix + command} teks_atas|teks_bawah untuk membuat meme!`);
    }
}
break;

case 'pushcontact': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) return newReply(`⚠️ *Teksnya mana, kak?* 📛`);

    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    newReply(`⏳ *Sedang mengirim pesan ke semua kontak...*`);
    for (let pler of mem) {
        await haruka.sendMessage(pler, { text: q });
    }
    newReply(`✅ *Pesan berhasil dikirim ke semua kontak!* 📲`);
}
break;

case 'pushcontact2': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) 
        return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);

    try {
        const metadata = await haruka.groupMetadata(q.split("|")[0]);
        const participants = metadata.participants;

        for (let mem of participants) {
            await haruka.sendMessage(
                `${mem.id.split('@')[0]}@s.whatsapp.net`, 
                { text: q.split("|")[1] }
            );
            await sleep(5000);
        }
        newReply(`✅ *Pesan berhasil dikirim ke semua anggota grup!* 📨`);
    } catch {
        newReply(`⚠️ *Penggunaan yang benar:*\n${prefix + command} idgc|teks`);
    }
}
break;

case 'pushcontact3': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) 
        return newReply(
`⚙️ *Penggunaan yang benar:*

${prefix + command} jeda|teks

📸 *Balas gambar* untuk mengirim ke semua anggota.
⏱️ *Jeda:* 1000 = 1 detik`
        );

    try {
        let jeda = text.split("|")[0];
        let caption = text.split("|")[1];
        let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);

        for (let men of participants) {
            if (/image/.test(mime)) {
                let media = await haruka.downloadAndSaveMediaMessage(quoted);
                let mem = await TelegraPh(media);
                await haruka.sendMessage(men, { 
                    image: { url: mem }, 
                    caption: caption 
                }, { quoted: m });
                await sleep(jeda);
            } else {
                await haruka.sendMessage(men, { 
                    text: caption 
                }, { quoted: m });
                await sleep(jeda);
            }
        }
        newReply(`✅ *Pesan berhasil dikirim ke semua anggota!* 📨`);
    } catch {
        newReply(
`⚙️ *Penggunaan yang benar:*

${prefix + command} jeda|teks

📸 *Balas gambar* untuk mengirim ke semua anggota.
⏱️ *Jeda:* 1000 = 1 detik`
        );
    }
}

break;

case 'savecontact': case 'svcontact': {
    if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
    let cmiggc = await haruka.groupMetadata(m.chat);
    let orgiggc = participants.map(a => a.id);
    vcard = '';
    noPort = 0;
    for (let a of cmiggc.participants) {
        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // Format VCARD untuk kontak
    }
    let nmfilect = './contacts.vcf';
    newReply('\nTunggu sebentar, menyimpan... ' + cmiggc.participants.length + ' kontak');
    require('fs').writeFileSync(nmfilect, vcard.trim());
    await sleep(2000);
    haruka.sendMessage(m.chat, {
        document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSukses!\nGrup: *' + cmiggc.subject + '*\nKontak: *' + cmiggc.participants.length + '*'
    }, {ephemeralExpiration: 86400, quoted: m});
    require('fs').unlinkSync(nmfilect); // Hapus file setelah mengirim
}
break

			case 'welcome':
			case 'left': {
			
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					welcome = true
					newReply(`sudah aktif kak`)
				} else if (args[0] === 'off') {
					welcome = false
					newReply(`sudah nonaktif kak`)
				}
			}
break;

case 'sendcontact': case 'sencontact': {
    if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
    if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .sendcontact @tag name'); // Pastikan ada yang ditandai
    let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
    let snContact = {
        displayName: "Contact", contacts: [{
            displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
        }]
    };
    haruka.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
}
break;

case 'contacttag': case 'contag': {
    if (!m.isGroup) return newReply(mess.group); // Hanya untuk grup
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
    if (!m.mentionedJid[0]) return newReply('\nGunakan seperti ini\n Contoh: .contacttag @tag|name'); // Pastikan ada yang ditandai
    let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Nama kontak
    let sngContact = {
        displayName: "Contact", contacts: [{
            displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
        }]
    };
    haruka.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
}
break
            case 'runtime':
            case 'p':
                let pinga = `Bots Have Been Running For *${runtime(process.uptime())}*`
                haruka.sendMessage(m.chat, {
                    text: pinga,
                    
                }, {
                    quoted: m
                })
break;

case 'group':
case 'grup': {

    // Memastikan perintah hanya dijalankan di dalam grup
    if (!m.isGroup) return newReply(mess.group);

    // Memastikan pengguna adalah admin grup, pemilik grup, atau pembuat bot
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);

    // Memastikan bot adalah admin grup
    if (!isBotAdmins) return newReply(mess.botAdmin);

    // Jika perintah adalah 'close', menutup grup sehingga hanya admin yang bisa mengirim pesan
    if (args[0] === 'close') {
        await haruka.groupSettingUpdate(m.chat, 'announcement')
            .then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
            .catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
    } 
    // Jika perintah adalah 'open', membuka grup sehingga semua anggota bisa mengirim pesan
    else if (args[0] === 'open') {
        await haruka.groupSettingUpdate(m.chat, 'not_announcement')
            .then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
            .catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
    } 
    // Jika perintah tidak sesuai, memberikan informasi penggunaan
    else {
        newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Buka grup\n- *${prefix + command} close* → Tutup grup`);
    }
}
break;

case 'editinfo': {
    // Memastikan perintah hanya bisa dijalankan di dalam grup
    if (!m.isGroup) return newReply(mess.group);
    
    // Memastikan pengguna adalah admin grup, pemilik grup, atau pembuat bot
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    
    // Memastikan bot adalah admin grup
    if (!isBotAdmins) return newReply(mess.botAdmin);

    // Jika perintah adalah 'open', mengizinkan anggota grup untuk mengedit info grup
    if (args[0] === 'open') {
        await haruka.groupSettingUpdate(m.chat, 'unlocked')
            .then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
            .catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
    } 
    // Jika perintah adalah 'close', membatasi hanya admin yang bisa mengedit info grup
    else if (args[0] === 'close') {
        await haruka.groupSettingUpdate(m.chat, 'locked')
            .then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
            .catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
    } 
    // Jika perintah tidak sesuai, memberikan informasi penggunaan
    else {
        newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Izinkan anggota mengedit info grup\n- *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
    }
}
break;

case 'gclink':
case 'grouplink': {
    // Memastikan perintah hanya bisa dijalankan di dalam grup
    if (!m.isGroup) return newReply(mess.group);
    
    // Memastikan bot adalah admin grup
    if (!isBotAdmins) return newReply(mess.botAdmin);

    // Mendapatkan kode undangan grup
    let response = await haruka.groupInviteCode(m.chat);

    // Mengirimkan pesan dengan link undangan grup ke pengguna pribadi
    haruka.sendText(
        m.sender,
        `🤖 *Bot Name:* Haruka Bot\n📛 *Nama Grup:* ${groupMetadata.subject}\n🔗 *Link Grup:* https://chat.whatsapp.com/${response}`,
        m,
        { detectLink: true }
    );

    // Mengirim video sebagai konfirmasi bahwa link sudah dikirimkan ke pesan pribadi
    await haruka.sendMessage(
        m.chat, 
        { 
            video: { url: `https://media.tenor.com/hzWYhzhMTeEAAAPo/haruka-useless.mp4` }, 
            caption: '📩 Link grup sudah Mora kirim ke pesan pribadi kakak! Cek ya! ✨', 
            gifPlayback: true 
        }, 
        { quoted: m }
    );
}
break;

case 'revoke':
case 'resetlink': {

    // Memastikan perintah hanya bisa dijalankan di grup
    if (!m.isGroup) return newReply(mess.group);

    // Memastikan pengguna adalah admin grup, pemilik grup, atau pemilik bot
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);

    // Memastikan bot adalah admin grup
    if (!isBotAdmins) return newReply(mess.botAdmin);

    // Mengirim reaksi emoji yang menunjukkan proses sedang berlangsung
    await haruka.sendMessage(m.chat, {
        react: {
            text: '🔄', // Emoji yang menunjukkan proses sedang berlangsung
            key: m.key
        }
    });

    // Mereset link undangan grup
    await haruka.groupRevokeInvite(m.chat)
        .then(() => {
            // Mengirimkan konfirmasi bahwa link berhasil direset
            newReply(`✅ Link undangan grup berhasil direset, kak! 🔄✨`);

            // Mengirim reaksi emoji yang menunjukkan proses selesai
            haruka.sendMessage(m.chat, {
                react: {
                    text: '✅', // Emoji yang menunjukkan proses selesai
                    key: m.key
                }
            });
        })
        .catch((err) => {
            // Menangani jika terjadi kesalahan
            newReply(`⚠️ Gagal mereset link undangan grup: ${err}`);
        });
}
break;

case 'sc':
case 'script': {
    const caption = `Haii, Kak! Apa kakak ingin membeli script bot kak?? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨\n\nHubungi Owner di: *wa.me/6285655636044*`;
    haruka.sendMessage(m.chat, {
        image: thumb,
        caption: caption
    }, {
        quoted: m
    });
}
			break
			
			case 'viewsc':{
			    const sourceCode = `
_Ingin mendapatkan Source Code TH-AI? silahkan chat nomor whatsapp creator yaa!_

*👑 Creator:*
wa.me/6285655636044

*Kami juga Menyediakan Jasa:*
- Add Fitur Bot
- Fix Fitur Bot
- Fix Bot
- Recode Bot
- Rename Bot
- dsb.
`;
newReply(sourceCode);
			}
			break

			case 'owner':
case 'creator': {
    const contacts = [
        {
            displayName: "Owner Bot", // Nama yang ditampilkan untuk kontak
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner Bot\nTEL;type=CELL;type=VOICE;waid=6285655636044:+62 856-5563-6044\nADR;TYPE=HOME:;;11 Naitōmachi;Shinjuku City;Tokyo 160-0014;Jepang\nEND:VCARD`
        }
    ];

    // Mengirim kontak terlebih dahulu
    await haruka.sendMessage(
        m.chat, 
        {
            contacts: {
                displayName: "Owner Bot", // Nama yang ditampilkan
                contacts: contacts
            }
        }, 
        { quoted: m }
    );

    // Mengirim pesan teks setelah kontak
    const caption = `✨ Hai Kak! Kamu penasaran dengan Owner kami? 😍\nOwner kami siap membantu kamu dengan semua kebutuhanmu!\n\nJangan ragu untuk tanya-tanya atau konsultasi, ya! Kami senang banget bisa bantu kamu. 🛍️😊`;

    await haruka.sendMessage(
        m.chat, 
        { text: caption }, 
        { quoted: m }
    );
}
			break

			case 'contact': {
				await haruka.sendMessage(
					m.chat, 
					{
						contacts: {
							displayName: "Owner",
							contacts: contacts
						}
					}, {
						quoted: m
					}
				);
			}
			break;

			case 'about':{
				newReply(`*Data tidak ditemukan! ☹️*`);
			}
			break;
			case 'brat':{
  newReply(`*Brat Tersedia*
┏ ⏤͟͟͞͞╳── *『 ʙʀᴀᴛ 』*
┣➤bratip 𝙁𝙧𝙚𝙚
┣➤bratgif 𝙋𝙧𝙚𝙢𝙞𝙪𝙢
┗━━━━━━━━━━━━━━━━⊱*`);
			}
			break;
			
			case 'bratgif': {
    // Mengirim reaksi pertama 🕒 saat memulai proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (!isPremium) return m.reply(mess.premium);

    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    try {
        const buffer = await getBuffer(`https://brat.caliphdev.com/api/brat/animate?text=${encodeURIComponent(text)}&delayMs=840`);
        
        // Mengirim stiker
        await haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName });
        
        // Ganti reaksi menjadi ✅ setelah proses selesai
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (err) {
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        console.error(err);
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
    }
};
			
			break

			case 'bratip': {
    await sendReact(m.key, 0); // Kirim reaksi "🕒" saat memproses
    if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`);

    const userId = m.sender;
    const now = Date.now();

    if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
        const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
        return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
    }

    cooldowns[userId] = now; // Set cooldown user

    try {
        const buffer = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`);
        await haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName });
        await sendReact(m.key, 1); // Reaksi sukses "✅"
    } catch (err) {
        console.error(err);
        await sendReact(m.key, 2); // Reaksi error "❌"
        newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
    }
}
			break;

case 'sticker':
case 'stiker':
case 's': {
    if (!isPremium) return m.reply(mess.premium);

    if (!quoted) return newReply(`📸 Kakak harus newReply gambar atau video dengan caption *${prefix + command}*!`);
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    try {
        // Kirim reaksi "🕒" saat memproses
        await sendReact(m.key, 0); // Emoji proses "🕒"

        if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, {
                packname: packName,
                author: author
            });

            // Ubah reaksi menjadi "✅" (centang ijo) setelah selesai
            await sendReact(m.key, 1); // Emoji selesai "✅"

            await fs.unlinkSync(encmedia);
        } else if (isVideo || /video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) 
                return newReply('⚠️ Durasi video maksimal 10 detik ya, kak! 🎥⏱️');
            
            let media = await quoted.download();
            let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, {
                packname: packName,
                author: author
            });

            // Ubah reaksi menjadi "✅" (centang ijo) setelah selesai
            await sendReact(m.key, 1); // Emoji selesai "✅"

            await fs.unlinkSync(encmedia);
        } else {
            return newReply(`⚠️ Kakak kirim gambar atau video dengan caption *${prefix + command}*\n📹 Durasi video: 1-9 detik.`);
        }
    } catch (err) {
        // Ubah reaksi menjadi "❌" jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
    }
}
break;

case 'addowner': {
    // Kirim reaksi pertama 🕒 saat memulai proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (!isCreator) return newReply(mess.owner);

    if (!args[0]) 
        return newReply(`⚙️ Penggunaan perintah:\n*${prefix + command} nomor*\nContoh: *${prefix + command} ${ownerNumber}*`);

    let bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    let ceknye = await haruka.onWhatsApp(bnnd);

    if (ceknye.length == 0) {
        // Ganti reaksi menjadi ❌ jika nomor tidak valid atau tidak terdaftar
        await sendReact(m.key, 2); // Emoji error "❌"
        return newReply('⚠️ Masukkan nomor yang valid dan terdaftar di WhatsApp ya, kak! 📱✅');
    }

    owner.push(bnnd);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));

    // Ganti reaksi menjadi ✅ setelah berhasil menambah nomor owner
    await sendReact(m.key, 1); // Emoji selesai "✅"

    newReply(`✅ Nomor *${bnnd}* sekarang sudah menjadi owner, kak! 👑✨`);
}
break;

case 'delowner': {
    // Kirim reaksi pertama 🕒 saat memulai proses
    await sendReact(m.key, 0); // Emoji proses "🕒"

    if (!isCreator) return newReply(mess.owner);

    if (!args[0]) 
        return newReply(`⚙️ Penggunaan perintah:\n*${prefix + command} nomor*\nContoh: *${prefix + command} 6281234567890*`);

    let ya = q.split("|")[0].replace(/[^0-9]/g, '');
    let unp = owner.indexOf(ya);

    if (unp === -1) {
        // Ganti reaksi menjadi ❌ jika nomor tidak ditemukan
        await sendReact(m.key, 2); // Emoji error "❌"
        return newReply('⚠️ Nomor tersebut tidak ditemukan dalam daftar owner, kak! 📵');
    }

    owner.splice(unp, 1);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));

    // Ganti reaksi menjadi ✅ setelah berhasil menghapus nomor owner
    await sendReact(m.key, 1); // Emoji selesai "✅"

    newReply(`✅ Nomor *${ya}* berhasil dihapus dari daftar owner, kak! 🗑️✨`);
}
break;

case 'afk': {
    if (!m.isGroup) return newReply(mess.group);
    if (isAfkOn) return newReply('⚠️ Kakak sudah dalam mode AFK sebelumnya! 💤');

    let reason = text ? text : 'Tidak ada alasan khusus. 📛';
    addAfkUser(m.sender, Date.now(), reason, afk);
    newReply(`🔔 *@${m.sender.split('@')[0]}* sekarang dalam mode *AFK*! 💤\n📋 *Alasan:* ${reason}`);
}
break;

		case 'qc': {
    if (!isPremium) return m.reply(mess.premium);

    if (!text) return newReply('Teksnya mana? 🤔');
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    const sender = m.sender;
    const username = await haruka.getName(m.quoted ? m.quoted.sender : sender);
    const avatar = await haruka.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://i.ibb.co/3Fh9V6p/avatar-contact.png');
    
    const json = {
        type: "quote",
        format: "png",
        backgroundColor: "#FFFFFF",
        width: 512,
        height: 512,
        scale: 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": username,
                    "photo": { "url": avatar }
                },
                "text": text,
                "replyMessage": {}
            }
        ],
    };

    try {
        // Reaksi saat memulai 🕒
        await sendReact(m.key, 0); // Emoji proses "🕒"

        // Generate quote image
        axios.post("https://bot.lyo.su/quote/generate", json, { headers: { "Content-Type": "application/json" } })
        .then(async (res) => {
            const buffer = Buffer.from(res.data.result.image, "base64");

            // Reaksi setelah selesai ✅ dan kirim stiker
            await sendReact(m.key, 1); // Emoji selesai "✅"
            await haruka.sendImageAsSticker(m.chat, buffer, m, { 
                packname: botName, 
                author: ownerName, 
                categories: ['🎉'] 
            });
        })
        .catch(async () => {
            // Jika gagal, reaksi ❌
            await sendReact(m.key, 2); // Emoji error "❌"
        });
    } catch (err) {
        // Jika error, reaksi ❌
        await sendReact(m.key, 2); // Emoji error "❌"
    }
}
			break;

			case 'play': 
case 'ytplay': {
    if (!text) return newReply(`Example : ${prefix + command} Lagu sad`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Reaksi pertama saat memulai pencarian 🕒
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        let search = await yts(`${text}`);
        if (!search || search.all.length === 0) {
            // Ganti reaksi menjadi ❌ jika lagu tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Lagu tidak ditemukan!* ☹️`);
        }

        let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
        let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📛 Description : ${description}`;
        
        // Reaksi ✅ setelah menemukan hasil
        await sendReact(m.key, 1); // Emoji selesai "✅"

        await haruka.sendMessage(m.chat, {
            image: { url: image }, 
            caption: caption
        }, { quoted: m });

        const response = await fetchJson(`https://ytdl-api.caliphdev.com/download/audio?url=${url}`);
        if (!response || !response.result) {
            // Ganti reaksi menjadi ❌ jika audio tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Audio tidak ditemukan!* ☹️`);
        }

        // Kirim audio dan reaksi ✅ setelah berhasil
        await haruka.sendMessage(m.chat, { 
            audio: { url: response.result }, 
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`
        }, { quoted: m });

        // Ganti reaksi menjadi ✅ setelah sukses mengirim audio
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (err) {
        console.error(err);
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
    }
}
			break;

			case 'ytaudio': 
case 'ytmp3': {
    if (!isPremium) return m.reply(mess.premium);
    
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
    const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Reaksi pertama saat memulai pencarian 🕒
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        let search = await yts(text);
        if (!search || search.all.length === 0) {
            // Ganti reaksi menjadi ❌ jika video tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Video tidak ditemukan!* ☹️`);
        }

        let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
        let caption = `「 *YOUTUBE AUDIO* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📛 Description : ${description}`;

        // Reaksi ✅ setelah menemukan video
        await sendReact(m.key, 1); // Emoji selesai "✅"

        await haruka.sendMessage(m.chat, {
            image: { url: image }, 
            caption: caption
        }, { quoted: m });

        const response = await fetchJson(`https://ytdl.axeel.my.id/api/download/audio?url=${url}`);
        if (!response || !response.result) {
            // Ganti reaksi menjadi ❌ jika audio tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Audio tidak ditemukan!* ☹️`);
        }

        // Kirim audio dan reaksi ✅ setelah berhasil
        await haruka.sendMessage(m.chat, { 
            audio: { url: response.result }, 
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`
        }, { quoted: m });

        // Ganti reaksi menjadi ✅ setelah sukses mengirim audio
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (err) {
        console.error(err);
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
    }
}
			break;
			case 'setbiobot': {
    if (!isCreator) return newReply('Hanya pemilik bot yang dapat mengubah bio bot!');
    if (!text) return newReply('Apa yang ingin kamu tulis di bio bot? 🤔');

    // Reaksi pertama saat memulai proses 🕒
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        await haruka.updateProfileStatus(text);
        // Ganti reaksi menjadi ✅ jika sukses mengubah bio
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply(`Bio bot berhasil diubah menjadi *${text}*`);
    } catch (error) {
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('Gagal mengubah bio bot, mungkin ada batasan dari WhatsApp.');
    }
}
break;
case 'setnamabot': {
    if (!isCreator) return newReply('Hanya pemilik bot yang dapat mengubah nama bot!');
    if (!text) return newReply('Mau dinamain apa botnya? 🤔');

    // Reaksi pertama saat memulai proses 🕒
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        await haruka.updateProfileName(text);
        // Ganti reaksi menjadi ✅ jika sukses mengubah nama
        await sendReact(m.key, 1); // Emoji selesai "✅"
        newReply(`Nama bot berhasil diubah menjadi *${text}*`);
    } catch (error) {
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply('Gagal mengubah nama bot, mungkin ada batasan dari WhatsApp.');
    }
}
			break;

			case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
    if (!isPremium) return m.reply(mess.premium);
    
    if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
    if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
const userId = m.sender;
const now = Date.now();

if (cooldowns[userId] && now - cooldowns[userId] < 10000) { // 10 detik cooldown
    const remainingTime = ((10000 - (now - cooldowns[userId])) / 1000).toFixed(1);
    return newReply(`Tunggu *${remainingTime}* detik sebelum menggunakan perintah ini lagi.`);
}

cooldowns[userId] = now; // Set cooldown user
    // Reaksi pertama saat memulai pencarian 🕒
    await sendReact(m.key, 0); // Emoji proses "🕒"

    try {
        const vidIdMatch = text.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
        const vidId = vidIdMatch ? vidIdMatch[1] : null;
        if (!vidId) {
            // Ganti reaksi menjadi ❌ jika gagal mengekstrak ID video
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`Gagal mengekstrak ID video dari link! 😓`);
        }

        let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
        if (!search) {
            // Ganti reaksi menjadi ❌ jika video tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Video tidak ditemukan!* ☹️`);
        }

        let { title, url, image } = search;
        let caption = `「 *YOUTUBE VIDEO* 」\n\n💬 Title : ${title}\n🔗 URL Video : ${url}`;

        // Ganti reaksi menjadi ✅ setelah menemukan video
        await sendReact(m.key, 1); // Emoji selesai "✅"

        await haruka.sendMessage(m.chat, {
            image: { url: image }, 
            caption: caption
        }, { quoted: m });

        const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=video`);
        if (!response || !response.result) {
            // Ganti reaksi menjadi ❌ jika video tidak ditemukan
            await sendReact(m.key, 2); // Emoji error "❌"
            return newReply(`*Video tidak ditemukan!* ☹️`);
        }

        // Kirim video dan reaksi ✅ setelah berhasil
        await haruka.sendMessage(m.chat, { 
            video: { url: response.result }, 
            caption: '✅ *Video berhasil diunduh!*'
        }, { quoted: m });

        // Ganti reaksi menjadi ✅ setelah sukses mengirim video
        await sendReact(m.key, 1); // Emoji selesai "✅"

    } catch (err) {
        console.error(err);
        // Ganti reaksi menjadi ❌ jika terjadi kesalahan
        await sendReact(m.key, 2); // Emoji error "❌"
        newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
    }
}
			break;

			case 'truth': {
				const truths = [
					'😈 Apa rahasia terbesar yang belum pernah kamu ceritakan ke siapa pun?',
					'🤭 Siapa orang yang diam-diam kamu suka saat ini?',
					'🫣 Pernah bohong sama sahabat sendiri? Tentang apa?',
					'👀 Hal paling memalukan yang pernah kamu alami?',
					'💬 Kalau bisa kembali ke masa lalu, apa yang ingin kamu ubah?'
				];
				const randomTruth = truths[Math.floor(Math.random() * truths.length)];
				newReply(`🤔 *Truth*\n\n${randomTruth}`);
				break;
			}
break;
			case 'dare': {
				const dares = [
					'🔥 Kirim chat "Aku suka kamu" ke kontak terakhir yang kamu chat!',
					'😜 Kirim voice note bilang "Aku adalah manusia paling lucu sedunia."',
					'🤡 Foto selfie dengan ekspresi wajah paling aneh dan kirim ke grup!',
					'🕺 Kirim video kamu joget lagu favorit selama 10 detik.',
					'📸 Post story IG dengan caption "Aku lagi kena dare nih, tolong selamatkan!"'
				];
				const randomDare = dares[Math.floor(Math.random() * dares.length)];
				newReply(`😈 *Dare*\n\n${randomDare}`);
				break;
			}

			case 'menu': {
    // Menambahkan reaksi proses
    await haruka.sendMessage(m.chat, {
        react: {
            text: '🕒', // Proses reaction emoji
            key: m.key,
        }
    });

    let hehe = `
*乂 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 - 𝐁𝐎𝐓*
  • Botname : *${global.botName}*
  • Version : *${global.versi}*
  • Mode : *${haruka.public ? "Public" : "Self"}*
  • Pemilik : ${global.ownerNumber}
  • Runtime Bot : *${runtime(process.uptime())}*
  • Uptime Vps : *${runtime(os.uptime())}*

*乂 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 - 𝐔𝐒𝐄𝐑*
  • Number : ${m.sender.split("@")[0]}
  • Status : *${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}*

*─── ❰ 𝗗𝗔𝗙𝗧𝗔𝗥 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ *𝗼𝘄𝗻𝗲𝗿𝗺𝗲𝗻𝘂*
┣➤ *𝘁𝗼𝗼𝗹𝘀𝗺𝗲𝗻𝘂*
┣➤ *𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗺𝗲𝗻𝘂*
┣➤ *𝗴𝗿𝗼𝘂𝗽𝗺𝗲𝗻𝘂*
┣➤ *𝘀𝗲𝗮𝗿𝗰𝗵𝗺𝗲𝗻𝘂*
┣➤ *𝗽𝘂𝘀𝗵𝗸𝗼𝗻𝘁𝗮𝗸𝗺𝗲𝗻𝘂*
┗━━━━━━━━━━━━━━━━⊱

📢 *Ikuti saluran kami untuk update terbaru!*
🔗[https://whatsapp.com/channel/0029VayeXS2L2AU3pM32263b]
    `.trim();

    // Kirim pesan menu dengan gambar
    await haruka.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/vmqm6b.jpg' },
        caption: hehe,
        contextInfo: {
            externalAdReply: {  
                title: '©luxxyXD',
                body: 'Jangan menyerah, teruslah mencoba.',
                thumbnailUrl: 'https://files.catbox.moe/y95cgr.jpg',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

    // Menambahkan reaksi selesai
    await haruka.sendMessage(m.chat, {
        react: {
            text: '✅', // Selesai reaction emoji
            key: m.key,
        }
    });
};
break;

case 'groupmenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 📱 ]"
      }
    }
  };

  let groupMenu = `*✨ Kelola grup dengan mudah, seru, praktis, cepat, dan keren! 🔥*
*─── ❰ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}liatdong
┣➤ ${prefix}grouplink
┣➤ ${prefix}hidetag
┣➤ ${prefix}resetlink
┣➤ ${prefix}add
┣➤ ${prefix}kick
┣➤ ${prefix}welcome
┣➤ ${prefix}demote
┣➤ ${prefix}promote
┣➤ ${prefix}setdesc
┣➤ ${prefix}setnamegc
┣➤ ${prefix}setppgc
┣➤ ${prefix}group
┣➤ ${prefix}antilinkgc
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: groupMenu }, { quoted: qtext });
}
break;

case 'pushkontakmenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗣𝘂𝘀𝗵𝗸𝗼𝗻𝘁𝗮𝗸 𝗠𝗲𝗻𝘂 ⚡ ]"
      }
    }
  };

  let pushkontakMenu = `*Temukan & bagikan kontak dengan mudah! 🚀*
*─── ❰ 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}savecontact
┣➤ ${prefix}pushcontact3
┣➤ ${prefix}pushcontact2
┣➤ ${prefix}pushcontact
┣➤ ${prefix}sendcontact
┣➤ ${prefix}contag
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: pushkontakMenu }, { quoted: qtext });
}
break;

case 'searchmenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗠𝗲𝗻𝘂 ❗ ]"
      }
    }
  };

  let searchMenu = `*✨ Temukan semua yang kamu cari dengan mudah! 🔍*
*─── ❰ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}carivideoyt 𝙋𝙍𝙀𝙈
┣➤ ${prefix}carivideotiktok 𝙋𝙍𝙀𝙈
┣➤ ${prefix}play
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: searchMenu }, { quoted: qtext });
}
break;

case 'ownermenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ❗ ]"
      }
    }
  };

  let ownerMenu = `*⚡ Kontrol penuh, segala bisa kamu atur!*
*─── ❰ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}idch
┣➤ ${prefix}chat
┣➤ ${prefix}downloadfile
┣➤ ${prefix}setbiobot
┣➤ ${prefix}setnamabot
┣➤ ${prefix}delsession
┣➤ ${prefix}delppbot
┣➤ ${prefix}delete
┣➤ ${prefix}autotype
┣➤ ${prefix}autovn
┣➤ ${prefix}autobio
┣➤ ${prefix}autoread
┣➤ ${prefix}keluargroupid
┣➤ ${prefix}listgc
┣➤ ${prefix}script
┣➤ ${prefix}viewsc
┣➤ ${prefix}backup
┣➤ ${prefix}ambilpremium
┣➤ ${prefix}delsession
┣➤ ${prefix}session
┣➤ ${prefix}join
┣➤ ${prefix}listprem
┣➤ ${prefix}addprem
┣➤ ${prefix}delprem
┣➤ ${prefix}anticall
┣➤ ${prefix}addowner
┣➤ ${prefix}delowner
┣➤ ${prefix}restart
┣➤ ${prefix}shutdown
┣➤ ${prefix}public
┣➤ ${prefix}self
┣➤ ${prefix}setppbot 
┣➤ ${prefix}blok
┣➤ ${prefix}unblock
┣➤ ${prefix}statusvideo
┣➤ ${prefix}upswimg
┣➤ ${prefix}upswtext
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: ownerMenu }, { quoted: qtext });
}
break;

case 'toolsmenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 🛠️ ]"
      }
    }
  };
let toolsMenu = `*🛠️ Alat canggih untuk semua kebutuhanmu!*
*─── ❰ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}smeme
┣➤ ${prefix}runtime
┣➤ ${prefix}truth
┣➤ ${prefix}dare
┣➤ ${prefix}hd 𝙋𝙍𝙀𝙈
┣➤ ${prefix}remini 𝙋𝙍𝙀𝙈
┣➤ ${prefix}bratgif 𝙋𝙍𝙀𝙈
┣➤ ${prefix}bratip
┣➤ ${prefix}getpp 𝙋𝙍𝙀𝙈
┣➤ ${prefix}qc 𝙋𝙍𝙀𝙈
┣➤ ${prefix}sticker 𝙋𝙍𝙀𝙈
┣➤ ${prefix}s 𝙋𝙍𝙀𝙈
┣➤ ${prefix}tourl 𝙋𝙍𝙀𝙈
┣➤ ${prefix}toimg 𝙋𝙍𝙀𝙈
┣➤ ${prefix}menfess 𝙋𝙍𝙀𝙈
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: toolsMenu }, { quoted: qtext });
}
break;

case 'downloadmenu': {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 ⬇️ ]"
      }
    }
  };
let downloadMenu = `*📥 Unduh video dan musik favoritmu dalam sekejap!*
*─── ❰ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ❱ ───*
┣➤ ${prefix}tiktok 𝙋𝙍𝙀𝙈
┣➤ ${prefix}ttmp3 𝙋𝙍𝙀𝙈
┣➤ ${prefix}ytmp3 𝙋𝙍𝙀𝙈
┣➤ ${prefix}ytmp4 𝙋𝙍𝙀𝙈
┣➤ ${prefix}carivideoyt 𝙋𝙍𝙀𝙈
┣➤ ${prefix}carivideotiktok 𝙋𝙍𝙀𝙈
┗━━━━━━━━━━━━━⊱`

  haruka.sendMessage(m.chat, { text: downloadMenu }, { quoted: qtext });
}
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return newReply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return newReply(bang)
}
try {
newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
newReply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return newReply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await newReply(evaled)
} catch (err) {
await newReply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return newReply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return newReply(err)
if (stdout) return newReply(stdout)
})
}
}
} catch (err) {
console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

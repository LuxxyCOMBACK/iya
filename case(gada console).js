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
const { toAudio, toPTT, toVideo, addExifAvatar } = require('./lib/converter')
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
        const isCmd = body.startsWith(prefix) ? true : false
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

        if (!haruka.public) {
            if (!isCreator && !m.key.fromMe) return
        }

        if (autoread) {
            haruka.readMessages([m.key])
        }

        if (autotype) {
            haruka.sendPresenceUpdate('composing', m.chat)
        }

        if (autorecord) {
            haruka.sendPresenceUpdate('recording', m.chat)
        }

        if (autobio) {
            haruka.updateProfileStatus(`Hey, future leaders! 🌟 TH-ai is here to inspire and lead, thanks to  Botz, Inc. 🚀 ${runtime(process.uptime())} `).catch(_ => _)
        }

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
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
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

    fs.readdir("./session", async function(err, files) {
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
            fs.unlinkSync(`./session/${file}`);
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

        newReply('⏳ Tunggu sebentar ya, aku lagi coba masuk ke grup...');
        let result = args[0].split('https://chat.whatsapp.com/')[1];
        
        await haruka.groupAcceptInvite(result)
            .then((res) => newReply('✅ Berhasil bergabung ke grup! 🎉'))
            .catch((err) => newReply(`❌ Gagal bergabung: ${err}`));
    } catch (err) {
        newReply('⚠️ Ada kesalahan saat mencoba bergabung ke grup, kak!');
    }
}
break;

case 'session': {
    if (!isCreator) return newReply(mess.owner);

    newReply('⏳ Tunggu sebentar ya, aku lagi menyiapkan file sesi...');
    let sesi = await fs.readFileSync('./session/creds.json');

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
    if (args.length < 1) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    if (q === 'on') {
        autoread = true;
        newReply('✅ Fitur *AutoRead* berhasil diaktifkan, kak! Sekarang semua pesan akan otomatis terbaca. 👀✨');
    } else if (q === 'off') {
        autoread = false;
        newReply('✅ Fitur *AutoRead* berhasil dimatikan, kak! Pesan tidak akan otomatis terbaca lagi. 🚫👀');
    } else {
        newReply(`⚠️ Opsi tidak valid, kak! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
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

case 'autorecord': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    if (q === 'on') {
        autorecord = true;
        newReply('✅ Fitur *autorecord* berhasil diaktifkan, kak! Sekarang bakal kelihatan kayak lagi ngerekam otomatis. 🎙️✨');
    } else if (q === 'off') {
        autorecord = false;
        newReply('✅ Fitur *autorecord* berhasil dimatikan, kak! Nggak ada efek ngerekam otomatis lagi. 🚫🎙️');
    } else {
        newReply(`⚠️ Opsi tidak valid, kak! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;

case 'autobio': {
    if (!isCreator) return newReply(mess.owner);
    if (args.length < 1) return newReply(`⚠️ Kak, jangan lupa pilih opsi ya!\n\nContoh: *${prefix + command} on* atau *${prefix + command} off*`);

    if (q === 'on') {
        autobio = true;
        newReply('✅ Fitur *AutoBio* berhasil diaktifkan, kak! Bio akan diperbarui secara otomatis. 📛✨');
    } else if (q === 'off') {
        autobio = false;
        newReply('✅ Fitur *AutoBio* berhasil dimatikan, kak! Bio nggak akan diperbarui otomatis lagi. 🚫📛');
    } else {
        newReply(`⚠️ Opsi tidak valid, kak! Coba ketik: *${prefix + command} on* atau *${prefix + command} off*`);
    }
}
break;

			case 'statustext':
			case 'upswtext':
			case 'upswteks': {
				if (!isCreator) return newReply(mess.owner);
				if (!q) return newReply('Teksnya mana?');
				await haruka.sendMessage('status@broadcast', { 
					text: q 
				}, { 
					backgroundColor: '#FF000000', 
					font: 3, 
					statusJidList: Object.keys(global.db.data.users) 
				});
				newReply('Sukses kirim status teks!');
			}
			break;

			case 'statusvideo':
			case 'upswvideo': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/video/.test(mime)) {
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

					await newReply('✅ Video berhasil dikirim ke status WhatsApp dengan caption bawaan!');
				} else {
					newReply('⚠️ Tolong newReply ke video dulu ya, Kak! 🎥');
				}
			}
			break;

			case 'statusimg':
			case 'statusimage':
			case 'upswimg': {
				if (!isCreator) return newReply(mess.owner); // Cek apakah pengguna adalah creator

				if (/image/.test(mime)) {
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

					await newReply('✅ Gambar berhasil dikirim ke status WhatsApp dengan caption bawaan! 🖼️✨');
				} else {
					newReply('⚠️ Tolong newReply ke gambar dulu ya, Kak! 🖼️');
				}
			}
			break;

			case 'statusaudio':
			case 'upswaudio': {
				if (!isCreator) return newReply(mess.owner);
				if (/audio/.test(mime)) {
					var audiosw = await haruka.downloadAndSaveMediaMessage(quoted);
					await haruka.sendMessage('status@broadcast', {
						audio: { url: audiosw },
						mimetype: 'audio/mp4',
						ptt: true
					}, {
						backgroundColor: '#FF000000',
						statusJidList: Object.keys(global.db.data.users)
					});
					await newReply('Sukses kirim status audio!');
				} else {
					newReply('newReply audio dulu, ya!');
				}
			}
			break;

			case 'self':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = false;
				newReply(`Bot sekarang dalam mode *Self Usage* aja, gak bisa dipakai oleh orang lain ya!`);
			break;

			case 'public':
				if (!isCreator) return newReply(mess.owner);
				haruka.public = true;
				newReply(`Bot sekarang kembali ke mode *Public Usage*, jadi bisa dipakai semua orang!`);
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
			case 'tt':
			case 'ttnowm':
			case 'tiktoknowm':
			case 'tiktok': {
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!text) return newReply(
					`⚠️ Hmm... kakak belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} https://vt.tiktok.com/ZS8KdFQcQ/* biar Mora bisa bantu! 🎥✨`
				);

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
				} catch (err) {
					console.log(err);
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
    if (!isCreator) return newReply(mess.owner);

    let blockTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.updateBlockStatus(blockTarget, 'block')
        .then(() => newReply(`✅ Pengguna berhasil diblokir, kak! 🚫`))
        .catch((err) => newReply(`⚠️ Gagal memblokir pengguna: ${err}`));
}
break;

case 'unblock': {
    if (!isCreator) return newReply(mess.owner);

    let unblockTarget = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.updateBlockStatus(unblockTarget, 'unblock')
        .then(() => newReply(`✅ Pengguna berhasil di-unblock, kak! 🟢`))
        .catch((err) => newReply(`⚠️ Gagal membuka blokir pengguna: ${err}`));
}
break;

case 'leave': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);

    newReply('😢 Bye semuanya! Aku pamit dulu ya... Jaga diri baik-baik! 👋✨');
    await haruka.groupLeave(m.chat);
}
break;

case 'delete':
case 'del': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.quoted) return newReply('⚠️ Kak, Mora nggak tahu pesan mana yang mau dihapus! newReply pesan yang mau dihapus ya.');

    let { chat, fromMe, id, isBaileys } = m.quoted;

    if (!isBaileys) return newReply('⚠️ Pesan ini bukan dikirim oleh bot, kak!');

    await haruka.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: true,
            id: id,
            participant: m.quoted.sender
        }
    });

    newReply('✅ Pesan berhasil dihapus, kak! 🗑️✨');
}
break;

case 'kick': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    let target = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.groupParticipantsUpdate(m.chat, [target], 'remove')
        .then(() => newReply('✅ Pengguna berhasil dikeluarkan dari grup. 🚪👋'))
        .catch((err) => newReply(`⚠️ Gagal mengeluarkan pengguna: ${err}`));
}
break;

			case 'tiktoksearch':
			case 'carivideotiktok':
			case 'ttsearch': {
				if (!text) return newReply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *${prefix + command} jj epep* biar Luxxy bisa bantu cari yang kakak mau! 🔍💬`);
				try {
					let search = await tiktokSearchVideo(text);
					await newReply(mess.wait);
					newReply(mess.done)
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
				} catch (error) {
					console.log(error);
				}
			}
break;

case 'toimage': 
	case 'toimg': {
	const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!quoted) return newReply('Reply Image')
				if (!/webp/.test(mime)) return newReply(`Balas sticker dengan caption *${prefix + command}*`)
				let media = await haruka.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					haruka.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
break;

case 'add': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    let target = m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.groupParticipantsUpdate(m.chat, [target], 'add')
        .then(() => newReply('✅ Pengguna berhasil ditambahkan ke grup! 🎉👤'))
        .catch((err) => newReply(`⚠️ Gagal menambahkan pengguna: ${err}`));
}
break;

case 'promote': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    let target = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.groupParticipantsUpdate(m.chat, [target], 'promote')
        .then(() => newReply('✅ Pengguna berhasil dipromosikan menjadi admin! 🛡️👑'))
        .catch((err) => newReply(`⚠️ Gagal mempromosikan pengguna: ${err}`));
}
break ;

			case 'carivideoyt': 
			case 'ytsearch': {
				if (!text) return newReply(`Example : ${prefix + command} story wa anime`)
				await newReply(mess.wait);
				let search = await yts(text)
				let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
				let no = 1
				for (let i of search.all) {
					teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n─────────────────\n\n`
				}
				haruka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: m })
			}
break;

			case 'tourl': {
				const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!mime) return newReply(`Kirim/Balas Video/Gambar Dengan Caption ${prefix + command}`);
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
				} catch (err) {
					console.log(err);
					newReply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
break;

case 'demote': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    let target = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await haruka.groupParticipantsUpdate(m.chat, [target], 'demote')
        .then(() => newReply('✅ Pengguna berhasil diturunkan dari admin. 👤🔽'))
        .catch((err) => newReply(`⚠️ Gagal menurunkan pengguna: ${err}`));
}
break;

case 'setname':
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

case 'setppgroup':
case 'setppgrup':
case 'setppgc':
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
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
break

case 'jpm': 
case 'post': 
case 'pushcontactgc': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) 
        return newReply(`⚙️ *Penggunaan yang benar:*\n${prefix + command} teks|jeda\n\n📸 *Balas gambar* untuk mengirim ke semua grup.\n⏱️ *Jeda:* 1000 = 1 detik\n\n*Contoh:* ${prefix + command} Halo semuanya!|9000`);
    
    await newReply(`⏳ *Sedang diproses...*`);

    let getGroups = await haruka.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map((entry) => entry[1]);
    let anu = groups.map((v) => v.id);

    for (let xnxx of anu) {
        let metadata = await haruka.groupMetadata(xnxx);
        let participants = metadata.participants;

        if (/image/.test(mime)) {
            let media = await haruka.downloadAndSaveMediaMessage(quoted);
            let mem = await TelegraPh(media);
            await haruka.sendMessage(xnxx, { 
                image: { url: mem }, 
                caption: text.split('|')[0], 
                mentions: participants.map(a => a.id) 
            });
            await sleep(text.split('|')[1]);
        } else {
            await haruka.sendMessage(xnxx, { 
                text: text.split('|')[0], 
                mentions: participants.map(a => a.id) 
            });
            await sleep(text.split('|')[1]);
        }
    }
    newReply(`✅ *Berhasil mengirim pesan ke semua grup!* 🎯`);
}
break;

			case 'remini':
			case 'hdr':
			case 'hd':{
				const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
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
					haruka.sendMessage(m.chat, {image: proses, caption: mess.done}, {quoted: m})
				} catch (err) {
					console.log(err);
					newReply('Terjadi kesalahan pada server.');
				}
				delete haruka.enhancer[m.sender];
			}
break
//=================================================
case 'smeme':
 if (!text) return newReply(`Balas Image Dengan Caption`)
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply('*Sabar Cuy Loading*')
mee = await haruka.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
haruka.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
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

case 'getcontact': case 'getcon': {
    if (!m.isGroup) return newReply(mess.group); // Hanya berlaku untuk grup
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Hanya admin atau pemilik yang bisa
    bigpp = await haruka.sendMessage(m.chat, {
        text: `\nGrup: *${groupMetadata.subject}*\nAnggota: *${participants.length}*`
    }, {quoted: m, ephemeralExpiration: 86400});
    await sleep(1000);
    haruka.sendContact(m.chat, participants.map(a => a.id), bigpp); // Kirim kontak anggota
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
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (args.length < 1) return newReply('on/off?')
				if (args[0] === 'on') {
					welcome = true
					newReply(`${command} telah aktif`)
				} else if (args[0] === 'off') {
					welcome = false
					newReply(`${command} dimatikan`)
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
break;

case 'group':
case 'grup': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    if (args[0] === 'close') {
        await haruka.groupSettingUpdate(m.chat, 'announcement')
            .then(() => newReply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
            .catch((err) => newReply(`⚠️ Gagal menutup grup: ${err}`));
    } else if (args[0] === 'open') {
        await haruka.groupSettingUpdate(m.chat, 'not_announcement')
            .then(() => newReply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
            .catch((err) => newReply(`⚠️ Gagal membuka grup: ${err}`));
    } else {
        newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Buka grup\n- *${prefix + command} close* → Tutup grup`);
    }
}
break;

case 'editinfo': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    if (args[0] === 'open') {
        await haruka.groupSettingUpdate(m.chat, 'unlocked')
            .then(() => newReply('✅ Anggota sekarang bisa mengedit info grup! 📛✨'))
            .catch((err) => newReply(`⚠️ Gagal membuka izin edit info grup: ${err}`));
    } else if (args[0] === 'close') {
        await haruka.groupSettingUpdate(m.chat, 'locked')
            .then(() => newReply('✅ Hanya admin yang bisa mengedit info grup sekarang! 🔒🛡️'))
            .catch((err) => newReply(`⚠️ Gagal menutup izin edit info grup: ${err}`));
    } else {
        newReply(`⚙️ Penggunaan perintah:\n- *${prefix + command} open* → Izinkan anggota mengedit info grup\n- *${prefix + command} close* → Hanya admin yang bisa mengedit info grup`);
    }
}
break;

case 'gclink':
case 'grouplink': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    let response = await haruka.groupInviteCode(m.chat);
    haruka.sendText(
        m.sender,
        `🤖 *Bot Name:* Haruka Bot\n📛 *Nama Grup:* ${groupMetadata.subject}\n🔗 *Link Grup:* https://chat.whatsapp.com/${response}`,
        m,
        { detectLink: true }
    );

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
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
    if (!isBotAdmins) return newReply(mess.botAdmin);

    await haruka.groupRevokeInvite(m.chat)
        .then(() => newReply(`✅ Link undangan grup berhasil direset, kak! 🔄✨`))
        .catch((err) => newReply(`⚠️ Gagal mereset link undangan grup: ${err}`));
}
break;

			case 'sc':
			case 'script': {
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}viewsc`,
							buttonText: {
								displayText: "Get Script"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact 📞"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
			}
			break
			
			case 'viewsc':{
			    const sourceCode = `
_Ingin mendapatkan Source Code Mora AI? silahkan chat nomor whatsapp creator yaa!_

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
				const caption = `Haii, Kak! Apa yang ingin kamu ketahui tentang Ownerku? 🤔💭\nAku bisa kasih info lebih atau cara menghubungi Owner, loh! 😊✨`;
				haruka.sendMessage(m.chat,{
					image: thumb,
					caption: caption,
					footer: botName,
					buttons: [
						{
							buttonId: `${prefix}about`,
							buttonText: {
								displayText: "About 👤"
							}
						},
						{
							buttonId: `${prefix}contact`,
							buttonText: {
								displayText: "Contact 📞"
							}
						}
					],
					viewOnce: true,
				}, {
					quoted: m
				});
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
			break

			case 'brat': {
			
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!text) return newReply(`Contoh : ${prefix + command} Hai kak`)
				try {
					const buffer = await getBuffer(`https://api.khaliddesu.my.id/api/brat?q=${encodeURIComponent(text)}`)
					haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName })
				} catch (err) {
					newReply('Terjadi kesalahan saat membuat stiker gambar. 😞');
				}
			}
			break;

case 'sticker':
case 'stiker':
case 's': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!quoted) return newReply(`📸 Kakak harus newReply gambar atau video dengan caption *${prefix + command}*!`);

    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, {
            packname: packName,
            author: author
        });
        await fs.unlinkSync(encmedia);
    } else if (isVideo || /video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) 
            return newReply('⚠️ Durasi video maksimal 10 detik ya, kak! 🎥⏱️');
        
        let media = await quoted.download();
        let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, {
            packname: packName,
            author: author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return newReply(`⚠️ Kakak kirim gambar atau video dengan caption *${prefix + command}*\n📹 Durasi video: 1-9 detik.`);
    }
}
break;

case 'swm': 
case 'steal': 
case 'stickerwm': 
case 'take': {
    if (!args.join(" ")) return newReply(`📛 Kakak lupa teksnya! Contohnya: *${prefix + command} packname|author*`);
    
    const swn = args.join(" ");
    const pcknm = swn.split("|")[0];
    const atnm = swn.split("|")[1];

    if (m.quoted.isAnimated === true) {
        haruka.downloadAndSaveMediaMessage(quoted, "gifee");
        haruka.sendMessage(m.chat, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m });
    } else if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await haruka.sendImageAsSticker(m.chat, media, m, { 
            packname: pcknm, 
            author: atnm 
        });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) 
            return newReply('⚠️ Durasi video maksimal 10 detik ya, kak! 🎥⏱️');
        
        let media = await quoted.download();
        let encmedia = await haruka.sendVideoAsSticker(m.chat, media, m, { 
            packname: pcknm, 
            author: atnm 
        });
    } else {
        newReply('⚠️ Mana foto atau videonya, kak? 🖼️🎥');
    }
}
break;

case 'addowner': {
const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) 
        return newReply(`⚙️ Penggunaan perintah:\n*${prefix + command} nomor*\nContoh: *${prefix + command} ${ownerNumber}*`);

    let bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
    let ceknye = await haruka.onWhatsApp(bnnd);

    if (ceknye.length == 0) 
        return newReply('⚠️ Masukkan nomor yang valid dan terdaftar di WhatsApp ya, kak! 📱✅');

    owner.push(bnnd);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
    newReply(`✅ Nomor *${bnnd}* sekarang sudah menjadi owner, kak! 👑✨`);
}
break;

case 'delowner': {
haruka.sendMessage(m.chat, {        
      react: {
      text: '1️⃣',
      text: '2️⃣',
      text: '3️⃣',
      text: '✅',
      key: m.key,
    }
  })
    if (!isCreator) return newReply(mess.owner);
    if (!args[0]) 
        return newReply(`⚙️ Penggunaan perintah:\n*${prefix + command} nomor*\nContoh: *${prefix + command} 6281234567890*`);

    let ya = q.split("|")[0].replace(/[^0-9]/g, '');
    let unp = owner.indexOf(ya);

    if (unp === -1) 
        return newReply('⚠️ Nomor tersebut tidak ditemukan dalam daftar owner, kak! 📵');

    owner.splice(unp, 1);
    fs.writeFileSync('./database/owner.json', JSON.stringify(owner));
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

			case 'qc':{
			
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				let teks = m.quoted && m.quoted.text ? m.quoted.text : text ? text : "";
				if (!teks) return newReply('Input teksnya!')
				const finalText = `${teks}`;
				const sender = m.sender
				const username = await haruka.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await haruka.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => './media/avatar_contact.png')
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
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await haruka.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			break;

			case 'play': 
			case 'ytplay': {
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
			if (!text) return newReply(`Example : ${prefix + command} Lagu sad`);
				try {
					let search = await yts(`${text}`);
					if (!search || search.all.length === 0) return newReply(`*Lagu tidak ditemukan!* ☹️`);
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📛 Description : ${description}`;
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { 
						quoted: m 
					});
					const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=audio`);
					if (!response || !response.result) {
						return newReply(`*Audio tidak ditemukan!* ☹️`);
					}
					await haruka.sendMessage(m.chat, { 
						audio: { url: response.result }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`
					}, { 
						quoted: m 
					});
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
			}
			break;

			case 'ytaudio': 
			case 'ytmp3': {
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					let search = await yts(text);
					if (!search || search.all.length === 0) return newReply(`*Video tidak ditemukan!* ☹️`);
					let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
					let caption = `「 *YOUTUBE AUDIO* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📛 Description : ${description}`
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { 
						quoted: m 
					});
					const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=audio`);
					if (!response || !response.result) {
						return newReply(`*Audio tidak ditemukan!* ☹️`);
					}
					await haruka.sendMessage(m.chat, { 
						audio: { url: response.result }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`
					}, { 
						quoted: m 
					});
				} catch (err) {
					console.error(err);
					newReply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
				}
			}
			break;

			case 'ytmp4': 
			case 'ytvideo': 
			case 'ytv': {
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				if (!text) return newReply(`Contoh: ${prefix + command} https://youtu.be/videoId`);
				if (!text.includes('youtu')) return newReply(`Link yang kakak masukkan bukan link YouTube! 😅`);
				try {
					const vidIdMatch = text.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
					const vidId = vidIdMatch ? vidIdMatch[1] : null;
					if (!vidId) {
						return newReply(`Gagal mengekstrak ID video dari link! 😓`);
					}
					let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
					if (!search) return newReply(`*Video tidak ditemukan!* ☹️`);
					let { title, url, image } = search;
					let caption = `「 *YOUTUBE VIDEO* 」\n\n💬 Title : ${title}\n🔗 URL Video : ${url}`
					await haruka.sendMessage(m.chat, {
						image: { url: image }, 
						caption: caption
					}, { quoted: m });
					const response = await fetchJson(`https://api.khaliddesu.my.id/api/savetube?url=${url}&type=video`);
					if (!response || !response.result) {
						return newReply(`*Video tidak ditemukan!* ☹️`);
					}
					await haruka.sendMessage(m.chat, { 
						video: { url: response.result }, 
						caption: '✅ *Video berhasil diunduh!*'
					}, { quoted: m });
				} catch (err) {
					console.error(err);
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
			const emojis = ['1️⃣', '2️⃣', '3️⃣', '✅',]; // Urutan emoji
let delay = 0;

emojis.forEach((emoji, index) => {
  setTimeout(() => {
    haruka.sendMessage(m.chat, {        
      react: {
        text: emoji, // Emoji sesuai urutan
        key: m.key,
      }
    });
  }, delay);
  delay += 500; // Tambahkan jeda 2 detik untuk setiap reaksi
});
				let hehe = `
┌─── *🌟 Umum 🌟*
│ · 📛 ${prefix}hi🚫
│ · 📛 ${prefix}info🚫
│ · 📛 ${prefix}support🚫
│ · 📛 ${prefix}rules🚫
│ · 📛 ${prefix}help🚫
│ · 📛 ${prefix}runtime 🚫
│ · 📛 ${prefix}script
└───────────  
${readmore}
┌─── *👑 Pemilik 👑*
│ · 🔑 ${prefix}session
│ · 🔑 ${prefix}join
│ · 🔑 ${prefix}shutdown
│ · 🔑 ${prefix}restart
│ · 🔑 ${prefix}autoread
│ · 🔑 ${prefix}autobio
│ · 🔑 ${prefix}block 62××
│ · 🔑 ${prefix}unblock 62××
│ · 🔑 ${prefix}addowner 62××
│ · 🔑 ${prefix}delowner 62××
│ · 🔑 ${prefix}jpm
│ · 🔑 ${prefix}post
│ · 🔑 ${prefix}pushcontact
│ · 🔑 ${prefix}pushcontactgc
│ · 🔑 ${prefix}pushcontact2
│ · 🔑 ${prefix}pushcontact3
│ · 🔑 ${prefix}getcontact
│ · 🔑 ${prefix}savecontact
│ · 🔑 ${prefix}sendcontact
│ · 🔑 ${prefix}contacttag
└───────────  

┌─── *👥 Grup 👥*
│ · 🛡️ ${prefix}welcome on/off
│ · 🛡️ ${prefix}kick @/tag
│ · 🛡️ ${prefix}antilink on/off
│ · 🛡️ ${prefix}add 62×××
│ · 🛡️ ${prefix}promote @/tag
│ · 🛡️ ${prefix}demote @/tag
│ · 🛡️ ${prefix}setdesc
│ · 🛡️ ${prefix}setppgc
│ · 🛡️ ${prefix}grup open/close
│ · 🛡️ ${prefix}editinfo open/close
│ · 🛡️ ${prefix}linkgc 🚫
│ · 🛡️ ${prefix}resetlink
│ · 🛡️ ${prefix}listonline 🚫
└───────────  

┌─── *🎮 Seru-Seruan 🎮*
│ · 🎲 ${prefix}truth
│ · 🎲 ${prefix}dare
│ · 🎲 ${prefix}couple 🚫
│ · 🎲 ${prefix}uglycheck 🚫
│ · 🎲 ${prefix}lovelycheck 🚫
│ · 🎲 ${prefix}prettycheck 🚫
│ · 🎲 ${prefix}cutecheck 🚫
│ · 🎲 ${prefix}gaycheck 🚫
│ · 🎲 ${prefix}greatcheck 🚫
└───────────  

┌─── *🎵 Media 🎵*
│ · 🎧 ${prefix}carivideoyt
│ · 🎧 ${prefix}carivideotiktok
│ · 🎧 ${prefix}toimg
│ · 🎧 ${prefix}remini
│ · 🎧 ${prefix}tourl
│ · 🎧 ${prefix}tiktok [nowatermark]
│ · 🎧 ${prefix}play
│ · 🎧 ${prefix}ytmp3
│ · 🎧 ${prefix}ytmp4
│ · 🎧 ${prefix}s
│ · 🎧 ${prefix}swm 🚫
│ · 🎧 ${prefix}qc
│ · 🎧 ${prefix}brat
└─────────── 
`.trim();
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								body: proto.Message.InteractiveMessage.Body.create({
									text: hehe
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: ownerName
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									...(await prepareWAMessageMedia({ image: thumb }, { upload: haruka.waUploadToServer })), 
									title: '_"Selamat datang di menu bot! Aku TH ai, siap bantu kapan saja! Kalau ada yang ingin ditanya atau butuh bantuan, tinggal bilang ya! 😊 Yuk, kita jelajahi dan belajar bareng-bareng! Semoga hari kamu menyenangkan! 🤗"_\n',
									subtitle: '',
									hasMediaAttachment: false
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [
										{
											"name": "cta_url",
											"buttonParamsJson": `{\"display_text\":\"👑 Owner Contact\",\"url\":\"https://api.whatsapp.com/send?phone=6285655636044\",\"merchant_url\":\"https://www.google.com\"}`
										}
									],
								}),
								contextInfo: {
									mentionedJid: [m.sender], 
									forwardingScore: 1,
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: saluran,
										newsletterName: saluranName,
										serverMessageId: 143
									}
								}
							})
						}
					}
				}, { quoted: m })
			haruka.sendMessage(m.chat, {        
      react: {
      text: '✅',
      key: m.key,
    }
  })

				await haruka.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
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

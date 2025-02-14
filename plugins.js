require('./config')
const { default: makeWASocket, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto, delay } = require("@whiskeysockets/baileys");
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const moment = require('moment-timezone');
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, await, sleep, reSize } = require('./lib/myfunc')
const NodeCache = require("node-cache")
const readline = require("readline")

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

const phoneNumber = ownerNumber;
const owner = JSON.parse(fs.readFileSync('./database/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./database/contacts.json'));
const usePairingCode = true;
const session = `./${sessionName}`;

const question = (text) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve) => {
		rl.question(text, resolve)
	});
};

async function requestKey() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question("\n🔑 Masukkan key untuk menjalankan bot: ", (input) => {
            rl.close();
            resolve(input);
        });
    });
}

// Fungsi untuk memverifikasi key sebelum bot berjalan
async function verifyKey() {
    const requiredKey = "luxxy"; // Key yang harus dimasukkan oleh pengguna
    const keyInput = await requestKey();

    if (keyInput !== requiredKey) {
        console.log("❌ Key salah! Akses ditolak.");
        process.exit(1); // Menghentikan program jika key salah
    }

    console.log("✅ Key benar! Bot akan berjalan...\n");
}


async function startHaruka() { 
    await verifyKey() 
	const { state, saveCreds } = await useMultiFileAuthState(session);
	const haruka = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000, 
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true, 
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage 
				|| message.templateMessage
				|| message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({ level: 'fatal' }),
		auth: { 
			creds: state.creds, 
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({ 
				level: 'silent', 
				stream: 'store' 
			})), 
		}
	});

async function requestKey() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question("\n🔑 Masukkan key untuk menjalankan bot: ", (input) => {
            rl.close();
            resolve(input);
        });
    });
}

// Fungsi untuk memverifikasi key sebelum bot berjalan
async function verifyKey() {
    const requiredKey = "luxxy"; // Key yang harus dimasukkan oleh pengguna
    const keyInput = await requestKey();

    if (keyInput !== requiredKey) {
        console.log("❌ Key salah! Akses ditolak.");
        process.exit(1); // Menghentikan program jika key salah
    }

    console.log("✅ Key benar! Bot akan berjalan...\n");
}

async function start() {
await verifyKey()
}
	if (!haruka.authState.creds.registered) {
		const phoneNumber = await question('\n\n\nSilahkan masukin nomor Whatsapp Awali dengan 62:\n');
		const code = await haruka.requestPairingCode(phoneNumber.trim())
		console.log(chalk.white.bold(` Kode Pairing Bot Whatsapp kamu :`), chalk.red.bold(`${code}`))
	}
haruka.ev.on('call', async (callData) => {
		if (anticall) {
			let botNumber = await haruka.decodeJid(haruka.user.id);
			console.log(callData);
			for (let user of callData) {
				if (!user.isGroup && user.status === "offer") {
					try {
						let callType = user.isVideo ? '📹 Video Call' : '📞 Voice Call';
						let warningMessage = `⚠️ *Ups, Kak! Mora gak bisa menerima panggilan ${callType}.*\n\n😔 Maaf banget, @${user.from.split('@')[0]}, panggilan seperti ini bisa bikin bot error. Kakak akan diblokir sementara ya...\n\n📲 Silakan hubungi *Owner* untuk membuka blokir.`;
						await haruka.rejectCall(user.id, user.from);
						await haruka.sendMessage(user.from, { text: warningMessage, mentions: [user.from] });
						await haruka.sendMessage(
							user.from, 
							{
								contacts: {
									displayName: "Owner",
									contacts: contacts
								}
							}
						);
						await sleep(5000);
						await haruka.updateBlockStatus(user.from, "block");
						console.log(`🔒 Pengguna ${user.from} berhasil diblokir karena melakukan panggilan.`);
					} catch (err) {
						console.error(`❌ Gagal memproses panggilan dari ${user.from}:`, err);
					}
				}
			}
		}
	});
	haruka.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

        if (reason === DisconnectReason.badSession) {
            console.log("❌ Aduh, sesi-nya bermasalah nih, kak! Hapus sesi dulu terus coba lagi ya~ 🛠️");
            process.exit();
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log("🔌 Yahh, koneksinya putus... Sabar ya, Mora coba sambungin lagi! 🔄");
            startHaruka();
        } else if (reason === DisconnectReason.connectionLost) {
            console.log("📡 Oops, koneksi ke server hilang, kak! Tunggu bentar, Mora sambungin lagi ya~ 🚀");
            startHaruka();
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log("🔄 Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, kak! 💻");
            process.exit();
        } else if (reason === DisconnectReason.loggedOut) {
            console.log("🚪 Kak, perangkatnya udah keluar... Hapus folder sesi terus scan QR lagi ya! 📲");
            process.exit();
        } else if (reason === DisconnectReason.restartRequired) {
            console.log("🔄 Sebentar ya, Mora lagi mulai ulang koneksinya biar lancar lagi! ♻️");
            startHaruka();
        } else if (reason === DisconnectReason.timedOut) {
            console.log("⏳ Hmm, koneksinya timeout nih, kak! Mora coba sambungin ulang ya~ 🌐");
            startHaruka();
        } else {
            console.log(`❓ Eh, alasan disconnect-nya gak jelas nih, kak... (${reason} | ${connection}) 🤔 Tapi tenang, Mora coba sambungin lagi ya! 💪`);
            startHaruka();
        }
    } else if (connection === "open") {
        console.log(
            chalk.white.bold('\n🎉 Horeee! Berhasil terhubung ke nomor:'),
            chalk.yellow(JSON.stringify(haruka.user, null, 2))
        );
        console.log('✅ Semua sudah siap, kak! Selamat menjalankan bot-nya ya~ 🥳🎈');

        // Mengirim pesan ke nomor 6285655636044
        const nomorTujuan = "6285655636044@s.whatsapp.net"; // Format ID WhatsApp
        function runtime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    let result = "";

    if (hours > 0) {
        result += `${hours} jam`;
    }
    if (minutes > 0) {
        result += (result ? ", " : "") + `${minutes} menit`;
    }
    if (secs > 0 || (!hours && !minutes)) {
        result += (result ? ", " : "") + `${secs} detik`;
    }

    return result;
}

const pesan = `Halo Developer! Bot telah berhasil terhubung! 🎉\n\nBot aktif selama: *${runtime(process.uptime())}*`;

console.log(pesan);

        try {
            await haruka.sendMessage(nomorTujuan, { text: pesan });
            console.log("✅ Pesan berhasil dikirim ke nomor tujuan!");
        } catch (error) {
            console.error("❌ Gagal mengirim pesan:", error);
        }
    }
});

    haruka.ev.on('messages.upsert', async chatUpdate => {
        try {
            const msg = chatUpdate.messages[0]
            if (!msg.message) return
            msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
            if (msg.key && msg.key.remoteJid === 'status@broadcast'){
                await haruka.readMessages([msg.key]) 
            }

            if (!haruka.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
            if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
            const m = smsg(haruka, msg, store)
            require("./case")(haruka, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    haruka.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    haruka.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = haruka.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    haruka.getName = (jid, withoutContact = false) => {
        id = haruka.decodeJid(jid)
        withoutContact = haruka.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = haruka.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === haruka.decodeJid(haruka.user.id) ?
         haruka.user :
         (store.contacts[id] || {})
         return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
//ubah ke false untuk mode self
haruka.public = true

haruka.serializeM = (m) => smsg(haruka, m, store)

haruka.ev.on('creds.update', saveCreds)
haruka.ev.on("messages.upsert",() => { })

haruka.sendText = (jid, text, quoted = '', options) => haruka.sendMessage(jid, {
text: text,
...options
}, {
quoted,
...options
})
haruka.sendTextWithMentions = async (jid, text, quoted, options = {}) => haruka.sendMessage(jid, {
text: text,
mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
...options
}, {
quoted
})
haruka.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await haruka.sendMessage(jid, {
sticker: {
url: buffer
},
...options
}, {
quoted
})
return buffer
}
haruka.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await haruka.sendMessage(jid, {
sticker: {
url: buffer
},
...options
}, {
quoted
})
return buffer
}
haruka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

	haruka.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
	try {
  const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ❗ ]"
      }
    }
  }
  if (global.welcome = true) {
    const metadata = await haruka.groupMetadata(id)
    let teks
    for(let n of participants) {
      let profile;
      try {
        profile = await haruka.profilePictureUrl(n, 'image');
      } catch {
        profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
      }
      let imguser = await prepareWAMessageMedia({
        image: {
          url: profile
        }
      }, {
        upload: haruka.waUploadToServer
      })    
   
if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup\n` : ``
        let asu = await haruka.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })

      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup\n` : ""
        let asu = await haruka.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await haruka.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await haruka.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
       
      }
    }
  }
} catch (e) {}
});

haruka.ev.on('groups.update', async (update) => {
		try {
		const data = update[0]
		const qtext = {
    key: {
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net"
    },
    message: {
      "extendedTextMessage": {
        "text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ❗ ]"
      }
    }
  }
		if (data?.inviteCode) {      
		let botNumber = haruka.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
  await haruka.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.desc) {
		let botNumber = haruka.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await haruka.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *memperbarui* deskripsi grup`, mentions: [participant]}, {quoted: qtext})
		}
		
		if (data?.subject) {
		let botNumber = haruka.user.id.split(":")[0]
		let participant = data.author
		if (participant.split("@")[0] === botNumber) return      
		await haruka.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mengganti* nama grup`, mentions: [participant]}, {quoted: qtext})
		}		
		
		
		} catch (e) {
		}
});

haruka.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
}
}
return startHaruka()

let file = require.resolve(__filename);
fs.watchFile(file, async () => {
    fs.unwatchFile(file);
    console.log("\n⚠️ Perubahan terdeteksi pada file! Masukkan key kembali untuk melanjutkan.");

    await verifyKey(); // Minta key sebelum reload file

    console.log("🔄 Memuat ulang bot...");
    delete require.cache[file];
    require(file);
});

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
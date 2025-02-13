const fs = require('fs')
const chalk = require('chalk')
const { version } = require("./package.json")

global.ownerNumber = '6285655636044';
global.ownerName = 'luxxy-XD';
global.botName = 'TH-AI';

global.packName = 'TH-AI';
global.author = 'luxxy-XD';
global.themeemoji = '🧩';
global.footer = 'TH-AI';
global.prefa = ['.'];


global.website = 'https://jangan lupa join saluran';
global.saluran = '120363393132770871@newsletter'
global.saluranName = 'INFO BOT STIKER BRAT'
global.versi = version
global.idch = "120363385593347079@newsletter"
global.sessionName = 'TEAMTH';

global.autovn = false
global.autotype = false
global.autoread = false
global.autobio = false
global.welcome = false

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'TH-Ai harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik bot yang dapat menggunakan perintah ini!',
	premium: 'Fitur ini khusus pengguna premium 🌟! Mau upgrade? Hubungi kami di wa.me/6285655636044',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Luxxy lagi proses nih! ⏳🤗'
};

global.pathimg = fs.readFileSync('./Media/favicon.png');
global.thumb = fs.readFileSync('./Media/TH-AI.png');

global.thumbUrl = 'https://files.catbox.moe/y95cgr.jpg';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})

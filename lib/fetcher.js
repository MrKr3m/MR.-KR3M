const fetch = require('node-fetch')
const fs = require('fs')
const { spawn } = require("child_process")
const ff = require('fluent-ffmpeg')
const { getrandom } = require('./functions')

exports.getbase64 = getbase64 = async (url) => {
    const response = await fetch(url, { headers: { 'user-agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new error(`unexpected response ${response.statustext}`);
    const buffer = await response.buffer();
    const videobase64 = `data:${response.headers.get('content-type')};base64,` + buffer.tostring('base64');
    if (buffer)
        return videobase64;
};

exports.getbuffer = getbuffer = async (url) => {
    const res = await fetch(url, {headers: { 'user-agent': 'okhttp/4.5.0'}, method: 'get' })
    const anu = fs.readfilesync('./src/emror.jpg')
    if (!res.ok) return { type: 'image/jpeg', result: anu }
    const buff = await res.buffer()
    if (buff)
        return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchjson = fetchjson = (url, options) => new promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchtext = fetchtext = (url, options) => new promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})
exports.kyun = (seconds) =>{
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = math.floor(seconds / (60 * 60));
    var minutes = math.floor(seconds % (60 * 60) / 60);
    var seconds = math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)}jam - ${pad(minutes)}menit -  ${pad(seconds)}detik\n\n 「 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 」`
}
exports.createexif = (pack, auth) =>{
    const code = [0x00,0x00,0x16,0x00,0x00,0x00]
    const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
    let len = json.stringify(exif).length
    if (len > 256) {
        len = len - 256
        code.unshift(0x01)
    } else {
        code.unshift(0x00)
    }
    if (len < 16) {
        len = len.tostring(16)
        len = "0" + len
    } else {
        len = len.tostring(16)
    }
    //len = len < 16 ? `0${len.tostring(16)}` : len.tostring(16)
    const _ = buffer.from([0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = buffer.from(len, "hex")
    const ___ = buffer.from(code)
    const ____ = buffer.from(json.stringify(exif))
    fs.writefilesync('./stik/data.exif', buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err)
        if (err) return console.error(err)
        return `./stik/data.exif`
    })

}
exports.modstick = (media, client, mek, from) => {
    out = getrandom('.webp')
    try {
        console.log(media)
        spawn('webpmux', ['-set','exif', './stik/data.exif', media, '-o', out])
        .on('exit', () => {
            client.sendmessage(from, fs.readfilesync(out), 'stickermessage', {quoted: mek})
            fs.unlinksync(out)
            fs.unlinksync(media)
        })
    } catch (e) {
        console.log(e)
        client.sendmessage(from, 'terjadi keslahan', 'conversation', { quoted: mek })
        fs.unlinksync(media)
    }
}

//exports.getbase64 = getbase64;

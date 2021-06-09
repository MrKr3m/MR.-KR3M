// MAU RECODE? ERROR? MAMPUS!!!
//JANGAN DI JUAL AWAS LU 
const  
        {		
                 WAConnection,		
                 MessageType,		
                 Presence,	
                 MessageOptions,		
                 Mimetype,		
                 WALocationMessage,		
                 WA_MESSAGE_STUB_TYPES,	
                 WA_DEFAULT_EPHEMERAL,		
                 ReconnectMode,		
                 ProxyAgent,		
                 GroupSettingChange,		
                 waChatKey,		
                 mentionedJid,		
                 processTime,	
         } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline') 

banChats = true
offline = false
targetpc = '6282293271747'
owner = '6282293271747'
fake = 'X-BOT'
numbernye = '0'
waktu = '-'
alasan = '-'
//=================================================//
module.exports = bot = async (bot, mek) => {
       try { 
       if (!mek.hasNewMessage) 
       return mek = mek.messages.all()[0]		
               if (!mek.message) return		
               if (mek.key && mek.key.remoteJid == 'status@broadcast') return		
               global.blocked 	
               mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 	
               const content = JSON.stringify(mek.message)		
               const from = mek.key.remoteJid		
               const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType		
               const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss') 
               const type = Object.keys(mek.message)[0] 
               const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase() 
               const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-' 	 	
               body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
               budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
               const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()				
               const args = body.trim().split(/ +/).slice(1)
       	       const isCmd = body.startsWith(prefix)
	       const q = args.join(' ')		
               const botNumber = hexa.user.jid		
               const botNumberss = hexa.user.jid + '@c.us'		
               const isGroup = from.endsWith('@g.us')		
               let sender = isGroup ? mek.participant : mek.key.remoteJid		
// const isSelfNumber = config.NomorSELF		// const isOwner = sender.id === isSelfNumber		const totalchat = await hexa.chats.all()		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''		const groupName = isGroup ? groupMetadata.subject : ''		const groupId = isGroup ? groupMetadata.jid : ''		const groupMembers = isGroup ? groupMetadata.participants : ''		const groupDesc = isGroup ? groupMetadata.desc : ''		const groupOwner = isGroup ? groupMetadata.owner : ''		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false		const isGroupAdmins = groupAdmins.includes(sender) || false const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') } const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'

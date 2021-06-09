// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
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
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')const { webp2mp4File} = require('./lib/webp2mp4')
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

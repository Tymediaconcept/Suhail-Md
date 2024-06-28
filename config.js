const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2438100368316";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_19_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDgwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOC9zSi9QYzN1b0l3dml1MkhKZWdKVE0xRjJET0pFQ3hUc1pmd3lKV0lsTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTAwMzY4MzE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNEI3Mjk0RjNFMTJCRkRENjFBOUZFRTlBMUNFNDY5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1OTUxNzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVlNUmg4QXlRMnlDT1BEbWNMc1dpQVwiLFxuICBcInBob25lSWRcIjogXCI1OGNlMWYzOC1hNTY4LTRhMjQtOTFlOC1iODgzYWFhOWM5NjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgNzQsXG4gICAgICAxOTAsXG4gICAgICAxNzMsXG4gICAgICA4NCxcbiAgICAgIDE5NSxcbiAgICAgIDIyOSxcbiAgICAgIDE3LFxuICAgICAgMTgzLFxuICAgICAgMTgsXG4gICAgICAyMTYsXG4gICAgICAxNjAsXG4gICAgICAyMjEsXG4gICAgICAxNTcsXG4gICAgICAzOCxcbiAgICAgIDE1NSxcbiAgICAgIDEwMyxcbiAgICAgIDIzMSxcbiAgICAgIDcyLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMjIwLFxuICAgICAgMTcwLFxuICAgICAgMjIwLFxuICAgICAgMTQyLFxuICAgICAgMTA3LFxuICAgICAgNjAsXG4gICAgICAxMzQsXG4gICAgICAxNzgsXG4gICAgICAyMDgsXG4gICAgICA1NSxcbiAgICAgIDE3NCxcbiAgICAgIDE2NCxcbiAgICAgIDI0MCxcbiAgICAgIDI0MCxcbiAgICAgIDcxLFxuICAgICAgMjAwLFxuICAgICAgMjI4LFxuICAgICAgMjQ0LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNGRjNROFZYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwMzY4MzE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUWSBNZWRpYSBDb25jZXB0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxODY4ODYyMzAxNzE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZVZodmdIRUpuaCs3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZVeG1XSnFyNVNaT3lMVUFhTDBSVjN4SitTK3R4NGsxTU5qMGtySG44SGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzBucjkrVnZ1U1plUlNFSWdIMXF5VTUyWm5uM01nQTNzY1JrWWppbVpoSVEyMCswTzdSSnNkNXVVM1BOVjloUXVDdC9ZY1VCcGF6VnRoYm9kOVluQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRTJ3aDNUSTRzNnN0bm1wYmNMckdRSlcweVB0QWRDNFpqT0FZNFRLSllHQU1KQ2xDUHZJa3JqVSt2aS85RG5OWUgyclUyQkhoVEhGb3YxMkdZU3F3akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMDM2ODMxNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTk1MTY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

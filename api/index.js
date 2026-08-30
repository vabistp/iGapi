module.exports = (req, res) => {
    // Set headers for Server-Sent Events (SSE) and UTF-8 encoding
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
// =======================================================
// 1. INPUT YOUR N CUSTOM TEXTS HERE IN THIS ARRAY
// =======================================================
const myTextList = [
    "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <⚜️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧞>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <👑>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <💢>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🔮>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🍥>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧊>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <❄️>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <🧃>",
  "{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{variables.target}} 𝐓ᴇʀᴀ 𝐁ᴀᴀᴩ {{variables.keng}} सरकार <😮‍💨>",
    // Add all your N custom text lines here...
];

// Group rename configuration
const GROUP_RENAME_TEXT = "{{variables.keng}} KYNG SPMS ⚜️";

// Infinite Stream Endpoint (Sends 6 requests per second)
app.get('/api/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let textIndex = 0;

    // 1000ms / 6 = 166.6ms interval (exactly 6 requests/sec)
    const timer = setInterval(() => {
        requestCount++;
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        let payload;

        // Triggers ONLY after all N messages (indices 0 to N-1) have been sent
        if (textIndex >= myTextList.length) {
            payload = JSON.stringify({
                action: "rename_group",
                message: GROUP_RENAME_TEXT,
                delay: 700,
                pattern: "think",
                requests: requestCount,
                totalEmojis: requestCount * 6,
                uptime: uptime,
                success: true
            });

            textIndex = 0; // Reset to start sending the N messages again
        } else {
            const currentText = myTextList[textIndex];

            payload = JSON.stringify({
                action: "send_message",
                message: currentText,
                delay: 700,
                pattern: "think",
                requests: requestCount,
                totalEmojis: requestCount * 6,
                uptime: uptime,
                success: true
            });

            textIndex++;
        }

        res.write(`data: ${payload}\n\n`);
    }, 1000 / 6);

    req.on('close', () => clearInterval(timer));
});

app.listen(PORT, () => {
    console.log(`Live stream running at http://localhost:${PORT}/api/stream`);
});

// ================================
// CONFIG
// ================================
const webhookURL = "https://discord.com/api/webhooks/1493365597763797143/vwQHZhmopuSXdu-yzJXbHtYWUk1MA_OMMYDg2-FH1iF7gnAMz5CO4FdxmWD4j3YeoIZ9";
const ip = "excellentsmp.mineserver.uno";

// ================================
// SEND RANK PURCHASE REQUEST
// ================================
function sendRequest(){
  const discord = document.getElementById("discord").value.trim();
  const mc = document.getElementById("minecraft").value.trim();
  const rank = document.getElementById("rank").value;

  if(!discord || !mc){
    alert("Fill all fields");
    return;
  }

  fetch(webhookURL,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      content:`🛒 **Rank Request**\nDiscord: ${discord}\nMinecraft: ${mc}\nRank: ${rank}`
    })
  })
  .then(()=>alert("Request sent!"))
  .catch(()=>alert("Failed to send request"));
}

// ================================
// SEND ITEM PURCHASE REQUEST
// ================================
function sendItem(){
  const discord = document.getElementById("discord2").value.trim();
  const mc = document.getElementById("minecraft2").value.trim();

  if(!discord || !mc){
    alert("Fill all fields");
    return;
  }

  fetch(webhookURL,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      content:`⛏️ **Item Purchase Request**\nItem: Amethyst Pickaxe\nDiscord: ${discord}\nMinecraft: ${mc}\nPrice: 4.99 GEL`
    })
  })
  .then(()=>alert("Request sent!"))
  .catch(()=>alert("Failed to send request"));
}

// ================================
// SERVER STATUS
// ================================
fetch("https://api.mcsrvstat.us/3/" + ip)
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("serverStatus");

    if(!el) return;

    if(data.online){
      el.innerHTML = `🟢 Online • ${data.players.online}/${data.players.max} players`;
    } else {
      el.innerHTML = "🔴 Offline";
    }
  })
  .catch(() => {
    const el = document.getElementById("serverStatus");
    if(el) el.innerHTML = "Unavailable";
  });

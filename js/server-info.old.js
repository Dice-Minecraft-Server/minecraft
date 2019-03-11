MinecraftAPI.getServerStatus('mc.sheiun.io', (err, status) => {
    if (err) {
        return // document.querySelector('.server-status').innerHTML = '讀取錯誤';
    }
    document.querySelector('[server-status]').innerHTML += status.online ? '<a tabindex="-1"><i class="lni-check-mark-circle"></i></a>' : '<a tabindex="-1"><i class="lni-ban" style="color:red"></a>';
    document.querySelector('[server-players]').innerHTML = `<b><i class="lni-cog"> </i>版本:</b> <a tabindex="-1">${status.server.name}</a> <i class="lni-users"> </i><b>人數:</b> <a tabindex="-1">${status.players.now} / ${status.players.max}</a>`
});
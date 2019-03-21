fetch('https://api.mcsrvstat.us/1/mcs.sheiun.me').then(res => res.json()).then(status => {
    let online = false
    if (status.hasOwnProperty('players')) {
        online = true
    }

    document.querySelector('[server-status]').innerHTML = online ? '<a tabindex="-1"><i class="lni-check-mark-circle"></i></a>' : '<a tabindex="-1"><i class="lni-ban" style="color:red"></a>'

    if (online) {
        let player_list = typeof status.players.list !== 'undefined' ? status.players.list.join(' ') : ''
        document.querySelector('[server-players]').innerHTML = `<b><i class="lni-cog"> </i>版本:</b> <a tabindex="-1">${status.version}</a> <i class="lni-users"> </i><b>人數:</b> <span class="tippy" data-tippy-content="${player_list}"><a tabindex="-1">${status.players.online} / ${status.players.max}</a></span>`
        tippy('.tippy')
        document.querySelector('[server-motd]').innerHTML = `<i class="lni-bubble"></i> ${status.motd.html}`
        document.querySelector('[server-motd-second]').innerHTML = status.motd.html
    } else {
        document.querySelector('[server-players]').innerHTML = ''
        document.querySelector('[server-motd]').innerHTML = ''
    }
})

import yt_dlp

ydl_opts = {
    'writeautomaticsub': True,
    'subtitlesformat': 'srt',
    'skip_download': True,
    'verbose': True
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://cdnapisec.kaltura.com/html5/html5lib/v2.101/mwEmbedFrame.php/p/2019031/uiconf_id/32364501/entry_id/1_dybztqe0?wid=_2019031&iframeembed=true&playerId=kaltura_player&entry_id=1_dybztqe0&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[leadWithHTML5]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=1&flashvars[Kaltura.addCrossoriginToIframe]=true&&wid=1_r3igosqj'])
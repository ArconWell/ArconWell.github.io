var player = $('#main-page-player-02')[0]
player.volume = 0.4

$('#main-page-player-wrapper-02').on('click', '.track', function () {
    var track = $(this)
    if (track.hasClass('active')) {
        track.removeClass('active')
        player.pause()
    } else {
        playThisTrack(track)
    }
})

function playThisTrack(track) {
    track.addClass('active').siblings().removeClass('active');

    player.src = track.data('src')
    player.play()
}

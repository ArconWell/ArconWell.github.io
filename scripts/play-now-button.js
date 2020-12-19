$(function () {
    // при нажатии на кнопку
    $('#play-now-button').click(function () {
        // переместиться к альбому
        $("html, body").animate({
            scrollTop: $("#music-album").offset().top
        }, 1000);
    })
})
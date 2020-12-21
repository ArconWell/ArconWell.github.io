$(document).ready(function () {
    $("a.gallery, a.iframe").fancybox();

    url = $("a.modalbox").attr('href').replace("for_spider", "content2");
    $("a.modalbox").attr("href", url);
    $("a.modalbox").fancybox({
        "frameWidth": 400,
        "frameHeight": 400

    });

});
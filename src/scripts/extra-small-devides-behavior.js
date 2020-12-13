var capture = document.getElementById('new-album-capture');

if (window.matchMedia("(max-device-width: 320px)").matches){
    capture.classList.add('display-4');
} else {
    capture.classList.remove('display-4');
}
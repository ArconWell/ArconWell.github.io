var capture = document.getElementById('new-album-capture');

if (window.matchMedia("(max-width: 320px)").matches){
    capture.classList.remove('display-3');
} else {
    capture.classList.add('display-3');
}
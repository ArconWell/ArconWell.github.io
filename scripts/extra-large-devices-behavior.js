var capture = document.getElementById('nav');
var brand = document.getElementById('nav-brand');

if (window.matchMedia("(min-device-width: 3000px)").matches) {
    capture.classList.add('display-4');
    brand.classList.add('display-4');
} else {
    capture.classList.remove('display-4');
    brand.classList.remove('display-4');
    
}
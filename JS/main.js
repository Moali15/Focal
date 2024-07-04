
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
delay: 2000,
disableOnInteraction: false,
    },
    pagination: {
el: '.swiper-pagination',
clickable: true,
    },
});

document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.remove('hidden');
});

document.getElementById('closeMenuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.add('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('.sticky-header');
    var headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
let $ = document.querySelector.bind(document);

$('.menu-open').onclick = function () {
    document.documentElement.classList.add('menu-active');
};

$('.menu-close').onclick = function () {
    document.documentElement.classList.remove('menu-active');
};

document.documentElement.onclick = function (event) {
    if (event.target == document.documentElement) {
        document.documentElement.classList.remove('menu-active');
    }
};
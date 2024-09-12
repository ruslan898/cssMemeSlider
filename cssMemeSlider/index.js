const slider = document.querySelector('.slider');
const navItems = document.querySelectorAll('.nav-item');
const slides = document.querySelectorAll('.slider-image');
const headers = document.querySelectorAll('.header');
const slideCount = slides.length;
let slideIndex = 0;



// Устанавливаем обработчики событий для кнопок
navItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        if (item.classList.contains('nav-item_active')) {
            return;
        }
        removeActiveClass(navItems, 'nav-item_active');
        removeActiveClass(slides, 'slider-image_active');
        removeActiveClass(headers, 'header_active');
        item.classList.add('nav-item_active');
        slides[index].classList.add('slider-image_active');
        headers[index].classList.add('header_active');
    })
}) 



function removeActiveClass(elements, className) {
    elements.forEach((item) => {
        if (item.classList.contains(className)) {
            item.classList.remove(className);
        }
    })
}


function addActiveClass(elements, className) {
    elements.forEach((item) => {
        if (item.classList.contains(className)) {
            item.classList.remove(className);
        }
    })
}
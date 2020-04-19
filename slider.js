/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("completed__image-item");
    const dots = document.getElementsByClassName("dot-item");
    const links = document.getElementsByClassName("project-list__item");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    links[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);
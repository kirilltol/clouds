let first = document.querySelector('.q1');
let second = document.querySelector('.q2');
let third = document.querySelector('.q3');
let fouth = document.querySelector('.q4');
let fifth = document.querySelector('.q5');

first.onclick = function () {
    first.classList.toggle('close');
    first.classList.toggle('open');
}
second.onclick = function () {
    second.classList.toggle('close');
    second.classList.toggle('open');
}

third.onclick = function () {
    third.classList.toggle('close');
    third.classList.toggle('open');
}

fouth.onclick = function () {
    fouth.classList.toggle('close');
    fouth.classList.toggle('open');
}

fifth.onclick = function () {
    fifth.classList.toggle('close');
    fifth.classList.toggle('open');
}


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slider');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;

prev.addEventListener('click', () => showSlides(slideIndex += -1));
next.addEventListener('click', () => showSlides(slideIndex += 1));

showSlides();

function currentSlide(index) {
    choiseIndex(index);
}

function showSlides() {
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length
    }
    choiseIndex(slideIndex);
}

function choiseIndex(inx) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[inx - 1].classList.add('active')
    slides[inx - 1].style.display = 'flex';
}
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => currentSlide(i + 1))
}


let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    var i;
    let dots2 = document.querySelectorAll('.dott');
    var slid = document.getElementsByClassName("otziv_txt");
    for (i = 0; i < slid.length; i++) {
        slid[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slid.length) {
        slideIndex3 = 1
    }
    slid[slideIndex3 - 1].style.display = "block";

    for (i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove('active2');
    }

    if (slideIndex3 > dots2.length) {
        slideIndex3 = 1
    }
    dots2[slideIndex3 - 1].classList.add('active2')

    setTimeout(showSlides3, 3700); // Change image every 2 seconds

}


let slides2 = document.querySelectorAll('.otziv_txt');
let dots2 = document.querySelectorAll('.dott');
let slideIndex2 = 1;

showSlides2();

function currentSlide2(index2) {
    choiseIndex2(index2);
}

function showSlides2() {
    if (slideIndex2 > slides2.length) {
        slideIndex2 = 1;
    }
    if (slideIndex2 < 1) {
        slideIndex2 = slides2.length
    }
    choiseIndex2(slideIndex2);
}

function choiseIndex2(inx2) {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }
    for (let i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove('active2');
    }
    dots2[inx2 - 1].classList.add('active2')
    slides2[inx2 - 1].style.display = 'block';
}
for (let i = 0; i < dots2.length; i++) {
    dots2[i].addEventListener('click', () => currentSlide2(i + 1))
}

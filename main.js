const karusel = document.querySelector(".karusel_main")
let offset = 0

function show() {
    offset -= 50
    karusel.style.transform = `translateX(${offset}px`;
    console.log("asd")
}
setInterval(show, 3000);

// const karusel = document.querySelector(".karusel_main");
// let offset = 0;
// const slideWidth = 50;  // Сдвиг в пикселях
// const intervalTime = 3000;  // Интервал в миллисекундах

// function show() {
//     offset -= slideWidth;
//     karusel.style.transform = `translateX(${offset}px)`;
// }

// // Используем setInterval для вызова функции show каждые intervalTime миллисекунд
// setInterval(show, intervalTime);
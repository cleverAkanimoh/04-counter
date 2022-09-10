const span = document.querySelector("#value");
const buttons = document.querySelector(".button-container");


let count = 0;
//! my own logic
buttons.onclick = (e) => {
    let item = e.target;
    let decrease = item.classList[1] === 'decrease';
    let increase = item.classList[1] === 'increase';
    let reset = item.classList[1] === 'reset';
    if (decrease) {
        count --;
    } else if (increase) {
        count ++;
    } else if (reset) {
        count = 0;
    };
    if (count<0) {
        span.style.color = "red";
    } else if (count>0) {
        span.style.color = "green";
    } else {
        span.style.color = "#222";
    }
    span.textContent = count;
};


//! online logic
// const btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//     btn.onclick = (e) => {
//         styles = e.currentTarget.classList;
//         console.log(styles);
//         if (styles.contains('decrease')) {
//             count--;
//         } else if (styles.contains('increase')) {
//             count++;
//         } else {
//             count = 0;
//         };
//         if (count < 0) {
//             span.style.color = "red";
//         } else if (count > 0) {
//             span.style.color = "green";
//         } else {
//             span.style.color = "#222";
//         }
//         span.textContent = count;
//     }
// });
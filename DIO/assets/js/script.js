var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}

// document.getElementById('btn-decrement').addEventListener("click", clicou);
// document.getElementById('btn-increment').addEventListener("click", clicou);

// function clicou() {
//     if (document.getElementById('btn-decrement')) {
//         console
//     } else {
        
//     }
//     console.log("Clicou!!!");
// }
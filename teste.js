// const ----> constante

// var desconto = 0.2;
// const preco = 2;
// var total = preco - desconto;



// Funções

// function soma(a, b) {
//     return a + b; // 5
// }

// soma(2, 3);// Chamar, invocar a função com ou sem parametros

//console.log("Hello world!");

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par `)
        }
    }
    console.log("os números pares são ", evenNums);
}

let array = [ 1, 2, 4, 5, 7, 8];

returnEvenValues(array);
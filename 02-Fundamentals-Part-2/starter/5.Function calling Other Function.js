'use strict'


const cutPiece = function(fruit){
    return fruit * 4;
}

const fruitProcessor = function (apple,orange) {
    const applePiece = cutPiece(apple);
    const orangePiece = cutPiece(orange);
    const Juice = `Juice with the ${applePiece} Piece of Apples and ${orangePiece} Piece of Orange`

    return Juice;
}

const sivaJuice = fruitProcessor(2,3)
console.log(sivaJuice);
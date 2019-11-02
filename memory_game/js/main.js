console.log("Up and running!");

const cardOne = 'Queen';
const cardTwo = 'King';

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


const cards = [cardOne, 'cardThree', cardTwo, 'cardFour']

const cardsInPlay = []
cardsInPlay.push(cardOne)
console.log('player flipped Queen')
cardsInPlay.push(cardTwo)
console.log('player flipped King')

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You Found a Match!");
    } else {
      alert("Sorry, try again!");
    }
}

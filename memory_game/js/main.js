console.log("Up and running!");



const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

const cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay.length === 2) {
      if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You Found a Match!");
      } else {
        alert("Sorry, try again!");
      };
}}


function flipCard(cardID){
  cardsInPlay.push(cards[cardID].rank);
  console.log(cards[cardID].suit);
  console.log(cards[cardID].cardImage);
  console.log('user flipped ' + cards[cardID].rank)
checkForMatch();

  }

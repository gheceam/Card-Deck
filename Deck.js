function CardDeck() {
  this.deck = [];
}

CardDeck.prototype.makeDeck = function () {
  // Initializing arrays used in creating deck
  const suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
  const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  //  create a pair of each suit and value and add to 'deck' property
  suits.forEach((suit) => {
    values.forEach((value) => {
      this.deck.push(`${value} of ${suit}`);
    });
  });
};

// CardDeck.prototype.withinDeckShuffle = function (deck) {
//   const newRandomDeck = [...deck];
//   const DECK_SIZE = newRandomDeck.length;
//   let randomIndexInDeck = null;
//   for (let i = 0; i < DECK_SIZE; i++) {
//     randomIndexInDeck = Math.floor(Math.random() * DECK_SIZE - 1);
//     newRandomDeck.unshift(newRandomDeck.splice(randomIndexInDeck, 1));
//   }
//   return newRandomDeck;
// };

CardDeck.prototype.fisherYatesShuffle = function (deck) {
  const newRandomDeck = [];
  let randomIndexInDeck = null;
  while (deck.length !== 0) {
    randomIndexInDeck = Math.floor(Math.random() * deck.length);
    newRandomDeck.push(deck.splice(randomIndexInDeck, 1));
  }
  return newRandomDeck;
};

// generic shuffle method, calls a particular shuffle strategy
CardDeck.prototype.shuffleDeck = function (deck, shuffleMethod) {
  this.deck = shuffleMethod(deck);
};

const myDeck = new CardDeck();
myDeck.makeDeck();
console.log(myDeck.deck);
myDeck.shuffleDeck(myDeck.deck, myDeck.withinDeckShuffle);
console.log(myDeck.deck);

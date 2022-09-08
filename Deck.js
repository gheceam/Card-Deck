function CardDeck() {
  this.deck = [];
  this.makeDeck();
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

// randomizes deck through card swapping
CardDeck.prototype.swapShuffle = function (deck) {
  // make deep copy of deck
  const newRandomDeck = [...deck];
  const INDEX_LIMIT = newRandomDeck.length - 1;
  let randomIndexInDeck = null;
  for (let i = 0; i <= INDEX_LIMIT; i++) {
    randomIndexInDeck = Math.floor(Math.random() * INDEX_LIMIT);
    // swap cards in deck
    [newRandomDeck[0], newRandomDeck[randomIndexInDeck]] = [
      newRandomDeck[randomIndexInDeck],
      newRandomDeck[0],
    ];
  }
  return newRandomDeck;
};

// creates a whole new random deck by removing from original deck and adding to a new deck
CardDeck.prototype.fisherYatesShuffle = function (deck) {
  const newRandomDeck = [];
  let randomIndexInDeck = null;
  while (deck.length !== 0) {
    randomIndexInDeck = Math.floor(Math.random() * deck.length);
    newRandomDeck.push(deck.splice(randomIndexInDeck, 1));
  }
  return newRandomDeck;
};

// generic shuffle method, calls a particular shuffle strategy by function reference
// defaults to the Fisher-Yates shuffle if none is entered
CardDeck.prototype.shuffleDeck = function (
  shuffleMethod = this.fisherYatesShuffle
) {
  this.deck = shuffleMethod(this.deck);
};

CardDeck.prototype.dealCard = function () {
  if (this.deck.length !== 0) {
    console.log(`The ${this.deck.pop()} was dealt`);
  } else {
    console.log("There are no more cards in this card deck.");
  }
};

CardDeck.prototype.resetDeck = function () {
  this.makeDeck();
  this.shuffleDeck();
};

CardDeck.prototype.displayDeck = function () {
  console.log(this.deck, "\n");
};

CardDeck.prototype.displayCardsLeft = function () {
  const cardsLeft = this.deck.length;
  console.log(
    `There ${cardsLeft === 1 ? "is" : "are"} ${this.deck.length} ${
      cardsLeft === 1 ? "card" : "cards"
    } left.\n`
  );
};

// generate a card deck
const myDeck = new CardDeck();
// display deck made
myDeck.displayDeck();
// shuffle the deck using one of the shuffle methods
myDeck.shuffleDeck(myDeck.swapShuffle);
// show deck after shuffle
myDeck.displayDeck();
// deal a card and log it
console.log(myDeck.dealCard());
// show deck is down to 51 cards now
myDeck.displayCardsLeft();
// show the new deck
myDeck.displayDeck();

for (let i = 0; i < 55; i++) {
  myDeck.dealCard();
}
myDeck.displayCardsLeft();

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
CardDeck.prototype.shuffleDeck = function (shuffleMethod) {
  this.deck = shuffleMethod(this.deck);
};

CardDeck.prototype.dealCard = function () {
  return this.deck.pop();
};

CardDeck.prototype.reset = function () {
  this.makeDeck();
};

CardDeck.prototype.showDeck = function () {
  console.log(this.deck, "\n");
};

const myDeck = new CardDeck();
myDeck.makeDeck();
myDeck.showDeck();
myDeck.shuffleDeck(myDeck.swapShuffle);
myDeck.showDeck();
myDeck.reset();
myDeck.showDeck();

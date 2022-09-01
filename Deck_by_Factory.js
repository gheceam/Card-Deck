const CardDeck = () => {
  let deck = [];

  const makeDeck = () => {
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
        deck.push(`${value} of ${suit}`);
      });
    });
  };

  // randomizes deck through card swapping
  const swapShuffle = () => {
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
  const fisherYatesShuffle = () => {
    const newRandomDeck = [];
    let randomIndexInDeck = null;
    while (deck.length !== 0) {
      randomIndexInDeck = Math.floor(Math.random() * deck.length);
      newRandomDeck.push(deck.splice(randomIndexInDeck, 1));
    }
    return newRandomDeck;
  };

  // generic shuffle method, calls a particular shuffle strategy as first class function
  const shuffleDeck = (shuffleMethod) => (deck = shuffleMethod(deck));
  const dealCard = () => deck.pop();
  const reset = () => makeDeck();
  return {
    makeDeck,
    deck,
    shuffleDeck,
    dealCard,
    reset,
    fisherYatesShuffle,
    swapShuffle,
  };
};
const myDeck = CardDeck();
myDeck.makeDeck();
console.log(myDeck.deck);
myDeck.shuffleDeck(myDeck.swapShuffle);
console.log(myDeck.deck);

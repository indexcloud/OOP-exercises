import Card from "./Card.js";

class Deck {
	constructor() {
		this.deck = [];
		this.points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		this.suits = ["diamond", "clubs", "hearts", "spades"];

		for (let suit of this.suits) {
			for (let point of this.points) {
				this.deck.push(new Card(point, suit));
			}
		}
	}

	draw() {
		if (this.deck.length > 0) {
			return this.deck.splice(0, 1)[0];
		} else {
			console.log("No card left");
		}
	}

	shuffle() {
		for (let i = this.deck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * i);
			const temp = this.deck[i];
			this.deck[i] = this.deck[j];
			this.deck[j] = temp;
		}

		return this.deck;
	}

	numCardsLeft() {
		return this.deck.length;
	}
}

let myDeck = new Deck();
myDeck.shuffle();
// console.log(myDeck.deck);
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.deck);
// console.log(myDeck.shuffle());
console.log(myDeck.numCardsLeft());

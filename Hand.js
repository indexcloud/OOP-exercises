import Card from "./Card.js";

class Hand {
	constructor() {
		this.cards = [];
	}

	addCard(card) {
		return this.cards.push(card);
	}

	getPoints() {
		return this.cards.reduce((a, card) => a + card.point, 0);
	}
}

var myHand = new Hand();
myHand.addCard(new Card(5, "diamonds"));
myHand.addCard(new Card(13, "spades"));
console.log(myHand.getPoints());

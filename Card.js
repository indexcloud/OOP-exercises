class Card {
	constructor(point, suit) {
		this.point = point;
		this.suit = suit;
	}

	getImageUrl() {
		return `images/${this.point}_of_${this.suit}.png`;
	}
}

let myCard = new Card(5, "diamonds");

console.log(myCard.point);

console.log(myCard.suit);

console.log(myCard.getImageUrl());

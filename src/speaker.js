class Speaker {
	constructor(phrase) {
		this.phrase = phrase;
	}
	speak() {
		console.log(this.phrase);
		return this.phrase;
	}
}

module.exports = Speaker;
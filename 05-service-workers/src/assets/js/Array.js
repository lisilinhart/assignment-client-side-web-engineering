  /////////////////////
 // Array extension //
/////////////////////
Array.prototype.shuffle = function (maxLength) {
    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = this.length
    var temporaryValue;
    var randomIndex;
    var result;

    maxLength = maxLength || this.length

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }

    return this.slice(0, maxLength);
};
/**
 * Created by cedric on 10/27/15.
 */

var Deck = function () {
    console.log('instance created');
    this._deck = [];

};


Deck.prototype.shuffle =
    function()
    {
        console.log("Cards before shuffle:" + cards);
        for (i = theLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * i);
            tempCard = cards[i];
            cards[i] = cards[toSwap];
            cards[toSwap] = tempCard;
        }
        console.log("Cards after shuffle: "+cards);
    }
Deck.prototype.drawCard =
    function()
    {
        return this._deck.pop();
    }


/**
 * Created by cedric on 10/27/15.
 */
var SpadesGame =  function()
{
    this.gameDeck = new Deck();
    this.playersHands = new Array(4);
    this.playersTurn = 0;
    for (i=0; i <3; i++)
    {
        myarray[i]=new Array(13);
    }




    var Deck = function () {


        console.log('instance created');
        this._deck = [];
        var o = this.conf,
            l,i,s,r,j;
        // populate draw pile
        for (i = 0; i < 1; i++) {
            // standard
            for (s in o.suits) {
                for (r in o.ranks) {
                    l = this._deck.length;
                    this._deck[l] = new Card(r, o.ranks[r], s, o.suits[s]);
                    console.log(this._deck[l].toString());
                }
            }
            // jokers
            for (j = 0; j < o.jokers; j++) {
                l = this._deck.length;
                // suit will always be 1 or 2
                this._deck[l] = new Card("N", o.jokerText, (j % 2) + 1, '');
            }
        }


        //Card
        var Card = function(rank, rankString, suit, suitString)
        {


            this.rank = rank;
            this.rankString = rankString;
            this.suit = suit;
            this.suitString = suitString;
            return this;
        }

        Card.prototype.toString = function()
        {
            return this.suitString !== "" ? this.rankString + Deck.defaults.ofString + this.suitString: this.rankString;
        };

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
        };
    Deck.prototype.drawCard =
        function()
        {
            return this._deck.pop();
        };

    Deck.prototype.add =
        function(card)
        {
            this._deck.push(card);
        };

    Deck.defaults =
    {
        "ofString " : " of ",
        "jokers": 2,
        "jokerText": "Joker",
        "ranks": {
            "2": "Two",
            "3": "Three",
            "4": "Four",
            "5": "Five",
            "6": "Six",
            "7": "Seven",
            "8": "Eight",
            "9": "Nine",
            "10": "Ten",
            "J": "Jack",
            "Q": "Queen",
            "K": "King",
            "A": "Ace"
        },
        "suits": {
            "S": "Spades",
            "D": "Diamonds",
            "C": "Clubs",
            "H": "Hearts"
        }
    };

};


SpadesGame.prototype.dealOne = function()
{
    var c = this.gameDeck.drawCard();

}



function compareRank(a, b)
{
    var intRegex = /^\d+$/;

    if (a.rank == b.rank)                       return 0;
    if (a.rank == "N")                          return 1;
    if (b.rank == "N")                          return -1;
    if (a.rank == "A")                          return 1;
    if (b.rank == "A")                          return -1;
    if (!isNaN(a.rank - b.rank))                return a.rank - b.rank;
    if (a.rank == "K" && b.rank == "J")         return 1;
    if (a.rank == "J" && b.rank == "K")         return -1;
    if (a.rank == "K" && b.rank == "Q")         return 1;
    if (a.rank == "Q" && b.rank == "K")         return -1;
    if (a.rank == "Q" && b.rank == "J")         return 1;
    if (a.rank == "J" && b.rank == "Q")         return -1;
    if (a.rank == "K" && intRegex.test(b.rank)) return 1;
    if (a.rank == "Q" && intRegex.test(b.rank)) return 1;
    if (a.rank == "J" && intRegex.test(b.rank)) return 1;
    if (intRegex.test(a.rank) && b.rank == "K") return -1;
    if (intRegex.test(a.rank) && b.rank == "Q") return -1;
    if (intRegex.test(a.rank) && b.rank == "J") return -1;
}
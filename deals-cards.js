// let card1 = { rank: "Ace", suit: "Hearts" }
// let card2 = { rank: "7", suit: "Diamonds" }
// console.log("You are hoding the " + card1.rank + " of " + card1.suit + " and " + card2.rank + " of " + card2.suit)
// let card3 = { rank: "King", suit: "Spades" }
// let deck = [ card1, card2, card3 ]


// for(let i=0; i<3; i++){
//     console.log(deck[i].rank + " of " + deck[i].suit)
// }

let deck = []
let tempSuit
let tempRank
for (let i = 0; i < 4; i++) {
    if (i == 0) {
        tempSuit = "hearts"
    } else if (i == 1) {
        tempSuit = "diamonds"
    } else if (i == 2) {
        tempSuit = "spades"
    } else if (i == 3) {
        tempSuit = "clubs"
    }
    for (let j = 0; j < 14; j++) {
        if (j == 0) {
            tempRank = "Ace"
        } else if (j == 11) {
            tempRank = "Jack"
        } else if (j == 12) {
            tempRank = "Queen"
        } else if (j == 13) {
            tempRank = "King"
        } else {
            tempRank = j
        }


        console.log(deck[j])

        deck.push({ suit: tempSuit, rank: tempRank })
        console.log(deck[j])
    }
    console.log("set")
}



// for(i=0; i<53; i++){
// console.log(deck[i].rank + " of " + deck[i].suit)
// }

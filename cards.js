let number = 1
let suit = 1
let suitName

function countNumbers() {
    if (suit == 1) {
        suitName = "Hearts"
    } else if (suit == 2) {
        suitName = "Spades"
    } else if (suit == 3) {
        suitName = "Diamonds"
    } else if (suit == 4) {
        suitName = "Clubs"
    }

    for (let i = 1; i < 14; i++) {
        if (i == 1) {
            number = "Ace"
        } else if (i == 11) {
            number = "Jack"
        } else if (i == 12) {
            number = "Queen"
        } else if (i == 13) {
            number = "King"
        } else {
            number = i
        }

        console.log(number + " of " + suitName)

    }
}

for (let i = 1; i < 5; i++) {
    countNumbers()
    suit = suit + 1
}


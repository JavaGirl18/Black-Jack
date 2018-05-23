
const deck = [];
const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const face = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']

const createDeck = function () {
    for (let i = 0; i < suits.length; i++) {
        // console.log('inside first loop')
        for (let j = 0; j < face.length; j++) {
            let faceValue = 0
            const faceCard = face[j]
            switch (faceCard) {
                case 'A':
                    faceValue = 10;
                    break;
                case 'K':
                    faceValue = 10;
                    break;
                case 'Q':
                    faceValue = 10;
                    break;
                case 'J':
                    faceValue = 10;
                    break;
                default: Number(faceCard)
            }


            const newCard = {
                suits: suits[i],
                value: faceValue,
                face: face[j],
                image: "images/" + face[j] + suits[i] + ".png"
            }
            // console.log("new card: ", newCard)
            deck.push(newCard)
        }
    }
}
createDeck()


let cardCounter = 0;
let player1 = [];
dealOneCardPlayer1 = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    console.log(rand)

    player1.push(rand)
    if (cardCounter == 0) {
        $('#playerC3').attr('src', deck[rand].image)
        cardCounter++;
        console.log(player1)

    }
    else if (cardCounter == 1) {
        $('#playerC4').attr('src', deck[rand].image)
        cardCounter++

    }
    else if (cardCounter == 2) {
        $('#playerC5').attr('src', deck[rand].image)
        $('#hit1').attr('disabled', true)
    }
    // else if (cardCounter == 3) {
    //     $('#playerC4').attr('src', deck[rand].image)
    //     cardCounter++
    // }
    // else if (cardCounter == 4) {
    //     $('#playerC5').attr('src', deck[rand].image)

    // }
}

let dealer = [];
let cardCounter2 = 0;
dealOneCardDealer = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    console.log(rand)

    dealer.push(rand)
    if (cardCounter2 == 0) {
        $('#dealC3').attr('src', deck[rand].image)
        cardCounter2++;

    }
    else if (cardCounter2 == 1) {
        $('#dealC4').attr('src', deck[rand].image)
        cardCounter2++
        console.log()
    }
    else if (cardCounter2 == 2) {
        $('#dealC5').attr('src', deck[rand].image)
        $('#hit2').attr('disabled', true)
    }
    // else if (cardCounter == 3) {
    //     $('#playerC4').attr('src', deck[rand].image)
    //     cardCounter++
    // }
    // else if (cardCounter == 4) {
    //     $('#playerC5').attr('src', deck[rand].image)

    // }
}


let count = 0;
deal = function () {
    //randomly generate an index for the card from the deck   

    //to player1 and the dealer
    //and remove that card from the deck

    if (count === 0) {
        //randomly generate a index number based on the length of the deck array
        let rand = Math.floor(Math.random() * (deck.length))
        //use that random index number to choose a card from the deck array 
        //pass it to player1 position 1
        $('#playerC1').attr('src', deck[rand].image)

        //store that random card into player1 array for scoring
        player1.push(deck[rand])
        //remove that random card from the deck so that it isn't called again
        deck.splice(rand, 1)

        //randomly generate a index number based on the length of the deck array
        let rand2 = Math.floor(Math.random() * (deck.length))
        //use that random index number to choose a card from the deck array 
        //pass it to player1 position 2

        $('#playerC2').attr('src', deck[rand2].image)
        //store that random card into player1 array for scoring
        player1.push(deck[rand2])
        //remove that random card from the deck so that it isn't called again
        deck.splice(rand2, 1)

        //randomly generate a index number based on the length of the deck array
        let rand3 = Math.floor(Math.random() * (deck.length))
        //use that random index number to choose a card from the deck array 
        //pass it to dealer position 1
        $('#dealC1').attr('src', deck[rand3].image)
         //store that random card into player1 array for scoring
        dealer.push(deck[rand3])
        //remove that random card from the deck so that it isn't called again
        deck.splice(rand3, 1)

        //randomly generate a index number based on the length of the deck array
        let rand4 = Math.floor(Math.random() * (deck.length))
        //use that random index number to choose a card from the deck array 
        //pass it to dealer position 1
        $('#dealC2').attr('src', deck[rand4].image)
         //store that random card into player1 array for scoring
        dealer.push(deck[rand4])
        //remove that random card from the deck so that it isn't called again
        deck.splice(rand4, 1)

        count++
        console.log(count)
    }
    else if (count === 1) {
        $('#deal').attr('disabled', true)
    }
}
console.log(dealer)
// console.log(player1)




play = function () {

}

$(document).ready(function () {
    $('#hit1').on('click', function () {
        dealOneCardPlayer1()
    })

    $('#hit2').on('click', function () {
        dealOneCardDealer()
    })
    $('#deal').on('click', function () {
        deal()
        // dealOneCardPlayer1()
    })

})
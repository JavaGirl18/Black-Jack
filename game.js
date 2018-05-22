
let holderDeck2 = [];



// const suits= ['spades', 'clubs', 'diamonds', 'hearts'],
// const face= ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
const deck = [];
const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const face = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']

const createDeck = function () {
    for (let i = 0; i < suits.length; i++) {
        // console.log('inside first loop')
        for (let j = 0; j < face.length; j++) {
            let faceValue=0
            const faceCard = face[j]
            switch(faceCard){
                case 'A':
                faceValue=10;
                break;
                case 'K':
                faceValue=10;
                break;
                case 'Q':
                faceValue=10;
                break;
                case 'J':
                faceValue=10;
                break;
            }
                

            const newCard = {
                suits: suits[i],
                face: face[j],
                image: "images/" + face[j] + suits[i] + ".png"
            }
            // console.log("new card: ", newCard)
            deck.push(newCard)
        }
    }
}
createDeck()

let dealer = [];
let cardCounter = 0;
let player1 = [];
dealOneCardPlayer1 = function () {
    let rand = Math.floor(Math.random() * (deck.length))

    player1.push(rand)
    if (cardCounter == 0) {
        $('#playerC3').attr('src', deck[rand].image)
        cardCounter++;

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

let count = 0;
deal = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    player1.push(deck[rand])
    deck.splice(rand,1)
    let rand2 = Math.floor(Math.random() * (deck.length-1))
    dealer.push(deck[rand])
    deck.splice(rand2,1)
    console.log('inside deal')
    if (count === 0) {
        $('#playerC1').attr('src', deck[rand].image)
        deck.splice(rand,1)
        $('#playerC2').attr('src', deck[rand].image)
        $('#dealC1').attr('src', deck[rand2].image)
        deck.splice(rand2,1)
        $('#dealC2').attr('src', deck[rand2].image)
    }
    else if (count === 1) {
        $('deal').attr('disabled', true)
    }
}
console.log(cardCounter)
// console.log(player1)



let cardCounter2 = 0;
dealOneCardDealer = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    dealer.push(deck[rand])


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
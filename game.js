
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

let player1 = [];
dealOneCardPlayer1 = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    console.log(rand)
    player1.push(rand)
    $('#playerC1').attr('src',deck[0].image)
    console.log(player1)

}
let dealer = [];
dealOneCardDealer = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    console.log(rand)
    dealer.push(deck[rand])
    console.log(dealer)

}




// randomCard: function () {
//         deck.suits.forEach(element => {
//             let rand = Math.floor(Math.random() * (deck.suits.length-1))
//             // console.log(rand)
//             holderDeck1.push(deck.suits[rand])

//         })
//     // setTimeout(randomCard,1000)
//     console.log(holderDeck1)
//     }

// }


// let combine = function () {
//     let sum = holderDeck1 + holderDeck2
//     console.log(sum)
// }


// const deck2 = {
//     face: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
//     randomCard2: function () {
//         deck2.face.forEach(element => {
//             let rand2 = Math.floor(Math.random() * (deck2.face.length - 1))
//             holderDeck2.push(deck2.suits[rand2])
//         })
//         console.log(holderDeck2)
//     }
// }


$(document).ready(function () { 
    console.log("inside doc ready")
    $('#hit1').on('click', function () {
        console.log("anything")
        dealOneCardPlayer1()
    })

    $('#hit2').on('click', function () {
        dealOneCardDealer()
    })
})
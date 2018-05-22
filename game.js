let holderDeck1 = [];
let holderDeck2 = [];
let player1 = [];


const deck = {
    suits: ['spades', 'clubs', 'diamonds', 'hearts'],
    randomCard: function () {
        deck.suits.forEach(element => {
            let rand = Math.floor(Math.random() * (deck.suits.length-1))
            // console.log(rand)
            holderDeck1.push(deck.suits[rand])
            
        })
    // setTimeout(randomCard,1000)
    console.log(holderDeck1)
    }

}

    
let combine=function(){
   let sum= holderDeck1+holderDeck2
    console.log(sum)
}


const deck2 = {
    face: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
    randomCard2: function () {
        deck2.face.forEach(element => {
            let rand2 = Math.floor(Math.random() * (deck2.face.length - 1))
            holderDeck2.push(deck2.suits[rand2])
        })
        console.log(holderDeck2)
    }
}


$(document).ready(function () {
    $('#hit').on('click', function () {
        deck.randomCard()
        deck2.randomCard2()
    }) 
})
$('#stand').on('click', function(){
        combine()
})
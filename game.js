
const deck = [];
const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts']
const face = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']

const createDeck = function () {
    for (let i = 0; i < suits.length; i++) {
        // console.log('inside first loop')
        for (let j = 0; j < face.length; j++) {
            let faceValue = 0
            const faceCard = face[j]
            const num = Number(faceCard)
            switch (faceCard) {
                case 'A':
                    faceValue = 11;
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
                case '10':
                    faceValue = 10;
                    break;
                case '9':
                    faceValue = 9;
                    break;
                case '8':
                    faceValue = 8;
                    break;
                case '7':
                    faceValue = 7;
                    break;
                case '6':
                    faceValue = 6;
                    break;
                case '5':
                    faceValue = 5;
                    break;
                case '4':
                    faceValue = 4;
                    break;
                case '3':
                    faceValue = 3;
                    break;
                case '2':
                    faceValue = 2;
                    break;
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
    // console.log(rand)

    player1.push(deck[rand])
    if (cardCounter == 0) {
        $('#playerC3').attr('src', deck[rand].image)
        cardCounter++;
        // console.log(player1)

    }
    else if (cardCounter == 1) {
        $('#playerC4').attr('src', deck[rand].image)
        cardCounter++

    }
    else if (cardCounter == 2) {
        $('#playerC5').attr('src', deck[rand].image)
        $('#hit1').attr('disabled', true)
    }

}
// console.log(player1)

let dealer = [];
let cardCounter2 = 0;
dealOneCardDealer = function () {
    let rand = Math.floor(Math.random() * (deck.length))
    // console.log(rand)

    dealer.push(deck[rand])
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
}

const changeBack = {
    image: "images/back.jpeg"
}
let count = 0;
deal = function () {
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
        $('#dealC2').attr('src', changeBack.image)
        //store that random card into player1 array for scoring
        dealer.push(deck[rand4])
        //remove that random card from the deck so that it isn't called again
        deck.splice(rand4, 1)

        count++
        // console.log(count)
    }
    else if (count === 1) {
        $('#deal').attr('disabled', true)
    }
}





const scorePlayersCards1 = function () {
    let pScore = 0;
    for (i = 0; i < player1.length; i++) {
        pScore += player1[i].value
        $('.myScore').text(pScore)

    }
    console.log('pScore',pScore)


}




const scoreDealersCards1 = function () {
    let dScore = 0;
    for (i = 0; i < dealer.length; i++) {
        dScore += dealer[i].value

    }
  

}


let pScore2 = 0;
const scoreCards1 = function () {
    pScore2 = 0;
    if (player1.length >= 3) {
        for (i = 0; i < player1.length; i++) {
            pScore2 += player1[i].value
            console.log('pScore2', pScore2)
            // $('.score').text(pScore2);

        }
        if (pScore2 === 21) {
            swal('You win with 21 Black Jack')
            $('hit1').attr('disabled', true)
           
        }
        else if (pScore2 > 21) {

            $('#hit1').attr('disabled', true)
            swal("So much for luck, looks like you've Bust!")
            
        }
        
        else if (pScore2 < 20) {
            console.log(pScore2)
              $('.score').text(pScore2);
        }
        // console.log(pScore2)

    }
}
let dScore2 = 0;
const scoreCards2 = function () {
    dScore2 = 0;
    if (dealer.length >= 3) {
        for (d = 0; d < dealer.length; d++) {
            dScore2 += dealer[d].value
            console.log('dScore2', dScore2)
        }
        if (dScore2 === 21) {
            swal('Dealer Wins')
            $('hit2').attr('disabled', true)
            
        }
        else if (dScore2 > 21) {
           
            $('#hit2').attr('disabled', true)
            swal("The Dealer bust")
            
        }
        
        else if (dScore2 < 20) {
            // dealOneCardDealer()
            console.log('dScore less than 17')
            console.log(dScore2)
        }

    }
}

const endGame = function () {
    location.reload();
    // dealer = []
    // player1 = []
    // dScore2 = 0
    // pScore2 = 0
    // $('#deal').attr('active', true)
    // $('#playerC1').attr('src', changeBack2.image)
    // $('#playerC2').attr('src', changeBack2.image)
    // $('#playerC3').attr('src', changeBack2.image)
    // $('#playerC4').attr('src', changeBack2.image)
    // $('#playerC5').attr('src', changeBack2.image)
    // $('#dealC1').attr('src', changeBack2.image)
    // $('#dealC2').attr('src', changeBack2.image)
    // $('#dealC3').attr('src', changeBack2.image)
    // $('#dealC4').attr('src', changeBack2.image)
    // $('#dealC5').attr('src', changeBack2.image)
}

var winner = function () {
    console.log("b",dScore2)
    console.log("b",pScore2)
    if (pScore2 > dScore2){
    alert('Player 1 wins the game')
    endGame()
    
        console.log('console1')
    }
     if (dScore2 > pScore2 && dScore2 <21){
        alert('Dealer wins the game')
        console.log('console2')
        endGame()
     } 
     if (dScore2===pScore2){
        alert('This game is a "Push"')
        console.log('console3')
        endGame()
     
    }
}
// const stay = stand()


const changeBack2 = {
    image: "images/back.jpeg"
}



// console.log(player1)
// console.log(dealer)

$('.table').hide()
// $( window ).load(function() {
// $('.table').html("images/back.jpeg")
//   });

$('#start').click(function(){

   $('.table').show() ;
   $('#start').hide()

})

$('body').css('background-image', "url('images/black.jpg')")


play = function () {

}

$(document).ready(function () {
    $('#hit1').on('click', function () {
        dealOneCardPlayer1()
        scoreCards1()


    })

    // $('#hit2').on('click', function () {
    //     dealOneCardDealer()
    //     scoreCards2()

    // })
    $('#deal').on('click', function () {
        deal();
        scorePlayersCards1();
        scoreDealersCards1();
        scoreCards2();
        scoreCards1();
        // dealOneCardPlayer1()
    })
    $('#stand2').on('click', function (){
        dealOneCardDealer();
        dealOneCardDealer();
        scoreCards2()
        scoreCards1()

        winner();
        
    })
    
        
    
})


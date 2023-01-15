'use strict';

let secretNumber = (Math.trunc((Math.random()) * 20) + 1)


let score = 20
let highscore = 0



document.querySelector('.check')
.addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value)

    console.log(guess, typeof(guess))

    //there is no number
if(!guess){
    document.querySelector('.message').textContent = '🚩No guess'

    //when player wins
}else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'CORRECT'
    document.querySelector('.number').textContent = secretNumber


    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('div.number').style.width = '30rem'

    if(score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = highscore
    }

    //when guess is too high
}else if(guess > secretNumber){
    if(score > 1){
document.querySelector('.message').textContent = 'Too High'
    score--;
    document.querySelector('.score').textContent = score;
    } else{
       document.querySelector('.message').textContent = 'You lost the game'
        document.querySelector('.score').textContent = 0
    }

    //when guess is too low
} else if(guess < secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = 'Too low'
            score--;
            document.querySelector('.score').textContent = score;
            } else{
               document.querySelector('.message').textContent = 'You lost the game'
                document.querySelector('.score').textContent = 0
            }

}
})

document.querySelector('.again').addEventListener('click', function(){
     score = 20
     secretNumber = (Math.trunc((Math.random()) * 20) + 1)
     
     document.querySelector('.number').textContent = '?'
     document.querySelector('.message').textContent = 'Start guessing...'
     document.querySelector('.score').textContent = score
     document.querySelector('.guess').value = ''
     document.querySelector('body').style.backgroundColor = '#222'
     document.querySelector('div.number').style.width = '15rem'

})






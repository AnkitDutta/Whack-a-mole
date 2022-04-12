const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPOsition
let currentTime = 60

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPOsition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPOsition) {
            result++
            score.textContent = result
            hitPOsition = null
        }
    })
})

function moveMole(){
    let timerID = null
    timerID = setInterval(randomSquare, 400)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if( currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('GAME OVER! Final score is: ' + result )
    } 
}
let countDownTimerId = setInterval(countDown, 1000) 
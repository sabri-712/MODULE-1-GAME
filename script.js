// quiz style game, pick your own adventure//
// start game function
const startGame =()=>{
    console.log('Started')
    startButton.classList.remove('hide')
    textboxContainerElement.classList.remove('hide')
    setNextQuestion()
}    
const startButton = document.getElementsByClassName('startBtn')
const textboxElement = document.getElementsByClassName('textbox')

startButton.addEventListener('click', startGame)


// const startGame =()=>{
//     console.log('Started')
//     startButton.classList.add('hide')
//     textboxContainerElement.classList.remove('hide')
//     setNextQuestion()
// }    

// two options function

// If reader picks option A, go down path a function
const setNextQuestion=()=> {

}

// IF reader picks option B, go down path b function

const intro = document.getElementsByClassName('introBox')



// // PLOT: You are at a new job in a new city getting off late. 
// You leave the office to go home when you realize someone is following you. 
// Your mind races through a series of options as you try to decide what to do. 
// Do you make it home?
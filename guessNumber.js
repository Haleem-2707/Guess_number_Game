"use strict" ;

// console.log (document.querySelector(".message").textContent) 

// document.querySelector(".message").textContent = "🎉 Correct Number!"
// console.log (document.querySelector(".message").textContent) 


// document.querySelector(".number").textContent = 13 ;
// document.querySelector(".score").textContent = 10 ;

// document.querySelector(".guess").value= 23;
// console.log(document.querySelector(".guess").value)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector(".check").addEventListener("click" , function() {
 const guess = Number (document.querySelector(".guess").value);
 console.log( guess, typeof guess)



 if(!guess){
    document.querySelector(".message").textContent = "⛔ No number"
 } 
           //  ..............When player wins

 else if(guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!"
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "Green"
    document.querySelector(".guess").style.backgroundColor = "Green"
    document.querySelector(".Highscore").textContent = 20 ;
    const playersName = prompt ("Enter Your Name")
    document.querySelector(".name").textContent = `Congratulations ${playersName }, You won this game 🏆 `

    if (score > highScore) {
         document.querySelector(".Highscore").textContent = score
    }


  

 } else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector(".message").textContent = "😞 Too High" ;
        score-- ;
        document.querySelector(".score").textContent = score ;
    
     } 
     else {
        document.querySelector(".message").textContent = "😤 Sorry! You lose the game" ;
        score-- ;
        document.querySelector(".score").textContent = 0 ;
     }
 }
                // ..............When number is too low

 else if(guess < secretNumber) {
    if (score > 1) {
        document.querySelector(".message").textContent = "😞 Too low" ;
        score-- ;
        document.querySelector(".score").textContent = score ;
    
     } 
     else {
        document.querySelector(".message").textContent = "😤 Sorry! You lose the game" ;
        score-- ;
        document.querySelector(".score").textContent = 0 ;
     }
    
       
    } 
   
});


document.querySelector(".again").addEventListener("click" , function() {
   
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "😊 Start guessing..."
    document.querySelector(".score").textContent= score;
    document.querySelector(".number").textContent = "?" ;
    document.querySelector(".guess").value = " ";
    document.querySelector(".name").textContent = "" ;
    document.querySelector("body").style.backgroundColor = "blue"
    document.querySelector(".guess").style.backgroundColor = "blue"
 
});





var numSquares = 6; 
var colors = generateRandomColors(numSquares); //un array de "numSquares" elemente rgb generate random
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var body = document.querySelector("body");
var modeButtons = document.querySelectorAll(".mode");
var scoreKeeper = document.querySelector("#scoreKeeper")
var messageKeeper = document.querySelector("#messageKeeper");
var lost = document.querySelector("#hide");
var playAgain = document.querySelector("#playAgain");
var stripe = document.querySelector("#stripe");
var highScore = document.querySelector("#highScore");
var highestScore = 0;
hide.style.display= "none";
playAgain.style.display = "none";
var arr = [];
var score = 0;
var savedScore;





for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        
    
        this.classList.add("selected");
        if(this.textContent === "Easy") {
            numSquares = 3;
        } else  {
            numSquares = 6;
            
        } 
        console.log(this.classList);
        
        reset();
        
    });

}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    
    
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].background = colors[i];

        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
    
}


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
    squares[3].classList.remove("gagica");


});

playAgain.addEventListener ("click", function(){
    reset();
    score = 0;
    scoreKeeper.textContent = Number(score);
    messageKeeper.style.display = "block";
    hide.style.display = "none";
    playAgain.style.display = "none";
    stripe.style.display = "block";
    highScore.textContent = high;
   
})


colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) { //va fi luat fiecare patratel pe rand
    squares[i].style.backgroundColor = colors[i]; // de ex patratelul de pe pozitia 1 va lua culoarea generata in array de pe pozitia 1
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor; //declaram o variabila in care salvam culoarea patratului de pe pozitia 1
       
       if(clickedColor === pickedColor) { //daca patratul de pe pozitia 1 corespunde cu valoarea random generata de functia pickColor
           messageDisplay.textContent = "Correct"; //se va afisa textul "corect" 
           resetButton.textContent = "Next Colors";
          
           if(numSquares === 3) {
               score++;
           } else score += 2;
           scoreKeeper.textContent = score;

           changeColors(clickedColor); // toate patratele isi vor schimba culoarea in cea a solutiei
           h1.style.backgroundColor = clickedColor;
           
           
       } else {
           this.style.backgroundColor ="#232323"; //altfel patratul va avea acelasi background ca body-ul, pentru a disparea
           messageDisplay.textContent = "Try Again"; //mesajul se schimba in "Try again"
            messageKeeper.style.display = "none";
           hide.textContent = "You lost. :( You scored " + score;
            hide.style.display = "block";
           playAgain.style.display = "block";
           stripe.style.display = "none";
           
        }
        arr.push(score);
        highScore.textContent = "Highest score: " + maxim(arr);
        
        
    });
    
    
    
}



function maxim () {
    var max = arr[0];
    for(i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        
    }
    return max;
}





function changeColors(color) { //cu ajutorul acestei functii fiecare patrat va lua o anumita culoare
    for(var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() { //cu ajutorul acestei functii se va alege random 1 din cele 6 culori rgb
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num) {  //1. de ex pt num = 6 => functia va genera un array de 6 elemente 
    var arr = []; // 3.var arr = [rgb1, rgb2...rgb6]
    for(var i = 0; i < num; i++) { // => 2. arr[0] = rgb1, arr[1] = rgb2... arr[5] = rgb6
        arr.push(randomColor()); // => 3.adauga fiecare rgb generat random in array, functia randomColor se va executa de 6 ori
    }
    return arr; 

}

function randomColor(){   // numere random de la 0-255, cate unul pt fiecare variabila 
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; //=> rgb (nr1, nr2, nr3)

}



squares[3].addEventListener ("touchmove", function() {
    squares[3].classList.add("gagica");
});



function dissapear (){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = "none";
    }

}
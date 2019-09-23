let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickAColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

for(let i =0; i < squares.length; i++) {
    //add background color to the square.
    squares[i].style.background = colors[i];
    //add click events to the square
    squares[i].addEventListener("click", function(){
       //grabe color of the square
       let clickedColor = (squares[i].style.background)
       //compare square's color vs the picked color
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "correct!";
           resetButton.textContent = "Play Again?"
           changecolors(clickedColor);
           h1.style.background = clickedColor;
       }else{
           squares[i].style.background = "#232323";
           
           messageDisplay.textContent = "Try Again";
       }

    });
}

function changecolors(color) {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickAColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    var arr = [];
    for(let i = 0; i < num; i++){
    arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickAColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    
    h1.style.background = "#232323";
});

let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickAColor();
    colorDisplay.textContent = pickedColor;

    

    /* for(let i = 0; i < squares.length; i++){
        if(i < 3) {

            squares[i].style.background = colors[i];
        }else {
            squares[i].style.background = "#232323";
        }
    } */
    
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
});

















/* let button = document.getElementById("btn");
let isRed = false;
button.addEventListener("click", function() {
    if(isRed) {
        document.body.style.background = "white"
        isRed = false;
    }
    else{
        document.body.style.background = "red"
        isRed = true;
    }
    
}); */


/* let button = document.getElementById("btn");
let isRed = false;

button.addEventListener("click", function() {
if(isRed){
    document.body.style.background = "white"
}
else{
    document.body.style.background = "red"
}
isRed = !isRed;
}); */



let button  = document.getElementById("btn");

button.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},${g},${b})`;

    document.body.style.background = color;
});
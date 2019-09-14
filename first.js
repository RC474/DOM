var h1 = document.querySelector("h1");
var body = document.querySelector("body")

var array = ["50px", "60px", "70px", "80px", "90px", "100px", "110px", "120px", "130px", "140px", "150px"];
var colors = ["red", "orange", "yello", "green", "blue", "purple", "brown", "pink", "black", "#abcdef","#fedcba"]
var counter = 0;
setInterval(function() {
    h1.style.fontSize = array[counter];
    h1.style.color = colors[counter];
    body.style.backgroundColor = colors[array.length - 1 - counter];
    if(counter == array.length - 1) {
        counter = 0;
    }
    else{
        counter++;
    }
    

},200);

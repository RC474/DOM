var link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.youtube.com");


var button = document.getElementById("btn");
button.addEventListener("click", changeImg);

function changeImg() {
    var img1 = document.querySelector("img");
    let currentsrc = img1.getAttribute("src");
    if(currentsrc == "https://www.leisurepro.com/blog/wp-content/uploads/2013/12/mediterranean-parrotfish.jpg") {
        img1.setAttribute("src", "https://image.shutterstock.com/image-photo/horizon-sea-260nw-532690237.jpg")
    }
    else{
        img1.setAttribute("src", "https://www.leisurepro.com/blog/wp-content/uploads/2013/12/mediterranean-parrotfish.jpg");

    }

}
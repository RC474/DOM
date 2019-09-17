let list = document.querySelectorAll("li");
let lineThrough = false;

for(let li of list){
    li.addEventListener("mouseenter", function(){
        li.style.color = "red";
        li.style.background = "yellow";
    });

    li.addEventListener("mouseleave", ()=>{
        li.style.color = "black";
        li.style.backgroundColor = "white";
    });

    li.addEventListener("click", ()=>{
        /* if(!lineThrough){
            li.style.textDecoration = "line-through";
            lineThrough = true;

        }else {
            li.style.textDecoration = "none";
            lineThrough = false;
        }
         */
        li.style.textDecoration = (li.style.textDecoration == "line-through")? "none": "line-through";
    });
};
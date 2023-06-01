const container = document.querySelector(".container");


function generateGrid(x){
for (let i=0; i < x; i++){
    const row = document.createElement("div");
    row.classList.add ("row")
    container.appendChild (row)
    row.addEventListener("mouseover",() => {
        row.style.background = "grey";

    })
    
}}

generateGrid(256);


const newGrid = document.getElementsByClassName("btn");


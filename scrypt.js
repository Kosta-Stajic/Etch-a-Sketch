

const container = document.querySelector(".container");
const clear = document.querySelector(".newGrid")
container.style.height = "600px"
container.style.width = "600px"
const rainbow = document.querySelector(".RGB")

const colors = ["red", "blue", "yellow","green","orange","purple","indigo","pink", "crimson", "CadetBlue", "Cyan", "DarkGoldenRod"]

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
} 
console.log(getRandomColor())

function generateGrid(x) {
    for (let i = 0; i < x * x; i++) {
        let row = document.createElement("div");
        let size = 600 / x;
        row.classList.add("cells")
        row.style.height = `${size}px`
        row.style.width = `${size}px`
        container.appendChild(row)
       
        row.addEventListener("mouseover", () => {
            row.style.background = "grey";
        })
        rainbow.addEventListener("click", () =>
        row.addEventListener("mouseover", () => {
            row.style.background = getRandomColor();
        }))
    }
}


clear.addEventListener("click", () => {
    let userInput = parseInt(prompt("Chose a size"))
    container.textContent = ""
    generateGrid(userInput)

})


generateGrid(16);






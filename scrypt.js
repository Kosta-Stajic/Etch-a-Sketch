

const container = document.querySelector(".container");
const clear = document.querySelector(".newGrid")
container.style.height = "600px"
container.style.width = "600px"

function generateGrid(x) {
    for (let i = 0; i < x * x; i++) {
        const row = document.createElement("div");
        let size = 600/x;
        console.log(size)
        row.classList.add("cells")
        row.style.height = `${size}px`
        row.style.width = `${size}px`
        container.appendChild(row)
        console.log (row.style.height)
        row.addEventListener("mouseover", () => {
            row.style.background = "grey";
        })

    }
}

clear.addEventListener ("click", () => {
    let userInput = parseInt(prompt("Chose a size"))
    container.textContent = ""
    generateGrid(userInput)

})


generateGrid(16);






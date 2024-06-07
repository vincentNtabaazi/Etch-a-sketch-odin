const gridSpace = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener('click', drawNew)

function drawBox (num) {
  for (let i = 0; i < num; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid")
    for (let j = 0; j < num; j++) {
      const gridLine = document.createElement("div");
      gridLine.classList.add("square");
      gridLine.style.cssText = "border: 1px solid; height:20px;";
      gridLine.addEventListener("mouseenter", () => { gridLine.classList.add("square-color") });
      grid.appendChild(gridLine);
    }
    gridSpace.appendChild(grid);
  }
}

drawBox(16)


function drawNew() {
  let numberGrid = prompt("enter a number less than 100")
  if (numberGrid !== null && numberGrid <= 100) {
    if (!isNaN(numberGrid) && numberGrid.trim() !== "") {
      console.log("User input is a number: " + numberGrid);
      removeAllItemsContainer()
      drawBox(numberGrid)
    } else {
      console.log("User input is not a number.");
    }
  } else {
    alert("Enter a number less than 100.")
  }
  console.log(numberGrid)
}

function removeAllItemsContainer() {
  while (gridSpace.firstChild) {
    gridSpace.removeChild(gridSpace.firstChild);
  }
}



const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

const CONTAINER_SIZE = 640;

// function to generate Grid size n * n
function createGrid(size) {
  // Lets reset the grid
  container.innerHTML = "";

  // Calculate the square of each grid
  const squareSize = CONTAINER_SIZE / size;
  const totalSquare = size * size;

  for (let i = 0; i < totalSquare; i++) {
    const square = document.createElement("div");

    // Adding the basic style
    square.classList.add("grid-item");

    // Let the app calculate the dimension inline
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Step 4: Add hover effect to this square
    // square.addEventListener("mouseover", () => {
    //   square.classList.add("hovered");
    // });

    // Replace the hover event listener in createGrid() with this:
    square.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    // Append to container
    container.appendChild(square);
  }
}

createGrid(16);

resetBtn.addEventListener("click", () => {
  // Prompt from user to be converted to interger
  let userInput = prompt("Enter a grid size (maximum 100):");

  //Convert to number
  let size = +userInput; // we can use Number() and parseInt but I choose to use + sign wich is a shortcut

  // Validate the input
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    // Generate the new grid with user's size
    createGrid(size);
  }
});

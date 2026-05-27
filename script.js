const squareContainer = document.getElementById(`squareContainer`);
const resizeGridButton = document.getElementById(`resizeGridButton`);

function createGrid(width, height) {
    for (let i = 0; i < height; i++) {
        let containerRow = document.createElement(`div`);
        containerRow.className = `row`;

        for (let j = 0; j < width; j++) {
            let square = document.createElement(`div`);
            square.style.width = `calc(500px / ${width})`;
            square.style.height = `calc(500px / ${height})`;
            square.height = `calc(500px / ${height})`;
            square.className = `square`;
            square.style.opacity = 0.0;
            containerRow.append(square);
            
            square.addEventListener("mouseover", (event) => {
                let randomRed = Math.random() * 256;
                let randomBlue = Math.random() * 256;
                let randomGreen = Math.random() * 256;
                square.style.backgroundColor = `rgba(${randomRed}, ${randomBlue}, ${randomGreen})`;

                if (square.style.opacity <= 0.9) {
                    square.style.opacity = +square.style.opacity + 0.1;
                } 
            });
        }
        squareContainer.append(containerRow);
    }
}

function clearGrid(){
    while(squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
    }
}

createGrid(16, 16);

resizeGridButton.addEventListener("click", (event) => {
    clearGrid();
    let pixelSize = parseInt(prompt("Please enter the pixel size. (Size must be greater than 0 and equal or less than 100"));

    while (pixelSize <= 0 || pixelSize > 100) {
        pixelSize = parseInt(prompt("Please enter the pixel size. (Size must be greater than 0 and equal or less than 100"));
    }
    
    createGrid(pixelSize, pixelSize);
})
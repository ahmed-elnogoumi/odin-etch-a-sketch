const squareContainer = document.getElementById(`squareContainer`);


// appending more divs into the squareContainer we just created
for (let i = 0; i < 16; i++) {
    let containerRow = document.createElement(`div`);
    containerRow.id = `row${i}`;

    for (let j = 0; j < 16; j++) {
        let square = document.createElement(`div`);
        square.className = `square`;
        containerRow.append(square);
    }
    squareContainer.append(containerRow);
}
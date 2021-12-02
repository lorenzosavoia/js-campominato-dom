let button = document.querySelector('.bottone');
button.addEventListener('click', function () {
    let level = document.getElementById("difficulty");
    let active = document.querySelector(".active");
    let containerGrid = document.getElementById('grid');


    if (level.value == '1') {

        containerGrid.innerHTML = "";
        active.classList.add("show");
        let row = 10;
        let col = 10;
        let numberSquare = row * col;

        for (let i = 0; i < numberSquare; i++) {

            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`
            square.style.height = `calc(100% / ${row})`
            square.append([i + 1])
            containerGrid.append(square);

        }

    } else if (level.value == '2') {

        containerGrid.innerHTML = "";
        active.classList.add("show");
        let row = 9;
        let col = 9;
        let numberSquare = row * col;

        for (let i = 0; i < numberSquare; i++) {

            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`
            square.style.height = `calc(100% / ${row})`
            square.append([i + 1])
            containerGrid.append(square);

        }
    } else {
        containerGrid.innerHTML = "";
        active.classList.add("show");
        let row = 7;
        let col = 7;
        let numberSquare = row * col;

        for (let i = 0; i < numberSquare; i++) {

            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`
            square.style.height = `calc(100% / ${row})`
            square.append([i + 1])
            containerGrid.append(square);

        }
    }
})
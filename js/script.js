function getRndInteger(min, max) {
    let bomb = [];
    
    for (let i = 0; i < 16; i++) {

        min = Math.ceil(min);
        max = Math.floor(max);

        let element = bomb[i];
        element = Math.floor(Math.random() * (max - min + 1)) + min;

        while (bomb.includes(element)) {
            element = Math.floor(Math.random() * (max - min + 1)) + min;
            
        }
        bomb.push(element)
    }
    return bomb    
}


let button = document.querySelector('.bottone');
let level = document.getElementById("difficulty");
let active = document.querySelector(".active");
let containerGrid = document.getElementById('grid');

button.addEventListener('click', function () {

    const bombLvl1 = getRndInteger(1, 100);
    const bombLvl2 = getRndInteger(1, 81);
    const bombLvl3 = getRndInteger(1, 49);


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

            square.addEventListener("click", function() {
                if (bombLvl1.includes(i + 1)) {
                 
                for (let y = 0; y < numberSquare; y++) {
                    const red = document.querySelectorAll(".square")
                    if (bombLvl1.includes(y + 1)) {
                        red[y].classList.add("bomb");
                        containerGrid.replaceChild(red[y].cloneNode(true), red [y]);
                    }    
                    
                } 

                }else {
                    this.classList.add("color-blue");
                }
            })

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

            square.addEventListener("click", function () {
                if (bombLvl1.includes(i + 1)) {

                    for (let y = 0; y < numberSquare; y++) {
                        const red = document.querySelectorAll(".square")
                        if (bombLvl1.includes(y + 1)) {
                            red[y].classList.add("bomb");
                            containerGrid.replaceChild(red[y].cloneNode(true), red[y]);
                        }

                    }

                } else {
                    this.classList.add("color-blue");
                }
            })


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

            square.addEventListener("click", function () {
                if (bombLvl1.includes(i + 1)) {

                    for (let y = 0; y < numberSquare; y++) {
                        const red = document.querySelectorAll(".square")
                        if (bombLvl1.includes(y + 1)) {
                            red[y].classList.add("bomb");
                            containerGrid.replaceChild(red[y].cloneNode(true), red[y]);
                        }

                    }

                } else {
                    this.classList.add("color-blue");
                }
            })


        }
    }
})
// M1 / M2 / M3

// let griglia = document.querySelector(".flex")
// griglia.classList.add("w-10")

// for (let i = 1; i <= 100; i++) {
//     let square = document.createElement("div");
//     square.classList.add("square");
//     griglia.appendChild(square);

//     square.addEventListener('click', function () {
//         square.innerHTML = i;
//         square.classList.add("checked")
//     })
// }



// prendo il button
const start = document.getElementById("start");
// prendo la griglia
const griglia = document.querySelector(".flex");

// sul click del pulsante
start.addEventListener('click', function () {

    // rendo la griglia vuota e resetto le sue classi all'interno
    griglia.innerHTML = "";
    griglia.classList.remove("w10", "w9", "w7");

    // prendo i valori del select
    const livello = document.getElementById("difficoltà").value;

    // variabile che mi servirà per dire quante celle mi servono
    let n;


    if (livello == "easy") {
        // assegno alla griglia la width per un 10x10
        griglia.classList.add("w10");
        n = 100;
        square(n);
    } else if (livello == "normal") {
        griglia.classList.add("w9");
        n = 81;
        square(n);
    } else if (livello == "hard") {
        griglia.classList.add("w7");
        n = 49;
        square(n);
    }
})



function square(nCelle) {
    for (let i = 1; i <= nCelle; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        griglia.appendChild(square);

        square.addEventListener('click', function () {
            if (!square.classList.contains("checked")) {
                square.innerHTML = i;
                square.classList.add("checked");
            } else {
                square.innerHTML = "";
                square.classList.remove("checked")
            }
        })
    }
}


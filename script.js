// M2 mettiamo il caso che il livello sia easy

let griglia = document.querySelector(".flex")
griglia.classList.add("w-10")

for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    griglia.appendChild(square);

    square.addEventListener('click', function () {
        square.innerHTML = i;
        square.classList.add("checked")
    })
}
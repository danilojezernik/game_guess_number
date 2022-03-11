`use struct`;

document.querySelector(`#dodajIgralca1`).addEventListener(`click`, function () {
    let input = document.querySelector(`#vneseniIgralec1`).value;
    document.querySelector(`#igralec1`).textContent = `${input.toUpperCase()}`;
    document.querySelector(`#igralec1`).style.backgroundColor = `#60b347`;
})

document.querySelector(`#dodajIgralca2`).addEventListener(`click`, function () {
    let input2 = document.querySelector(`#vneseniIgralec2`).value;
    document.querySelector(`#igralec2`).textContent = `${input2.toUpperCase()}`;
    document.querySelector(`#igralec2`).style.backgroundColor = `#f07470`;
})

let secretNumber = Math.trunc(Math.random() * 50) + 1;
// console.log(secretNumber);

let number = 50;
let number1 = 50;
let highScore = 0;
let highScore1 = 0;

// IGRALEC 1
document.querySelector(`#preveri1`).addEventListener(`click`, function () {
    let vnesenaStevilka1 = Number(document.querySelector(`#number1`).value);
    let vnesenoIme = document.querySelector(`#vneseniIgralec1`).value;

    if (!vnesenaStevilka1) {
        document.querySelector(`#manj1`).textContent = `Ni številke!`;

    } else if (vnesenaStevilka1 === secretNumber) {
        document.querySelector(`#stevilkaPravilna`).textContent = `${vnesenaStevilka1}`;
        document.querySelector(`#zmagal1`).textContent = `Čestitam ${vnesenoIme}, zmagali ste!`;
        document.querySelector(`#zmagal1`).style.backgroundColor = `#60b347`;
        document.querySelector(`#zmagal1`).style.fontSize = `2rem`;

        if (number1 > highScore1) {
            highScore1 = number1;
            document.querySelector(`#highScore1`).textContent = highScore1;
        }

        // ČE JE VNESENA ŠTEVILKA MANJŠA
    } else if (vnesenaStevilka1 < secretNumber) {

        if (number1 > 1) {
            document.querySelector(`#manj1`).textContent = `Prenizka številka!`;
            number1--;
            document.querySelector(`#steviloTock1`).textContent = number1;
        } else {
            document.querySelector(`#manj1`).textContent = `Izgubili ste!`;
            document.querySelector(`#steviloTock1`).textContent = 0;
        }

    } else if (vnesenaStevilka1 > secretNumber) {

        if (number1 > 1) {
            document.querySelector(`#manj1`).textContent = `Previsoka številka!`;
            number1--;
            document.querySelector(`#steviloTock1`).textContent = number1;
        } else {
            document.querySelector(`#manj1`).textContent = `Izgubili ste!`;
            document.querySelector(`#steviloTock1`).textContent = 0;
        }

    } resetSt1 ()
})

// IGRALEC 2
document.querySelector(`#preveri2`).addEventListener(`click`, function () {
    let vnesenaStevilka2 = Number(document.querySelector(`#number2`).value);
    let vnesenoIme = document.querySelector(`#vneseniIgralec2`).value;

    if (!vnesenaStevilka2) {
        document.querySelector(`#manj2`).textContent = `Ni številke!`;

    } else if (vnesenaStevilka2 === secretNumber) {
        document.querySelector(`#stevilkaPravilna`).textContent = `${vnesenaStevilka2}`;
        document.querySelector(`#zmagal2`).textContent = `Čestitam ${vnesenoIme}, zmagali ste!`;
        document.querySelector(`#zmagal2`).style.backgroundColor = `#60b347`;
        document.querySelector(`#zmagal2`).style.fontSize = `2rem`;

        if (number > highScore) {
            highScore = number;
            document.querySelector(`#highScore2`).textContent = highScore;
        }

        // ČE JE VNESENA ŠTEVILKA MANJŠA
    } else if (vnesenaStevilka2 < secretNumber) {

        if (number > 1) {
            document.querySelector(`#manj2`).textContent = `Prenizka številka!`;
            number--;
            document.querySelector(`#steviloTock2`).textContent = number;
        } else {
            document.querySelector(`#manj2`).textContent = `Izgubili ste!`;
            document.querySelector(`#steviloTock2`).textContent = 0;
        }

        // ČE JE VNESENA ŠTEVILKA VEČJA
    } else if (vnesenaStevilka2 > secretNumber) {

        if (number > 1) {
            document.querySelector(`#manj2`).textContent = `Previsoka številka!`;
            number--;
            document.querySelector(`#steviloTock2`).textContent = number;
        } else {
            document.querySelector(`#manj2`).textContent = `Izgubili ste!`;
            document.querySelector(`#steviloTock2`).textContent = 0;
        }

    } resetSt2 ()
})

document.querySelector(`#ponovno`).addEventListener(`click`, () => {
    number = 50;
    number1 = 50;
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    // console.log(secretNumber)
    document.querySelector(`#manj2`).textContent = `Pričnite z ugibanjem`;
    document.querySelector(`#manj1`).textContent = `Pričnite z ugibanjem`;
    document.querySelector(`#stevilkaPravilna`).textContent = `?`;
    document.querySelector(`#zmagal1`).textContent = ``;
    document.querySelector(`#zmagal1`).style.backgroundColor = ``;
    document.querySelector(`#zmagal2`).textContent = ``;
    document.querySelector(`#zmagal2`).style.backgroundColor = ``;
    document.querySelector(`#steviloTock1`).textContent = 50;
    document.querySelector(`#steviloTock2`).textContent = 50;
})

function resetSt1 () {
    document.querySelector(`#number1`).value = ``;
}
function resetSt2 () {
    document.querySelector(`#number2`).value = ``;
}



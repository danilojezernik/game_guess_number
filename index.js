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
console.log(secretNumber);

let number = 50;
let number1 = 50;
let highScore = 0;
let highScore1 = 0;

let izbor1 = document.querySelector(`#preveri1`).value;
let izbor2 = document.querySelector(`#preveri2`).value;

// FUNKCIJE
let izgubiliSte1 = function (sporocilo, stevilo) {
    document.querySelector(`#manj1`).textContent = sporocilo;
    document.querySelector(`#steviloTock1`).textContent = stevilo;
}

let styleFont = function (stevilo) {
    document.querySelector(`#zmagaDesni`).style.fontSize = `${stevilo}rem`;
    document.querySelector(`#zmagal2`).style.fontSize = `${stevilo}rem`;
    document.querySelector(`#zmagal1`).style.fontSize = `${stevilo}rem`;
    document.querySelector(`#zmagaLevi`).style.fontSize = `${stevilo}rem`;
}

let zmaga1 = function (left, right) {
    document.querySelector(`#zmagaLevi`).textContent = `${left}`;
    document.querySelector(`#zmagaDesni`).textContent = `${right}`;
}

// IGRALEC 1
document.querySelector(`#preveri1`).addEventListener(`click`, function () {
    let vnesenaStevilka1 = Number(document.querySelector(`#number1`).value);
    let vnesenoIme1 = document.querySelector(`#vneseniIgralec1`).value;
    let vnesenoIme2 = document.querySelector(`#vneseniIgralec2`).value;

    // ČE SE NE VNESE ŠTEVILKA
    if (!vnesenaStevilka1) {

        if (number1 > 1) {
            document.querySelector(`#manj1`).textContent = `Ni številke!`;
            number1--;
            document.querySelector(`#steviloTock1`).textContent = number1;
        } else {
            izgubiliSte1(`Izgubili ste`, 0);
        }

        // ČE SE ŠTEVILKI UJEMATA
    } else if (vnesenaStevilka1 === secretNumber) {
        document.querySelector(`#stevilkaPravilna`).textContent = `⟶ ${vnesenaStevilka1} ⟵`;
        document.querySelector(`#zmagal1`).textContent = `Čestitam ${vnesenoIme1.toUpperCase()}, zmagali ste!`;
        document.querySelector(`#zmagal1`).style.backgroundColor = `#60b347`;
        document.querySelector(`#zmagal2`).textContent = `${vnesenoIme2.toUpperCase()}, žal ste izgubili!`
        document.querySelector(`#zmagal2`).style.backgroundColor = `#f07470`;
        document.querySelector(`#highScore2`).textContent = 0;

        // FUNKCIJE
        zmaga1(`⟵`, `⟶`)
        styleFont(2);

        //NAJVIŠJA ŠTEVILKA

        if (number1 > highScore1) {
            highScore1 = number1;
            document.querySelector(`#highScore1`).textContent = highScore1;
        }

        // ČE JE ŠTEVILKA NAPAČNA
    } else if (vnesenaStevilka1 !== secretNumber) {
        if (number > 1) {
            document.querySelector(`#manj1`).textContent = vnesenaStevilka1 > secretNumber ? `Previsoka številka!` : `Prenizka številka!`;
            number--;
            document.querySelector(`#steviloTock1`).textContent = number;
        } else {
            izgubiliSte1(`Izgubili ste`, 0)
        }
    }
    resetSt1()
})

// FUNKCIJE
let izgubiliSte2 = function (sporocilo, stevilo) {
    document.querySelector(`#manj2`).textContent = sporocilo;
    document.querySelector(`#steviloTock2`).textContent = stevilo;
}
let zmaga2 = function (right, left) {
    document.querySelector(`#zmagaLevi`).textContent = `${right}`;
    document.querySelector(`#zmagaDesni`).textContent = `${left}`;
}

// IGRALEC 2
document.querySelector(`#preveri2`).addEventListener(`click`, function () {
    let vnesenaStevilka2 = Number(document.querySelector(`#number2`).value);
    let vnesenoIme1 = document.querySelector(`#vneseniIgralec1`).value;
    let vnesenoIme2 = document.querySelector(`#vneseniIgralec2`).value;

    // ČE SE NE VNESE ŠTEVILKA
    if (!vnesenaStevilka2) {
        if (number > 1) {
            document.querySelector(`#manj2`).textContent = `Ni številke!`;
            number--;
            document.querySelector(`#steviloTock2`).textContent = number;
        } else {
            izgubiliSte2(`Izgubili ste`, 0)
        }

        // ČE SE ŠTEVILKI UJEMATA
    } else if (vnesenaStevilka2 === secretNumber) {
        document.querySelector(`#stevilkaPravilna`).textContent = `⟶ ${vnesenaStevilka2} ⟵`;
        document.querySelector(`#zmagal2`).textContent = `Čestitam ${vnesenoIme2.toUpperCase()}, zmagali ste!`;
        document.querySelector(`#zmagal2`).style.backgroundColor = `#60b347`;
        document.querySelector(`#zmagal1`).textContent = `${vnesenoIme1.toUpperCase()}, žal ste izgubili!`
        document.querySelector(`#zmagal1`).style.backgroundColor = `#f07470`;
        document.querySelector(`#highScore1`).textContent = 0;
        zmaga2(`⟶`, `⟵`)
        styleFont(2);

        //NAJVIŠJA ŠTEVILKA
        if (number > highScore) {
            highScore = number;
            document.querySelector(`#highScore2`).textContent = highScore;
        }

        // ČE JE ŠTEVILKA NAPAČNA
    } else if (vnesenaStevilka2 !== secretNumber) {
        if (number > 1) {
            document.querySelector(`#manj2`).textContent = vnesenaStevilka2 > secretNumber ? `Previsoka številka!` : `Prenizka številka!`;
            number--;
            document.querySelector(`#steviloTock2`).textContent = number;
        } else {
            izgubiliSte2(`Izgubili ste`, 0);
        }
    }
    resetSt2()
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

// RESET VPISANO ŠTEVILKO 1
function resetSt1() {
    document.querySelector(`#number1`).value = ``;
}

// RESET VPISANO ŠTEVILKO 2
function resetSt2() {
    document.querySelector(`#number2`).value = ``;
}
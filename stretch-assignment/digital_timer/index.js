let msHundreds = document.querySelector("#msHundreds");
let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msTens = document.querySelector("#msTens");

msHundreds.innerHTML = 0;
secondTens.innerHTML = 0;
secondOnes.innerHTML = 0;
msTens.innerHTML = 0;

let timer = setInterval(count, 10);

function count() {
  msTens.innerHTML++;
};

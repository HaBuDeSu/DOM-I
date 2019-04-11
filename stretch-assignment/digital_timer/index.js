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
  if (msTens.innerHTML == 9) {
    msTens.innerHTML = 0;
    if (msHundreds.innerHTML == 9) {
      msHundreds.innerHTML = 0;
      if (secondOnes.innerHTML == 9) {
        secondTens.innerHTML = 1;
        secondOnes.innerHTML = 0;
        let digits = document.querySelectorAll(".digit");
        digits.forEach(digit => digit.classList.add("redDigit"));
        clearTimeout(timer);
      } else {
        secondOnes.innerHTML++;
      };
    } else {
      msHundreds.innerHTML++;
    };
  } else {
    msTens.innerHTML++;
  };
};

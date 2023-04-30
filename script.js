const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");

const btn = document.getElementById("calculate");

const label = document.createElement("h3");
const label2 = document.createElement("h3");

function empty() {
  firstName.value = "";
  secondName.value = "";
}

function createh3() {
  label.innerHTML = `${firstName.value} & ${secondName.value} `;
  label2.innerHTML = `Your result is ${resultsRandom(1, 100)} `;
  document.body.appendChild(label);
  document.body.appendChild(label2);
}
function cleanh3() {
  label.innerHTML = "Inputs cannot be empty or a number";
  label2.innerHTML = "";
  document.body.appendChild(label);
  empty();
}
function justLetters(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (firstName.value.match(letters) && secondName.value.match(letters)) {
    return true;
  } else {
    empty();
    cleanh3();
    return false;
  }
}

function resultsRandom(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber > 0 && randomNumber <= 30) {
    return `${randomNumber}. YOU SHOULD RUN 😬`;
  } else if (randomNumber > 30 && randomNumber <= 50) {
    return `${randomNumber}. MAYBE,BUT IT WILL BE TOUGH 🙄`;
  } else if (randomNumber > 50 && randomNumber <= 70) {
    return `${randomNumber}. YOU CAN GIVE IT A TRY 😉`;
  } else {
    return `${randomNumber}. YOU ARE PERFECT FOR EACH OTHER ❤❤❤`;
  }
}
function result() {
  if (firstName.value !== "" && secondName.value !== "") {
    if (justLetters(firstName.value) && justLetters(secondName.value)) {
      createh3();
      empty();
    } else {
      cleanh3();
    }
  } else {
    cleanh3();
  }
}
btn.addEventListener("click", result);

const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");

const btn = document.getElementById("calculate");

const label = document.createElement("h3");
const label2 = document.createElement("h3");

function empty() {
  firstName.value = "";
  secondName.value = "";
}

function result() {
  if (firstName.value !== "" && secondName.value !== "") {
    label.innerHTML = `${firstName.value} and ${secondName.value}. `;
    label2.innerHTML = `Your result is ${resultsRandom(1, 100)}. `;
    document.body.appendChild(label);
    document.body.appendChild(label2);
    empty();
  } else {
    label.innerHTML = "Inputs cannot be empty";
    label2.innerHTML = "";
    document.body.appendChild(label);
    empty();
  }
}
function resultsRandom(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber > 0 && randomNumber <= 30) {
    return `${randomNumber}. YOU SHOULD RUN`;
  } else if (randomNumber > 30 && randomNumber <= 50) {
    return `${randomNumber}. MAYBE,BUT IT WILL BE TOUGH`;
  } else if (randomNumber > 50 && randomNumber <= 70) {
    return `${randomNumber}. YOU CAN GIVE IT A TRY`;
  } else {
    return `${randomNumber}. YOU ARE PERFECT FOR EACH OTHER!!!!!!!!!`;
  }
}

btn.addEventListener("click", result);

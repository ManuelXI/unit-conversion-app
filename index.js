let meterEl = document.getElementById("meter-el");
let volEl = document.getElementById("vol-el");
let kilosEl = document.getElementById("kilos-el");
let inputEl = document.getElementById("input-el").value;

function updateLength(value) {
  let val1 = (value * 3.281).toFixed(3);
  let val2 = (value / 3.281).toFixed(3);
  meterEl.innerText =
    value +
    " meters = " +
    val1 +
    " feet | " +
    value +
    " feet = " +
    val2 +
    " meters";
}

function updateVolume(value) {
  let val1 = (value / 3.785).toFixed(3);
  let val2 = (value * 3.785).toFixed(3);
  volEl.innerText =
    value +
    " liters = " +
    val1 +
    " gallons | " +
    value +
    " gallons = " +
    val2 +
    " liters";
}

function updateMass(value) {
  let val1 = (value * 2.205).toFixed(3);
  let val2 = (value / 2.205).toFixed(3);
  kilosEl.innerText =
    value +
    " kilos = " +
    val1 +
    " pounds | " +
    value +
    " pounds = " +
    val2 +
    " kilos";
}

function update() {
  let inputVal = Number(document.getElementById("input-el").value);
  updateLength(inputVal);
  updateVolume(inputVal);
  updateMass(inputVal);
}

updateLength(inputEl);
updateVolume(inputEl);
updateMass(inputEl);

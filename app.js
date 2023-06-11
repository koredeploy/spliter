let small1 = document.querySelector(".section1 small");
let small2 = document.querySelector(".section3 small");

small1.style.display = "none";
small2.style.display = "none";

let inputBill = document.querySelector(".bill");
let nop = document.querySelector(".nop");
let form = document.querySelector(".container");
let customInp = document.querySelector(".custom");
let percentButtons = document.querySelectorAll(".section2 button");
let tipPerPersonDisplay = document.querySelector(".tip-person");
let tipTotalDisplay = document.querySelector(".tip-total");
let resetBtn = document.querySelector(".reset");




let billAmount = null;
let numberOfPeople = null;
// let customValue = 0;
let percent = null;

function calculate() {
  let priceperPerson = billAmount / numberOfPeople;
  let tipPerPerson = (priceperPerson * percent) / 100;
  // console.log(tipPerPerson);
  let totalPerPerson = priceperPerson + tipPerPerson;
  tipPerPersonDisplay.textContent = `$${tipPerPerson}`;
  tipTotalDisplay.textContent = `$${totalPerPerson}`;
}

function checkErrorState(){
  if(billAmount == null || billAmount === ''){
    small1.style.display = "block";
  } else{
    small1.style.display = "none";
  }
  
  if(numberOfPeople == null || billAmount === ''){
    small2.style.display = "block";
  } else{
    small2.style.display = "none";
  }
  
}

percentButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    percent = e.target.value;
  });
});

  form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (billAmount !== null && numberOfPeople !== null && percent !== null) {
    calculate();
  } else {
    // console.log("not allowed to calculate");
    checkErrorState()
  }

  // console.log(billAmount);
  // console.log(numberOfPeople);
  // console.log(customValue);
});

inputBill.addEventListener("change", (event) => {
  billAmount = event.target.value;
});
inputBill.addEventListener('focusin', ()=>{
  small1.style.display = "none";
})

nop.addEventListener("change", (event) => {
  numberOfPeople = event.target.value;
});

nop.addEventListener('focusin', ()=>{
  small2.style.display = "none";
})

customInp.addEventListener("change", (e) => {
  percent = e.target.value;
});

customInp.addEventListener("focusout", () => {
  calculate();
});

// function reserValue() {
//   // tipPerPersonDisplay.textContent = 0
//   // tipTotalDisplay.textContent = 0
//   priceperPerson = 0;
//   tipPerPerson = 0;
//   totalPerPerson = 0;
//   tipPerPersonDisplay.textContent = `$${tipPerPerson}`
//   tipTotalDisplay.textContent = `$${totalPerPerson}`
// }

resetBtn.addEventListener("click", () => {
  billAmount = null;
  numberOfPeople = null;
  percent = null;
  tipPerPersonDisplay.textContent = "$0";
  tipTotalDisplay.textContent = "$0";
  inputBill.value = "";
  nop.value = "";
});

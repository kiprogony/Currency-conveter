
const theApi = "https://api.exchangerate-api.com/v4/latest/USD";

let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrecy = document.querySelector(".from");
let toCurrecy = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
search.addEventListener('input', updateValue);

function updateValue(e) {
  searchValue = e.target.value;
}

convert.addEventListener("click",getResults);
 //function to get the results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

  
let onionarray = {};
let data = 0;

document.addEventListener("DOMContentLoaded", function () {
fetch('https://api.exchangeratesapi.io/latest')
    .then((resp) => resp.json())
    .then((data) => {
        onionarray = data.rates;      
    });
    return onionarray
});

let calculate = function (num) {   
    let outputCurr = document.querySelector('.output__input');
    let index = document.querySelector('select').selectedIndex;
    let currencyName = document.querySelectorAll('option')[index].value;
    let currentCurrency = onionarray[currencyName]
        
    outputCurr.value = num * currentCurrency;
    return data = num;
}


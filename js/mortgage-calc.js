// the Code

// Attempt

// function calculator(balance, term, rate)

// let totalMonthly = (amount)*(rate/1200)/(1-(1+rate/1200)term);

// let previousBalance = remainBalance * rate / 1200;

// let interestPayment = previousBalance * rate / 1200;

// let principalPayment = totalPayment - interestPayment;

// let currentBalance = previousBalance - principalPayment;


// The formula: c = (r * p) / (1 - (Math.pow(1 + r), (-n) ))
// @param p float amount borrowed
// @param r interest as a percentage
// @param n term in years
function calculateMortgage(p, r, n) {
    
    // convert this percentage to a decimal
    r = percentToDecimal(r);

    // convert years to months
    n = yearsToMonths(n);
    
    let pmt =  (r * p) / (1 - (Math.pow((1 + r), (-n))));

    return parseFloat(pmt.toFixed(2));
};


function percentToDecimal(percent) {
    return (percent/12)/100;
};

function yearsToMonths(year) {
    return year * 12;
};

function postPayments(payment) {
    let htmlEl = document.getElementById("outMonthly");

    htmlEl.innerText = "$" + payment;
};

let btn = document.getElementById("btnCalculate");

btn.onclick = function() {
    let amount = document.getElementById("inAmount").value;

    if (amount == "") {
        alert("Please Enter an Amount")
        return false;
    }
    
    
    if (amount < 0) {
        alert("Invalid Amount")
        return false;
    }

    let downPayment = document.getElementById("inDown").value;
    
    // Regular expression
    
    let interest = document.getElementById("inAPR").value;
    // check if interest has "%" sign
    
    let term = document.getElementById("inPeriod").value;
    
    let amountBorrowed = amount - downPayment;

    let pmt = calculateMortgage(amountBorrowed, interest, term);

    postPayments(pmt);
};


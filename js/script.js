function getValues() {
    let loanAmount = document.getElementById("userLoan").value;
    let monthAmount = document.getElementById("userMonths").value;
    let rateAmount = document.getElementById("userRate").value;
    let monthOrYear = document.querySelector('input[name="monthYear"]:checked').value;

    let interest = interestCalculator(loanAmount, rateAmount);
    let dollar = moneyFormat(interest);

    document.getElementById("principalAmount").innerHTML = `${dollar}`;

    let months = monthRange(monthAmount);

    displayData(months, dollar, loanAmount, interest);

}

function moneyFormat(format) {
    let money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(format)
    return money;
}

function interestCalculator(loan, rate) {
    let decimalRate = rate / 100;
    let monthlyRate = decimalRate / 12;
    let monthlyInterest = monthlyRate * loan;
    let montlhyPercent = monthlyRate * 100;

    return monthlyInterest;
}

function monthRange(month) {
    let range = [];

    for (let i = 0; i <= month; i++) {
        range.push(i);
    }

    return range;
}

function displayData(month, payment, principal, interest) {
    let tableBody = document.getElementById("results");
    let tableTemplate = document.getElementById("loanTable");

    //clear table
    tableBody.innerHTML = "";

    for (let i = 0; i < month.length; i += 1) {
        let tableRow = document.importNode(tableTemplate.content, true);

        //grab td to put into array
        let rowCols = tableRow.querySelectorAll("td");

        let addedInterest = interest += interest;

        rowCols[0].textContent = month[i];

        rowCols[1].textContent = payment;

        rowCols[2].textContent = principal;

        rowCols[3].textContent = interest;

        rowCols[4].textContent = addedInterest;

        rowCols[5].textContent = principal + interest;

        tableBody.appendChild(tableRow);
    }
}
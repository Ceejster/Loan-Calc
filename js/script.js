function getValues() {
    let loanAmount = document.getElementById("userLoan").value;
    let monthAmount = document.getElementById("userMonths").value;
    let rateAmount = document.getElementById("userRate").value;
    let monthOrYear = document.querySelector('input[name="monthYear"]:checked').value;

    let interest = interestCalculator(loanAmount, rateAmount);
    let dollar = moneyFormat(interest);

    document.getElementById("principalAmount").innerHTML = `${dollar}`;

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
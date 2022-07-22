// deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;

    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountText = depositAmount.innerText;
    // update deposit amount
    const depositTotalParseFloat = parseFloat(depositAmountText) + parseFloat(depositValue);
    depositAmount.innerText = depositTotalParseFloat;

    // update total and set deposit amount
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;

    // count and set the total balance amount
    const totalBalanceFloat = parseFloat(depositValue) + parseFloat(balanceTotalText);
    balanceTotal.innerText = totalBalanceFloat;

    // clear the input field
    depositInput.value = '';
})

// withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;

    // update withdraw amount
    const withdrawAmountParse = parseFloat(withdrawInputValue) + parseFloat(withdrawAmountText);

    // update total and set withdraw amount 
    withdrawAmount.innerText = withdrawAmountParse;

    // count and set the total balance amount
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;
    const balanceParse = parseFloat(balanceTotalText) - parseFloat(withdrawInputValue);

    balanceTotal.innerText = balanceParse;

    // clear the input field
    withdrawInput.value = '';
})
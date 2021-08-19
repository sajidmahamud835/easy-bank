//select the total balance
const balanceTotal = document.getElementById('balance-total');

/**********input validation**********/
function inputValidation(inputAmount) {
    //block empty input
    if (inputAmount == '') {
        alert('Value cannot be empty.');
        return 0;
    }
    //set minmum deposit ammount
    if (inputAmount < 2) {
        alert('Minimum deposit ammount is 2$.');
        return 0;
    }
    //set maximum deposit ammount
    if (inputAmount > 10000) {
        alert('Maximum deposit ammount is 10000$.');
        return 0;
    }
    else {
        return inputAmount;
    }
}

/***********get input ammount**********/
function inputAmount(inputId) {
    //get input value
    const inputSelector = document.getElementById(inputId);
    let inputAmount = inputSelector.value;

    //pass input validation
    inputAmount = inputValidation(inputAmount);

    //clear the value after deposit
    inputSelector.value = '';

    return inputAmount;
}

/***********update total amount**********/
function updateTotalAmount(totalFeildId, inputAmount) {
    const totalFeildAmount = document.getElementById(totalFeildId);
    totalFeildAmount.innerText = parseFloat(totalFeildAmount.innerText) + parseFloat(inputAmount);
}

/***********update total amount**********/
function updateBalance(inputName, inputAmount) {
    if (inputName == 'withdraw-input') {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(inputAmount);
    }
    else {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(inputAmount);
    }
}

/**********handel deposit button*********/
document.getElementById('deposit-button').addEventListener('click', function () {
    //get ammount deposited
    const depositAmount = inputAmount('deposit-input');
    //update total amount
    updateTotalAmount('deposit-total', depositAmount)
    //update blance
    updateBalance('deposit-input', depositAmount);
})

/**********handel withdraw button*********/
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get ammount withdrawen
    const withdrawAmount = inputAmount('withdraw-input');
    //fuard control
    if (withdrawAmount > parseFloat(balanceTotal.innerText)) {
        return alert("You don't have enough balance to withdraw.")
    }
    //update total amount
    updateTotalAmount('withdraw-total', withdrawAmount)
    //update blance
    updateBalance('withdraw-input', withdrawAmount);
})
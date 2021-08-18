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

/**********get input ammount**********/
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

// ////////////////////////////////////////////////////
// ////////////input event handelr funciton////////////
// ////////////////////////////////////////////////////

// function inputEventHandeler(inputId, displayId) {
//     //get input value
//     const inputAmount = document.getElementById(inputId).value;

//     // //call input validation
//     inputValidation(inputAmount);

//     //value updater
//     const currentValue = document.getElementById(displayId);
//     currentValue.innerText = parseFloat(currentValue.innerText) + parseFloat(inputAmount);

//     //clear the value after deposit
//     document.getElementById(inputId).value = '';

//     //Update balance
//     const currentBalance = document.getElementById('balance-total')
//     if (inputId == 'deposit-input') {
//         currentBalance.innerText = parseFloat(currentBalance.innerText) + parseFloat(inputAmount);
//     }
//     else if (inputId == 'withdraw-input') {
//         currentBalance.innerText = parseFloat(currentBalance.innerText) + parseFloat(inputAmount);
//     }
//     else {
//         return console.log('Invalid id was passed to inputEventHandler function.')
//     }
// }
// //////////////////////////////////////////////////////////
// ////////////////deposit button event handeler/////////////
// //////////////////////////////////////////////////////////

// document.getElementById('deposit-button').addEventListener('click', inputEventHandeler('deposit-input', 'deposit-total')); //argument must be a string

//handel deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get ammount deposited
    const depositAmmount = inputAmount('deposit-input');

    const depositTotal = document.getElementById('deposit-total');

    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmmount);

    //Update blance
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmmount);
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get ammount withdrawen
    const withdrawAmmount = inputAmount('withdraw-input');

    //fuard control
    if (withdrawAmmount > parseFloat(balanceTotal.innerText)) {
        return alert("You don't have enough balance to withdraw.")
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmmount);

    //Update blance
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmmount);
})


// //handel deposit button
// const balanceTotal = document.getElementById('balance-total');
// document.getElementById('deposit-button').addEventListener('click', function () {
//     //get ammount deposited
//     const depositInput = document.getElementById('deposit-input');
//     const depositAmmount = depositInput.value;
//     //input validation
//     if (depositAmmount == '') {
//         return alert('Value cannot be empty.')
//     }
//     if (depositAmmount < 2) {
//         return alert('Minimum deposit ammount is 2$.');
//     }
//     if (depositAmmount > 10000) {
//         return alert('Maximum deposit ammount is 10000$.');
//     }
//     const depositTotal = document.getElementById('deposit-total');

//     depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmmount);

//     //clear the value after deposit
//     depositInput.value = '';

//     //Update blance
//     balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmmount);
// })

// document.getElementById('withdraw-button').addEventListener('click', function () {
//     //get ammount withdrawen
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmmount = withdrawInput.value;
//     //input validation
//     if (withdrawAmmount == '') {
//         return alert('Value cannot be empty.')
//     }
//     if (withdrawAmmount < 2) {
//         return alert('Minimum withdraw ammount is 2$.');
//     }
//     if (withdrawAmmount > 10000) {
//         return alert('Maximum withdraw ammount is 10000$.');
//     }
//     //fuard control
//     if (withdrawAmmount > parseFloat(balanceTotal.innerText)) {
//         return alert("You don't have enough balance to withdraw.")
//     }
//     const withdrawTotal = document.getElementById('withdraw-total');
//     withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmmount);



//     //clear the value after withdraw
//     withdrawInput.value = '';

//     //Update blance
//     balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmmount);
// })
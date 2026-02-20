document.getElementById('add-money-btn').addEventListener('click', function () {
    //get the bankACCnumber and validate
    const bankNumber = document.getElementById('bank-number');
    const getBankNumber = bankNumber.value;
    if(getBankNumber.length !==7){
        alert('Invalid Bank Account Number!')
        return;
    }

    //get the amount and validate
    const getAmountElement = document.getElementById('deposit');
    const depositBalance = getAmountElement.value;
    const Deposit=Number(depositBalance);

    if (depositBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    //get the current balance
    const currentBalance = getBalance();


    //calculate new balance
    const newBalance = currentBalance +Deposit;
    //console.log(newBalance);

    //get the pin and verify
    const pinNumber = document.getElementById('deposit-pin');
    const pin = pinNumber.value;
    if (pin === "1122") {
        //true---show an alert and set balance
        alert('Money Added Succesfully');
        setBalance(newBalance);
    } else {
        //false--alrt and return
        alert('Invalid pin');
        return;
    }


})

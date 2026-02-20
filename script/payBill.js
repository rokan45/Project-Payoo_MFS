document.getElementById('pay-btn').addEventListener('click', function () {
    //get the agent number and validate
    const agentNumber = document.getElementById('bank-number');
    const getNumber = agentNumber.value;
    if(getNumber.length !==7){
        alert('Invalid Number!')
        return;
    }
    
    //get the current balance
    const currentBalance = getBalance();

    //get the amount and validate
    const billamountElement = document.getElementById('bill-amount');
    const billAmount = billamountElement.value;

    if (billAmount > currentBalance) {
        alert('Invalid Amount');
        return;
    }


    //calculate new balance
    const newBalance = currentBalance - billAmount;
    console.log(newBalance);

    
    //get the pin and verify
    const pinNumber = document.getElementById('user-pin');
    const pin = pinNumber.value;
    if (pin === "1122") {
        //true---show an alert and set balance
        alert('Payment Successful');
        setBalance(newBalance);
    } else {
        //false--alrt and return
        alert('Invalid pin');
        return;
    }


})

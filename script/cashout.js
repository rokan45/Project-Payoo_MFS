document.getElementById('cashout-btn').addEventListener('click', function () {
    //get the agent number and validate
    const agentNumber = document.getElementById('agent-number');
    const getNumber = agentNumber.value;
    if(getNumber !==11){
        alert('Invalid Number!')
        return;
    }

    //get the amount and validate
    const withDrawAmount = document.getElementById('amount');
    const getAmount = withDrawAmount.value;

    //get the current balance
    const balanceElement = document.getElementById('balance');
    const getCurrentBalance = balanceElement.innerText;


    //calculate new balance
    const newBalance = Number(getCurrentBalance) - Number(getAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    //get the pin and verify
    const pinNumber = document.getElementById('cashout-pin');
    const pin = pinNumber.value;
    if (pin === "1122") {
        //true---show an alert and set balance
        alert('Cashout Successful');
        balanceElement.innerHTML=newBalance;
    } else {
        //false--alrt and return
        alert('Invalid pin');
        return;
    }


})

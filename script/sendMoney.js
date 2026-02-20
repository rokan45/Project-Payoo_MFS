document.getElementById('send-money-btn').addEventListener('click', function () {
    //get the agent number and validate
    const userNumber = document.getElementById('user-number');
    const getNumber = userNumber.value;
    if (getNumber.length !== 11) {
        alert('Invalid Number!')
        return;
    }

    //get the current balance
    const currentBalance = getBalance();


    //get the amount and validate
    const getamountElemnt = document.getElementById('amount');
    const sendMoneyAmount = getamountElemnt.value;
    const sendMoney =Number(sendMoneyAmount);

    if (sendMoneyAmount > currentBalance) {
        alert('Invalid Amount');
        return;
    }


    //calculate new balance
    const newBalance = currentBalance - sendMoney;
    console.log(newBalance);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    //get the pin and verify
    const pinNumber = document.getElementById('user-pin');
    const pin = pinNumber.value;
    if (pin === "1122") {
        //true---show an alert and set balance
        alert('Send Money Successful');
        setBalance(newBalance);
    } else {
        //false--alrt and return
        alert('Invalid pin');
        return;
    }


})

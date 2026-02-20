//User defined function to get element value easily
function getValue(id) {
    const Input = document.getElementById(id);
    const Value = Input.value;
    return Value;
}

//To access current balance easily
function getBalance(){
    const Balance=document.getElementById('balance');
    const mainBalance=Balance.innerText;

    return Number(mainBalance);
}

//setbalance function
function setBalance(value){
   const Balance= document.getElementById('balance');
   Balance.innerText=value;
}

//Cashout page landing
document.getElementById('cash-out-btn').addEventListener('click',function(){
      window.location.replace("cashoutPage.html");
   
})

//Add Money page landing
document.getElementById('add-money-page').addEventListener('click',function(){
      window.location.replace("addMoney.html");
   
})

//send money page
document.getElementById('send-money-btn').addEventListener('click',function(){
      window.location.replace("sendMoney.html");
   
})


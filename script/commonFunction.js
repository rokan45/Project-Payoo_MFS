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

//add money select validation

function getValueFromInput(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        return element.value;
    }
    return "";
}

//Add Money page landing
document.getElementById('add-money-page').addEventListener('click',function(){
      window.location.replace("addMoney.html");
   
})

//Cashout page landing
document.getElementById('cash-out-page').addEventListener('click',function(){
    window.location.replace("cashoutPage.html");
    
})

//Transfer money page
document.getElementById('transfer-page').addEventListener('click',function(){
      window.location.replace("sendMoney.html");
   
})
//Bonous Page
document.getElementById('bonous-page').addEventListener('click',function(){
      window.location.replace("getBonous.html");
   
})

//Pay Bill Page
document.getElementById('pay-bill-page').addEventListener('click',function(){
      window.location.replace("payBill.html");
   
})


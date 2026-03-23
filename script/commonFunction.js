// commonFunction.js

// User defined function to get element value easily
function getValue(id) {
    const Input = document.getElementById(id);
    const Value = Input.value;
    return Value;
}

// To access current balance easily
function getBalance() {
    const Balance = document.getElementById('balance');
    const mainBalance = Balance.innerText;
    return Number(mainBalance);
}

// setbalance function
function setBalance(value) {
    const Balance = document.getElementById('balance');
    Balance.innerText = value;
}

// add money select validation
function getValueFromInput(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        return element.value;
    }
    return "";
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add Money page landing
    const addMoneyPageBtn = document.getElementById('add-money-page');
    if (addMoneyPageBtn) { // Always good to check if the element exists before adding a listener
        addMoneyPageBtn.addEventListener('click', function() {
            window.location.replace("addMoney.html");
        });
    } else {
        console.error("Error: Element with ID 'add-money-page' not found.");
    }

    // Cashout page landing
    const cashOutPageBtn = document.getElementById('cash-out-page');
    if (cashOutPageBtn) {
        cashOutPageBtn.addEventListener('click', function() {
            window.location.replace("cashoutPage.html");
        });
    } else {
        console.error("Error: Element with ID 'cash-out-page' not found.");
    }

    // Transfer money page
    const transferPageBtn = document.getElementById('transfer-page');
    if (transferPageBtn) {
        transferPageBtn.addEventListener('click', function() {
            window.location.replace("sendMoney.html");
        });
    } else {
        console.error("Error: Element with ID 'transfer-page' not found.");
    }

    // Bonus Page
    const bonousPageBtn = document.getElementById('bonous-page');
    if (bonousPageBtn) {
        bonousPageBtn.addEventListener('click', function() {
            window.location.replace("getBonous.html");
        });
    } else {
        console.error("Error: Element with ID 'bonous-page' not found.");
    }

    // Pay Bill Page
    const payBillPageBtn = document.getElementById('pay-bill-page');
    if (payBillPageBtn) {
        payBillPageBtn.addEventListener('click', function() {
            window.location.replace("payBill.html");
        });
    } else {
        console.error("Error: Element with ID 'pay-bill-page' not found.");
    }
});
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

//deposite button event handler
const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click",function(){
    
    const depositeNumber = getInputNumber("depositeAmount");

    updateSpanText("currentDeposite",depositeNumber);
    updateSpanText("currentBalance",depositeNumber);


    document.getElementById("depositeAmount").value = "";
})

function updateSpanText(id,depositeNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositeNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

//withdraw button event handler
const withdrawBtn = document.getElementById("getWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmountNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentWithdraw",withdrawAmountNumber)

    updateSpanText("currentBalance",-1*withdrawAmountNumber);

    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
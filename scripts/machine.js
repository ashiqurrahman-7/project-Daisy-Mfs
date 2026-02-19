console.log("machine added");

//machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}


//machine -> balance
function getBalance(){
    const balanceElement=document.getElementById("balance");
   const balance= balanceElement.innerText;
   console.log("Current Balance: ",Number(balance));
   return Number(balance);
}

// machine -> set Balance
function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText = value;
}





//machine id > hide all > show the one with the id
function showOnly(id){
    
    const addmoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    const history=document.getElementById("history");
    console.log(`add money -${addmoney}, Cashout - ${cashout}, History - ${history}`);

    //sobai ke hide kore dibo
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");


    //id wala element ke show korbo
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
}
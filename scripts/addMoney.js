document.getElementById("add-money-btn").addEventListener("click",function(){
  console.log("add money button clicked");
    //1 - Get Bank Account
    const bankAccount = getValueFromInput("add-money-bank")
       if(bankAccount == "Select a Bank"){
        alert("Please Select a Bank");
        return;
       }

       //2- Get bank account number 
       const accno = getValueFromInput("add-money-number");
         if(accno.length != 11){
            alert("Invalid Account Number")
            return;
         }

         //3 - get amount
         const amount= getValueFromInput("add-money-amount");
            const currentBalance = getBalance();
            const newBalance = currentBalance + Number(amount);
            //get balance aita machine.js theke use korsi oita ekta common function 
            // const newBalance = getBalance() + Number(amount);   aivhabe na likhe currentBalance e getBalance diye kora valo . 
            console.log(newBalance);


            // 4- get pin ,veirfy pin 
            const pin = getValueFromInput("add-money-pin");
            if(pin == "1234"){
                // alert("Money Added Successfully !!!");
                alert(`Add Money Successfull from ${bankAccount} account number ${accno}
                  amount ${amount} tk added to your balance date ${new Date().toLocaleString()}`);
                setBalance(newBalance); // setBalance oita machine.js theke use korsi oita ekta common function and aitar maane hoose jodi pin correct hoy tahole new balance  hisebe update kore dibo




                // 37 number line theke else er aage porjonto aituk kaaj holo transaction er history dekhar joonooooo 
                //1-history container ke dhore niye ashbo
                const history = document.getElementById("history-container")
                //2- new div create korbo
                const newHistory = document.createElement("div");
                //3- new div er vitore innerHTML add korbo
                newHistory.innerHTML=`
                    <div class="transaction-card p-5 bg-purple-300 text-white rounded">
                    Add Money Successfull from ${bankAccount} account number ${accno}
                  amount ${amount} tk added to your balance date ${new Date().toLocaleString()}
                </div>
                `
                //4 - History container er vitore new div ke add korbo

                history.append(newHistory);
            }
            else{
                alert("Invalid PIN");
                return;
            }


});
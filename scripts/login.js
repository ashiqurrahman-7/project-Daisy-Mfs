const btns=document.getElementById("login-btn").addEventListener('click',function(){
    //1: get the mobile number  input 
     const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    //2: get the mobile number pin
    const inputPin = document.getElementById("input-pin");
    const  pin = inputPin.value;
    console.log(pin);
   //3: match both mobile number and pin and make decision 
   if(contactNumber == "01726236809" && pin == "1234"){
         //3.1 if true :::>>>> alert> homepage 
        // alert('Login successfully !!!');

        //ay line dewar maane hole number and pin match hole se home page nia jaaabe ..  (replace use korle seita aager page er data te fire jete pare na but assign use korle login page to home page then abar home page e move korte paaare )
        // window.location.replace("/home.html");
        window.location.assign("home.html");
   }
   else{
    //3.2 if false :::>>>> alert> wrong information 
    alert("Login failed !!!");
    return;
   }
   
    

   

});

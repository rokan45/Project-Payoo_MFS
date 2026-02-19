console.log("Im connected")

document.getElementById('login-btn').addEventListener('click',function(){
    //get the number
    const contactNumber=document.getElementById('input-number');
    const getNumber=contactNumber.value;
    
    //get the pin
    const userPin=document.getElementById('input-pin');
    const getPin=userPin.value;
   
    //match the pin and number
    if(getNumber=='01711111111' && getPin=="1122"){
         //--if match go to homepage
        alert("Go to homepage");
        window.location.replace("homepage.html");
    }
    else{
         //--if not reject
        alert("Input valid number and password");
    }
   
   
})
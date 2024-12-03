function validate() {
    const username = document.getElementById("username").value; 
    const nameError = document.getElementById("nameError");
    let namestatus = false;
    const alphaExp = /^[a-zA-Z]+$/; 
  
   const mobile = document.getElementById("mobile").value;
   const mobileError = document.getElementById("mobileError");
   let mobilestatus = false;
   const numExp = /^[0-9]+$/;
  
  
   const email = document.getElementById("email").value;
   const emailError = document.getElementById("emailError");
   let emailstatus  = false;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/; 

   const address = document.getElementById("address").value; 
   const addressError = document.getElementById("addressError");
   let addressstatus = false;
   const  AdressRegex = /^[a-zA-Z0-9-_]/;

   const occupation= document.getElementById("occupation").value; 
   const occupationError = document.getElementById("occupationError");
   let occupationstatus = false;
   const occupationExp = /^[a-zA-Z]/; 
  
  
   //name validate
  if(username === "") {
    nameError.innerHTML = "Name is Mandatory";
   } else {
    if (username.match(alphaExp)) {  
      nameError.innerHTML = "" ; 
      namestatus = true;
     } else{
       nameError.innerHTML = "only characters" ;
    } 
   } 
   
    //mobile validate
    if(mobile === "") {
      mobileError.innerHTML = "Mobile number is Mandatory";
     } else {
      if (mobile.match(numExp)) {
        if (mobile.length === 10) {
           mobileError.innerHTML = "";
           mobilestatus = true;
         } else {
           mobileError.innerHTML = "10 Digits Mobile Number";
         }
       } else {
         mobileError.innerHTML = "only Digits";
       }
    }  
    
    //email validation
    if (email === "") {
       emailError.innerHTML = "Email is mandatory";
     } else {
      if (email.match(emailRegex)) {
        emailError.innerHTML = "" ;
        emailstatus = true;
      } else {
        emailError.innerHTML = "Invalid Email";
      }
     }
 
     //address validate
     if(address === "") {
         addressError.innerHTML = "Address is Mandatory";
        } else {
         if (address.match(AdressRegex)) {  
           addressError.innerHTML = "" ; 
           addressstatus = true;
          } else{
            addressError.innerHTML = "invalid address" ;
         } 
        } 
       
        //occupation validate

     if(occupation === "") {
    occupationError.innerHTML = "occupation is Mandatory";
   } else {
    if (occupation.match(occupationExp)) {  
      occupationError.innerHTML = "" ; 
      occupationstatus = true;
     } else{
       occupationError.innerHTML = "only characters" ;
    } 
   } 
   
   
    //return

    if(namestatus && mobilestatus && emailstatus && addressstatus && occupationstatus){
      return true;
     } else{
       return false; 
     } 
    }
    
    
   
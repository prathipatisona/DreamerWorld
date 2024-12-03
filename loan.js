function loancheck(){
    const username = document.getElementById("username").value ;
    const cibil = document.getElementById("cibil").value ;
    const salary = document.getElementById("salary").value ;
    const status = document.getElementById("status");
    let msg = "";

    if(cibil>800 && salary > 60000){
    meg =(" congratulation " + username  + " ! you are eligible for 20 lakhs loan ");
} else if(cibil>780 && salary > 50000) {
    msg =(" congratulation " + username + " ! you are eligible for 15 lakhs loan " );
} else if(cibil>760 && salary > 40000) {
    msg =(" congratulation " + username + " ! you are eligible for 10 lakhs loan " );
} else if(cibil>720 && salary > 30000) {
    msg =(" congratulation " + username + " ! you are eligible for 5 lakhs loan " );
} else {
    msg =("Better Luck Next Time");
    }
    
    status.innerHTML = msg;
}
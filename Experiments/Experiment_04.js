function myFunction(){
    // Get values using DOM
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;


    // clear old message
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;

    if(userName == ""){
        document.getElementById("nameError").innerHTML = "Name field is required.."
        isValid = false;
    }

    if(userEmail == "" || userEmail.indexOf('@') == -1){
        document.getElementById("emailError").innerHTML = "Email field is required.."
        isValid = false;
    }

    if(userPassword == "" || userPassword.length<=6){
        document.getElementById("passwordError").innerHTML = "Password field is required.."
        isValid = false;
    }

}
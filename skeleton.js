const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");

function validatePasswords(){
    if(confirmPassword.value===""){
        confirmPassword.setCustomValidity("");
        return;
    }
    if(password.value!=confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords dont match");
    }else{
        confirmPassword.setCustomValidity("");
    }
}
password.addEventListener("input",validatePasswords);
confirmPassword.addEventListener("input",validatePasswords);

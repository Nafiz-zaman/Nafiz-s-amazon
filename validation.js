function validation(){
    // Variables
    var name = document.querySelector("#N").value;
    var email = document.querySelector("#Em").value;
    
    var result = document.querySelector("#result");
    
    // Main function
    if (name === "0"|| name == null){
        result.textContent = "Name is required";
    } else if (email === "0"|| email == null){
        result.textContent = "Email is required";
    } else {
        result.textContent = "Welcome";
    }
}
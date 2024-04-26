// Function to validate login credentials
function validateLogin() {

    // Get the values entered in the email and password fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Check if the entered email and password match the predefined values
    // If matched, show an alert indicating successful login
    if (email === "admin@admin.com" && password === "123456") {


        alert("Login successful");
    } // If not matched, show an alert indicating incorrect email or password 
    else {



        alert("Incorrect email or password");
    }
}




document.addEventListener('DOMContentLoaded', function() {
     const form = document.getElementById("registration-form") 
     const feedbackDiv = document.getElementById("form-feedback")

     form.addEventListener('submit', function(){
        event.preventDefault(); 
        
        const messages = []
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim();

     

    var  isValid = true
    
    
    
    if (username.length < 3) {
        isValid = false;
        messages.push("Your username is too short!")
    } 
    if (!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push("Email must contain both '@' and '.' characters.")
    }
    if (password.length < 8) {
        isValid = false;
        messages.push("Password should be at least 8 characters long.")       
    }
    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; 
    } else {
        feedbackDiv.innerHTML = messages.join("<br>"); 
        feedbackDiv.style.color = "#dc3545"; 
    }

},)})
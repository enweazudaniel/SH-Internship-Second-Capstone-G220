function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function validateForm() {
//check empty password field
if(Password == "") {
  document.getElementById("message1").innerHTML = "**Fill the password please!";
  return false;
}

//check empty confirm password field
if(Password1 == "") {
  document.getElementById("message2").innerHTML = "**Enter the password please!";
  return false;
}

if(Password != Password1) {
  document.getElementById("message2").innerHTML = "**Passwords are not same";
  return false;
} else {
  alert ("Your password created successfully");
  document.write("JavaScript form has been submitted successfully");
}
}

const togglePassword = document
    .querySelector('#togglePassword');

const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {

    // Toggle the type attribute using
    // getAttribure() method
    const type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';

    password.setAttribute('type', type);

    // Toggle the eye and bi-eye icon
    this.classList.toggle('bi-eye');
});

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
if(Password1 == "") {
  document.getElementById("message1").innerHTML = "**Fill the password please!";
  return false;
}

//check empty confirm password field
if(Password2 == "") {
  document.getElementById("message2").innerHTML = "**Enter the password please!";
  return false;
}

//minimum password length validation
if(Password1.length < 8) {
  document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
  return false;
}

//maximum length of password validation
if(Password1.length > 15) {
  document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
  return false;
}

if(Password1 != Password2) {
  document.getElementById("message2").innerHTML = "**Passwords are not same";
  return false;
} else {
  alert ("Your password created successfully");
  document.write("JavaScript form has been submitted successfully");
}
}

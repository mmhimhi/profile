// ================================== Validation =============================================
var username = document.getElementById("username");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");

// check if name is up to 4 characters, if it's not up to 4. Disable other input fields until the name is corrected.
function checkName() {
    if (username.value.length < 4) {
        username.className = "error";
        document.getElementById("nameError").style.display = "block";
        submit.setAttribute('disabled', 'disabled'); // disable the submit button if there's error.
    }
    else {
        username.className = "normal";
        document.getElementById("nameError").style.display = "none";
        submit.removeAttribute('disabled'); // remove the disabled attribute to activate the button.
    }
}

function removeNameError() {
    document.getElementById("nameError").style.display = "none";
}

if (username.addEventListener) {
    username.addEventListener('blur', checkName, false);
    username.addEventListener('focus', removeNameError, false);
}

// If email is the right format

function checkEmail() {

    // format for email validation
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailFormat.test(email.value) == false) {
        email.className = "error";
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").textContent = "Wrong email format, please try again!";
        submit.setAttribute('disabled', 'disabled');
    }
    else {
        email.className = "normal";
        //document.getElementById("emailError").style.display = "none";
        submit.removeAttribute('disabled');
    }
}

function removeEmailError() {
    document.getElementById("emailError").style.display = "none";
    email.className = "normal";
}

if (email.addEventListener) {
    email.addEventListener('blur', checkEmail, false);
    email.addEventListener('focus', removeEmailError, false);
}



// At least 20 characters for the message

function checkMessage() {
    if (message.value.length < 20) {
        message.className = "textarea-error";
        document.getElementById("messageError").style.display = "block";
        submit.setAttribute('disabled', 'disabled');
    }
    else {
        message.className = "normal";
        document.getElementById("messageError").style.display = "none";
        submit.removeAttribute('disabled');
    }
}

function removeMessageError() {
    document.getElementById("messageError").style.display = "none";
    message.className = "normal";
}

if (message.addEventListener) {
    message.addEventListener('blur', checkMessage, false);
    message.addEventListener('focus', removeMessageError, false);
}

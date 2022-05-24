function activateSignInForm() {
    // Creating variables
    let signinForm = document.getElementById("signin-form");
    let signupForm = document.getElementById("signup-form");
    let formContainer = document.getElementById("form-container");
    let optionContainer = document.getElementById("option-container");
    let backgroundOption = document.getElementById("background-option");

    // Applying values
    signinForm.classList.remove("off");
    signupForm.classList.remove("on");
    signinForm.classList.add("on");
    signupForm.classList.add("off");

    formContainer.classList.remove("signup");
    optionContainer.classList.remove("signin");
    formContainer.classList.add("signin");
    optionContainer.classList.add("signup");

    backgroundOption.classList.remove("signin");
    backgroundOption.classList.add("signup");
}

function activateSignUpForm() {
    // Creating variables
    let signinForm = document.getElementById("signin-form");
    let signupForm = document.getElementById("signup-form");
    let formContainer = document.getElementById("form-container");
    let optionContainer = document.getElementById("option-container");
    let backgroundOption = document.getElementById("background-option");

    // Applying values
    signinForm.classList.remove("on");
    signupForm.classList.remove("off");
    signinForm.classList.add("off");
    signupForm.classList.add("on");

    formContainer.classList.remove("signin");
    optionContainer.classList.remove("signup");
    formContainer.classList.add("signup");
    optionContainer.classList.add("signin");

    backgroundOption.classList.remove("signup");
    backgroundOption.classList.add("signin");
}
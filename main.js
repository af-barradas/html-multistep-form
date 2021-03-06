function activateSignInForm() {
    // Creating variables
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const signupOption = document.getElementById("signup-option");
    const signinOption = document.getElementById("signin-option");
    const formContainer = document.getElementById("form-container");
    const optionContainer = document.getElementById("option-container");
    const backgroundOption = document.getElementById("background-option");

    // Applying values
    signinForm.classList.remove("off");
    signupForm.classList.remove("on");

    signupOption.classList.remove("move-right");
    signinOption.classList.remove("move-right");

    signinForm.classList.add("on");
    signupForm.classList.add("off");

    signupOption.classList.add("move-left");
    signinOption.classList.add("move-left");

    formContainer.classList.remove("signup");
    optionContainer.classList.remove("signin");
    formContainer.classList.add("signin");
    optionContainer.classList.add("signup");

    backgroundOption.classList.remove("signin");
    backgroundOption.classList.add("signup");
}

function activateSignUpForm() {
    // Creating variables
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const signupOption = document.getElementById("signup-option");
    const signinOption = document.getElementById("signin-option");
    const formContainer = document.getElementById("form-container");
    const optionContainer = document.getElementById("option-container");
    const backgroundOption = document.getElementById("background-option");

    // Applying values
    signinForm.classList.remove("on");
    signupForm.classList.remove("off");

    signupOption.classList.remove("move-left");
    signinOption.classList.remove("move-left");

    signinForm.classList.add("off");
    signupForm.classList.add("on");

    signupOption.classList.add("move-right");
    signinOption.classList.add("move-right");

    formContainer.classList.remove("signin");
    optionContainer.classList.remove("signup");
    formContainer.classList.add("signup");
    optionContainer.classList.add("signin");

    backgroundOption.classList.remove("signup");
    backgroundOption.classList.add("signin");
}
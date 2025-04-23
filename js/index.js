// ^ JavaScript
// * Task(4)

// & HTML Elements
var emailInput = document.querySelector(".emailInput");
var passwordInput = document.querySelector(".passwordInput");
var nameInput = document.querySelector(".nameInput");
var loginButton = document.querySelector(".loginButton");
var signUpButton = document.querySelector(".signUpButton");
var loginErrorMessage = document.querySelector("#loginErrorMessage");
var logoutBtn = document.querySelector("#logoutBtn");
var usernameDisplay = document.querySelector("#username");
var nameErrorMessage = document.querySelector("#nameErrorMessage");
var emailErrorMessage = document.querySelector("#emailErrorMessage");
var passwordErrorMessage = document.querySelector("#passwordErrorMessage");


// & Regex
var nameRegex = /^[a-z][a-z0-9]{2,}$/i;
var emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/i;

// & Validation Functions
function validateName() {
    if (nameRegex.test(nameInput.value)) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        nameErrorMessage.textContent = "";
    } else {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        nameErrorMessage.textContent = "⚠️ Site name must contain at least 3 characters, starting with a letter.";
    }
}

function validateEmail() {
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailErrorMessage.textContent = "";
    } else {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        emailErrorMessage.textContent = "⚠️ Please enter a valid email address (e.g., example@mail.com).";
    }
}

function validatePassword() {
    if (passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordErrorMessage.textContent = "";
    } else {
        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        passwordErrorMessage.textContent = "⚠️ Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }
}

// & Input Events
if (nameInput) nameInput.addEventListener("blur", validateName);
if (emailInput) emailInput.addEventListener("blur", validateEmail);
if (passwordInput) passwordInput.addEventListener("blur", validatePassword);

// & Sign Up
if (signUpButton) {
    signUpButton.addEventListener("click", function (e) {
        e.preventDefault();

        validateName();
        validateEmail();
        validatePassword();

        if (
            nameInput.classList.contains("is-invalid") ||
            emailInput.classList.contains("is-invalid") ||
            passwordInput.classList.contains("is-invalid")
        ) {
            Swal.fire("Error", "Please fill out the form correctly.", "error");
            return;
        }

        var newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };

        var users = JSON.parse(localStorage.getItem("users")) || [];

        var emailExists = users.some(function (user) {
            return user.email === newUser.email;
        });

        if (emailExists) {
            Swal.fire("Error", "Email already exists. Try another one.", "error");
        } else {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            Swal.fire("Success!", "Account created successfully!", "success").then(function () {
                window.location.href = "index.html";
            });
        }
    });
}

// & Login
if (loginButton) {
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();

        var email = emailInput.value;
        var password = passwordInput.value;

        var users = JSON.parse(localStorage.getItem("users")) || [];

        var matchedUser = users.find(function (user) {
            return user.email === email && user.password === password;
        });

        if (matchedUser) {
            localStorage.setItem("currentUser", matchedUser.name);
            loginErrorMessage.textContent = "";
            window.location.href = "home.html";
        } else {
            loginErrorMessage.textContent = "❌ Incorrect email or password.";
        }
    });
}

// & Welcome Message on Home Page
if (usernameDisplay) {
    var currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        usernameDisplay.textContent = currentUser;
    }
}

// & Logout
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });
}

// & Access Control: Protect Home Page
var currentPage = window.location.pathname.split("/").pop();

if (
    currentPage === "home.html" &&
    !localStorage.getItem("currentUser")
) {
    window.location.href = "index.html";
}

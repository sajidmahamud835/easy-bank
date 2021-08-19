/*******get user input******/
function getUserInput(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    return inputField.value;
}

/*******authenticaion*******/
function auth(userEmail, userPassword) {
    const errorMessage = document.getElementById('error-message');
    if (userEmail == 'sajidmahamud835@gmail.com' && userPassword == '123456') {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.innerText = "Username or password was wrong.";
    }
}

/*******handel submit button*******/
document.getElementById('login-button').addEventListener('click', function () {
    // get user email
    const userEmail = getUserInput('user-email');
    // get user password
    const userPassword = getUserInput('user-password');
    //auth
    auth(userEmail, userPassword);
})
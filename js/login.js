/*******get user input******/
function getUserInput(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    return inputField.value;
}


document.getElementById('login-button').addEventListener('click', function () {
    // get user email
    const userEmail = getUserInput('user-email');
    // const emailField = document.getElementById('user-email');
    // const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //auth
    const errorMessage = document.getElementById('error-message');
    if (userEmail == 'sajidmahamud835@gmail.com' && userPassword == '123456') {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.innerText = "Username or password was wrong.";
    }
})
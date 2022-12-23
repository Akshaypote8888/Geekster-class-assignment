const errorMesgFName = document.getElementById('First_name_error')
const errorMesgLName = document.getElementById('last_name_error')
const errorMesgTelephone = document.getElementById('telephone_error');
const errorMesgEmail = document.getElementById('email_error')
const errorMesgPass = document.getElementById('password_error')
const errorMesgBio = document.getElementById('bio_error')

const telephone = document.getElementById('telephone');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const emailInput = document.getElementById('email')
const passInput = document.getElementById('password')
const bioInput = document.getElementById('bio')

const submitButton = document.getElementById('submit_button');

submitButton.addEventListener('click', init)

function init() {
    validNumber()
    validateFName()
    validateLName()
    validateEmail()
    validatePass()
    validateBio()
}


function validNumber() {
    if (telephone.value.length <= 11) {
        errorMesgTelephone.innerText = `A valid telephone number(11 digits and 333-333-3334)`;
        errorMesgTelephone.style.color = 'orange'
        errorMesgTelephone.style.fontSize = '17px'
        errorMesgTelephone.style.fontWeight = 'bold'
        // errorMesgTelephone.style.textAlign = 'center'
        errorMesgTelephone.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgTelephone.style.marginTop = '10px'
        telephone.style.border = '2px solid red'
    }
    else if (isNaN(telephone.value)) {
        errorMesgTelephone.innerText = `A valid telephone number(11 digits and 333-333-3334)`;
        errorMesgTelephone.style.color = 'orange'
        errorMesgTelephone.style.fontSize = '17px'
        errorMesgTelephone.style.fontWeight = 'bold'
        // errorMesgTelephone.style.textAlign = 'center'
        errorMesgTelephone.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgTelephone.style.marginTop = '10px'
        telephone.style.border = '2px solid red'
    }
    else {
        errorMesgTelephone.innerText = " ";
        telephone.style.border = '2px solid green'
    }
}

function validateFName() {
    if (firstName.value.length >= 3 && firstName.value.length <= 16) {
        nameCopy = firstName.value.toLowerCase()
        for (let i = 0; i < nameCopy.length; i++) {
            if (!(nameCopy.charCodeAt(i) >= 97 && nameCopy.charCodeAt(i) <= 122)) {
                errorMesgFName.innerText = `First name must be alphanumeric and contain 3-16 characters`;
                errorMesgFName.style.color = 'orange'
                errorMesgFName.style.fontSize = '17px'
                errorMesgFName.style.fontWeight = 'bold'
                // errorMesgFName.style.textAlign = 'center'
                errorMesgFName.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                errorMesgFName.style.marginTop = '10px'
                firstName.style.border = '2px solid red'
            }
        }
        errorMesgFName.innerText = " ";
        firstName.style.border = '2px solid green'
    } else {
        errorMesgFName.innerText = `First name must be alphanumeric and contain 3-16 characters`;
        errorMesgFName.style.color = 'orange'
        errorMesgFName.style.fontSize = '17px'
        errorMesgFName.style.fontWeight = 'bold'
        // errorMesgFName.style.textAlign = 'center'
        errorMesgFName.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgFName.style.marginTop = '10px'
        firstName.style.border = '2px solid red'
    }
}

function validateLName() {
    if (firstName.value.length >= 3 && firstName.value.length <= 16) {
        nameCopy = firstName.value.toLowerCase()
        for (let i = 0; i < nameCopy.length; i++) {
            if (!(nameCopy.charCodeAt(i) >= 97 && nameCopy.charCodeAt(i) <= 122)) {
                errorMesgLName.innerText = `Last name must be alphanumeric and contain 3-16 characters)`;
                errorMesgLName.style.color = 'orange'
                errorMesgLName.style.fontSize = '17px'
                errorMesgLName.style.fontWeight = 'bold'
                // errorMesgLName.style.textAlign = 'center'
                errorMesgLName.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                errorMesgLName.style.marginTop = '10px'
                lastName.style.border = '2px solid red'
            }
        }
        errorMesgLName.innerText = " ";
        lastName.style.border = '2px solid green'
    } else {
        errorMesgLName.innerText = `Last name must be alphanumeric and contain 3-16 characters`;
        errorMesgLName.style.color = 'orange'
        errorMesgLName.style.fontSize = '17px'
        errorMesgLName.style.fontWeight = 'bold'
        // errorMesgLName.style.textAlign = 'center'
        errorMesgLName.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgLName.style.marginTop = '10px'
        lastName.style.border = '2px solid red'
    }
}

function validateEmail() {
    var x = emailInput.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        errorMesgEmail.innerText = `Email must be a valid address, e.g. example@example.com`;
        errorMesgEmail.style.color = 'orange'
        errorMesgEmail.style.fontSize = '17px'
        errorMesgEmail.style.fontWeight = 'bold'
        // errorMesgEmail.style.textAlign = 'center'
        errorMesgEmail.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgEmail.style.marginTop = '10px'
        emailInput.style.border = '2px solid red'
    }
    else{
        errorMesgEmail.innerText = " ";
        emailInput.style.border = '2px solid green'
    }
}

function validatePass(){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(passInput.value.match(lowerCaseLetters) && passInput.value.match(upperCaseLetters) && passInput.value.match(numbers) && passInput.value.length >=6 && passInput.value.length<=20){
        errorMesgPass.innerText = " ";
        passInput.style.border = '2px solid green'
    }
    else {
        errorMesgPass.innerText = `Password must be alphanumeric (@,_and - are also allowed) adn between 6-20 characters`;
        errorMesgPass.style.color = 'orange'
        errorMesgPass.style.fontSize = '17px'
        errorMesgPass.style.fontWeight = 'bold'
        // errorMesgPass.style.textAlign = 'center'
        errorMesgPass.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgPass.style.marginTop = '10px'
        passInput.style.border = '2px solid red'
    }

}

function validateBio() {
    if (bioInput.value.length >= 8 && bioInput.value.length <= 50) {
        bioCopy = bioInput.value.toLowerCase()
        for (let i = 0; i < bioCopy.length; i++) {
            if (!(bioCopy.charCodeAt(i) >= 97 && bioCopy.charCodeAt(i) <= 122)) {
                errorMesgBio.innerText = `Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters`;
                errorMesgBio.style.color = 'orange'
                errorMesgBio.style.fontSize = '17px'
                errorMesgBio.style.fontWeight = 'bold'
                // errorMesgFName.style.textAlign = 'center'
                errorMesgBio.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                errorMesgBio.style.marginTop = '10px'
                bioInput.style.border = '2px solid red'
            }
        }
        errorMesgBio.innerText = " ";
        bioInput.style.border = '2px solid green'
    } else {
        errorMesgBio.innerText = `Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters`;
        errorMesgBio.style.color = 'orange'
        errorMesgBio.style.fontSize = '17px'
        errorMesgBio.style.fontWeight = 'bold'
        // errorMesgFName.style.textAlign = 'center'
        errorMesgBio.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        errorMesgBio.style.marginTop = '10px'
        bioInput.style.border = '2px solid red'
    }
}
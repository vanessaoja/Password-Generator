//click button > prompt pasword criteria
// > select criteria to include in password
// > choose length from 8 to 128 chars
// > choose if to include upper/lowercase, numeric, special
// >> at least one char type should be selected
// generate password from selected criteria
// then displayed in an alert on page

const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789"
const special = "!@#$%^&*_-+="
const charTypes = [alphaUpper, alphaLower, numeric, special]

function showCriteria() {
    document.getElementById("criteria").style.visibility = "visible";
}

function generate() {
    var checkBoxes = document.getElementsByClassName("check-box");
    var message = document.getElementById("message");
    var includeChars = []

    var checkBoxLength = checkBoxes.length;
    for (i = 0; i <checkBoxLength; i++) {
        if (checkBoxes[i].firstElementChild.checked) {
            includeChars.push(charTypes[i]);
        }
    }
    if (includeChars == '') {
        message.innerHTML = "Please select at least one character type"
    }
    else {
        generatePassword(message, includeChars)
    }
}

function generatePassword (message, includeChars) {
    var passLength = document.getElementById("length").value;
    let password = "";

    for (let i = 0; i< passLength; i++) {
        //for (let j = 0; j < incldeChars.length; j++)
        // password += includeChars[j].charAt(
        //      Math.floor(Math.random() * includeChars[j].length)
        // )
        let charType = Math.floor(Math.random() * includeChars.length)
        password += includeChars[charType].charAt(
            Math.floor(Math.random() * includeChars[charType].length)
        )
    }
    message.innerHTML = 'New password: ' + password;
}
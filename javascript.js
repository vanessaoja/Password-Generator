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
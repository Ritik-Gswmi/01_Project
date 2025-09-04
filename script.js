// Button Random Color

const ranColor = document.getElementById("ranColor");
const randomColor = document.querySelector("#randomColor");

function getRandomColor() {

    let randomClorGen = Math.floor(Math.random() * 16777215).toString(16);
    randomColor.style.backgroundColor = "#" + randomClorGen;


}
getRandomColor();


randomColor.addEventListener("click", getRandomColor);




const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~{|\}[]<>?-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }


    passwordBox.value = password;

};

function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
}

// ======================================= Finished ============================== //


let pass = document.getElementById("password");
const length = 12;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789";
const symbols = "{}[]/*-@#$%&()`?''^_"
const allChar = upper + lower + nums + symbols;

function createPass(){
    let password = ""

    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    pass.value= password;
}
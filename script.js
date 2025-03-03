const otpfield = document.getElementById("otp");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");

function getOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp = otp + Math.floor(Math.random() * 10);
    }
    return otp;
}

btn.addEventListener('click', () => {
    let otp = getOTP();
    otpfield.value = otp;
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(otpfield.value);
})
const otpfield = document.getElementById("otp");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");
const msg = document.getElementById("msg");
const msgContainer = document.getElementsByClassName("msgContainer");

function getOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

btn.addEventListener('click', () => {
    let otp = getOTP();
    otpfield.value = otp;
    msgContainer.style.display = "block";
    msg.innerText = "OTP Generated!";
    setTimeout(() => {
        msgContainer.style.display = "none";
    }, 2000);
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(otpfield.value);
    msgContainer.style.display = "block";
    msg.innerText = "OTP copied to clipboard!";
    setTimeout(() => {
        msgContainer.style.display = "none";
    }, 2000);
});
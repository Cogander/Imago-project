const PASSWORD="F0r.God.All.th3_B3s7";
const PIN="121212";
const OTP="1M3P10";

function login(){
if(
pass.value===PASSWORD &&
pin.value===PIN &&
otp.value===OTP
){
localStorage.setItem("admin","true");
location.href="admin-panel.html";
}else{
msg.innerText="AKSES DITOLAK";
}
}

function checkAdmin(){
if(localStorage.getItem("admin")!=="true"){
location.href="admin-login.html";
}
}

function logout(){
localStorage.removeItem("admin");
location.href="admin-login.html";
}

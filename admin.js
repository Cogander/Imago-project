// DATA RAHASIA (HANYA KAMU TAHU)
const PASSWORD = "F0r.God.All.th3_B3s7";
const PIN = "121212";

// WA MONITORING (ADMIN SUPER PRIVATE)
const WA_ADMIN = "6282281486780";

// GENERATE OTP RANDOM
function generateOTP(){
  return Math.floor(100000 + Math.random() * 900000);
}

// KIRIM OTP KE WA
function sendOTP(){
  const pass = document.getElementById("password").value;
  const pin  = document.getElementById("pin").value;

  if(pass !== PASSWORD || pin !== PIN){
    alert("Password / PIN salah");
    return;
  }

  const otp = generateOTP();
  sessionStorage.setItem("ADMIN_OTP", otp);
  sessionStorage.setItem("OTP_TIME", Date.now());

  const msg = encodeURIComponent(
    "🔐 OTP LOGIN ADMIN IMAGO\n\nKode OTP:\n"+otp+"\n\nBerlaku 5 menit"
  );

  window.open(`https://wa.me/${WA_ADMIN}?text=${msg}`,"_blank");
  alert("OTP dikirim ke WA Admin");
}

// VERIFIKASI OTP
function verifyOTP(){
  const input = document.getElementById("otp").value;
  const real  = sessionStorage.getItem("ADMIN_OTP");
  const time  = sessionStorage.getItem("OTP_TIME");

  if(!real || Date.now() - time > 300000){
    alert("OTP kadaluarsa");
    return;
  }

  if(input === real){
    sessionStorage.removeItem("ADMIN_OTP");
    sessionStorage.setItem("ADMIN_LOGIN","true");
    window.location="admin-panel.html";
  } else {
    alert("OTP salah");
  }
}

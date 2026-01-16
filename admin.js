// ===== KONFIG ADMIN =====
const ADMIN_PASSWORD = "F0r.God.All.th3_B3s7";

// ===== LOGIN =====
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === ADMIN_PASSWORD) {
      localStorage.setItem("adminLogin", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      error.innerText = "Password salah!";
    }
  });
}

// ===== PROTEKSI DASHBOARD =====
if (window.location.pathname.includes("admin-dashboard")) {
  if (localStorage.getItem("adminLogin") !== "true") {
    window.location.href = "admin-login.html";
  }
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("adminLogin");
  window.location.href = "admin-login.html";
}

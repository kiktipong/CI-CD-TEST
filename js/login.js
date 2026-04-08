function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("result").innerText = "Login success ✅";
  } else {
    document.getElementById("result").innerText = "Login failed ❌";
  }
}
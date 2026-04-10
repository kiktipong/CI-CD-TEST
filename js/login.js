function login(){

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let result = document.getElementById("result");

  if(user === "admin" && pass === "1234"){
    result.style.color = "green";
    result.innerText = "Login Success ✅";
  }
  else{
    result.style.color = "red";
    result.innerText = "Username or Password incorrect ❌";
  }

}
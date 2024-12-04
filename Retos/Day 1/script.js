
const logoPassword = document.getElementById("logoOjo")
const inputPassword = document.getElementById("inputPassword");
const container = document.getElementsByClassName("container")[0]
logoPassword.addEventListener("click", () =>{

  if(inputPassword.type=== "password"){
    showPassword()
  }
  else{
  hidePassword();
  }
  

})


function showPassword(){
  inputPassword.type="text";
  container.classList.remove("hide");
  container.classList.add("show");
}

function hidePassword(){
  inputPassword.type="password";
  container.classList.remove("show");
  container.classList.add("hide");
}
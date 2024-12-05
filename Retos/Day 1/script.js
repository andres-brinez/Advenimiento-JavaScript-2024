
const ojoAbierto = document.getElementById("logoOjoAbierto")
const ojoCerrado = document.getElementById("logoOjoCerrado")

const inputPassword = document.getElementById("inputPassword");
const container = document.getElementsByClassName("container")[0]

ojoAbierto.addEventListener("click", () => {
  showPassword()

  container.classList.remove("passwordHide");
  container.classList.add("passwordShow");

  ojoAbierto.classList.add("hide");
  ojoCerrado.classList.remove("hide");

})

ojoCerrado.addEventListener("click", () => {
  hidePassword();

  container.classList.remove("passwordShow");
  container.classList.add("passwordHide");

  ojoAbierto.classList.remove("hide");
  ojoCerrado.classList.add("hide");
})


function showPassword() {
  inputPassword.type = "text";
}

function hidePassword() {
  inputPassword.type = "password";
}
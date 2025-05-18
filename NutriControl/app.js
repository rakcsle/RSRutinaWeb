// credenciales de prueba
const DEMO_USER = "user@demo.com";
const DEMO_PWD  = "12345";

// login
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  if (email.value === DEMO_USER && pwd.value === DEMO_PWD) {
    loginView.classList.add("d-none");
    mainNav.classList.remove("d-none");
    appContainer.classList.remove("d-none");
    switchView("dashboard");
  } else {
    alert("Credenciales incorrectas");
  }
});

// logout
btnLogout.addEventListener("click", () => {
  mainNav.classList.add("d-none");
  appContainer.classList.add("d-none");
  loginView.classList.remove("d-none");
});

// cambio de vistas por data-target
document.querySelectorAll("a[data-target]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    switchView(link.dataset.target);
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

function switchView(id){
  document.querySelectorAll(".view").forEach(v => v.classList.add("d-none"));
  document.getElementById(id).classList.remove("d-none");
}

// placeholder: añadir fila en registro
formMeal.addEventListener("submit", e=>{
  e.preventDefault();
  mealTable.insertAdjacentHTML("beforeend",
    `<tr><td>${foodName.value}</td><td>${foodGrams.value}</td><td>${(foodGrams.value*1.6).toFixed(0)}</td></tr>`);
  foodName.value=""; foodGrams.value=100;
});

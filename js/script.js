// Toggle Menu Function
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Text Animation
const text = document.querySelector(".sec-text");
const texts = [
    "Estrategias de Marketing",
    "Análisis de Datos",
    "Contenido Audiovisual",
    "Publicidad",
    "E-Commerce"
];
let currentIndex = 0;

function updateText() {
    text.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, 4000);
updateText(); // Initial text update

// Icon Shake Animation
function toggleShakeAnimation() {
    const elements = document.querySelectorAll(".shake-like-rotation");
    elements.forEach((element) => {
        element.classList.remove("shake-like-rotation");
        setTimeout(() => {
            element.classList.add("shake-like-rotation");
        }, 100); // Wait for class removal before adding it again
    });
}

setInterval(toggleShakeAnimation, 3000); // Repeat every 3 seconds

// Formulario 
// Obtener el formulario y los campos
const formulario = document.querySelector("form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario predeterminado

  // Validar que los campos no estén vacíos
  if (firstNameInput.value === "" || lastNameInput.value === "" || emailInput.value === "" || mobileInput.value === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Otras validaciones personalizadas, por ejemplo, validar el formato del correo electrónico

  // Envía el formulario si pasa todas las validaciones
  alert("Form submitted successfully.");
  formulario.reset(); // Limpia el formulario
});

// Agregar un evento de entrada al campo de teléfono
mobileInput.addEventListener("input", function () {
  // Obtener el valor actual del campo de teléfono
  let valorTelefono = mobileInput.value;

  // Remover caracteres no numéricos utilizando una expresión regular
  valorTelefono = valorTelefono.replace(/\D/g, "");

  // Asignar el valor limpio nuevamente al campo de teléfono
  mobileInput.value = valorTelefono;
});

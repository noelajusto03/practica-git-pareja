const boton = document.querySelector("#saludar");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
mensaje.textContent = "¡Bienvenidas y bienvenidos! Construimos esta web revisando en equipo.";
});

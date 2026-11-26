const boton = document.querySelector("#saludar");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Hola! Esta web también se construye revisando en equipo.";
});

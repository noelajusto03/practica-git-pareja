const boton = document.querySelector("#saludar");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
   mensaje.textContent = "¡Bienvenidas y bienvenidos al encuentro de clase!";
});

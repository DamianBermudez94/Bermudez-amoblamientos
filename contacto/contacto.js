function enviarFormulario() {
  const form = document.querySelector("#formulario");
  const buttonEnviar = document.querySelector("#enviar-mail");
  form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    buttonEnviar.setAttribute(
      "href",
      `mailto:damianbermudezdev@damianbermudezdev.es?subject= Nombre:${form.get(
        "nombre"
      )}  Email:${form.get("correo")}  Telefono:${form.get(
        "telefono"
      )}  Asunto:${form.get("asunto")}  &body=${form.get("mensaje")} `
    );
    console.log(buttonEnviar);
    buttonEnviar.click();
  }
}
enviarFormulario();

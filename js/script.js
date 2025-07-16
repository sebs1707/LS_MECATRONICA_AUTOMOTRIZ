document.addEventListener("DOMContentLoaded", () => {
  const proyectosExtra = document.querySelectorAll(".extra-proyecto");
  let visible = false;

  btnToggle.addEventListener("click", () => {
    proyectosExtra.forEach(proy => {
      proy.classList.toggle("oculto");
    });

    visible = !visible;
    btnToggle.textContent = visible ? "Ver menos proyectos" : "Ver más proyectos";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mayorEdad = document.getElementById("mayorEdad").checked;

    if (!nombre || !telefono || !email || !mensaje || !mayorEdad) {
      alert("Por favor, completa todos los campos y confirma que eres mayor de edad.");
      return;
    }

    alert("Formulario enviado correctamente. Nos pondremos en contacto pronto.");
    formulario.reset();
  });
});

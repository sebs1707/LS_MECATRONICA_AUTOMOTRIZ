document.addEventListener("DOMContentLoaded", () => {
    const btnToggle = document.getElementById("btn-toggle");
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

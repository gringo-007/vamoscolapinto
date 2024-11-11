function volverAlInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

function mostrarServicios() {
    const extraServicios = document.getElementById("extraServicios");
    const verMasBtn = document.getElementById("verMasBtn");

    if (extraServicios.style.display === "none") {
        extraServicios.style.display = "block";
        verMasBtn.textContent = "Ver menos servicios";
    } else {
        extraServicios.style.display = "none";
        verMasBtn.textContent = "Ver más servicios";
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje || !telefono) {
        alert("Complete todos los campos.");
        return;
    }

    if (!email.includes("@")) {
        alert("Introduce un correo electrónico válido.");
        return;
    }

    console.log("Datos del formulario:");
    console.log("Nombre:", nombre);
    console.log("Correo Electrónico:", email);
    console.log("Teléfono:", telefono);
    console.log("Mensaje:", mensaje);

    document.getElementById("formularioContacto").reset();

    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
}



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene el envío del formulario y la recarga de la página

        let esFormularioValido = true; // Variable para verificar la validez del formulario

        // Obtenemos los campos del formulario
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Limpiamos los mensajes de error previos
        limpiarErrores();

        // Validación del nombre (mínimo 3 caracteres)
        if (nombre.value.trim().length < 3) {
            esFormularioValido = false;
            mostrarError(nombre, "El nombre debe tener al menos 3 caracteres.");
        }

        // Validación del correo (debe contener @)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            esFormularioValido = false;
            mostrarError(email, "El correo debe tener un formato válido.");
        }

        // Validación del mensaje (mínimo 10 caracteres)
        if (mensaje.value.trim().length < 10) {
            esFormularioValido = false;
            mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres.");
        }

        // Si la validación es exitosa, mostramos un mensaje de éxito
        if (esFormularioValido) {
            alert("Mensaje enviado correctamente.");
            form.reset(); // Limpiar el formulario después de enviarlo
        } else {
            console.log("Errores encontrados. Corrige antes de enviar.");
        }
    });

    // Función para mostrar mensajes de error
    function mostrarError(input, mensaje) {
        input.style.outline = "2px solid red";
        let errorMensaje = input.nextElementSibling;
        if (!errorMensaje || errorMensaje.tagName !== "SPAN") {
            errorMensaje = document.createElement("span");
            errorMensaje.style.color = "red";
            errorMensaje.style.fontSize = "12px";
            errorMensaje.style.display = "block";
            input.parentNode.insertBefore(errorMensaje, input.nextSibling);
        }
        errorMensaje.textContent = mensaje;
    }

    // Función para limpiar mensajes de error
    function limpiarErrores() {
        const errores = document.querySelectorAll("span");
        errores.forEach(function (error) {
            error.remove(); // Remover los mensajes de error previos
        });
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(function (input) {
            input.style.outline = ""; // Limpiar el borde rojo
        });
    }
});

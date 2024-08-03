"use stric";

document.addEventListener('DOMContentLoaded', (event) => {
    // obtener los elementos del formulario
    let nombreApellido = document.getElementById("nombreApellido");
    let correo = document.getElementById("correo");
    let contraseña = document.getElementById("contraseña");
    let telefono = document.getElementById("tel");
    let consulta = document.getElementById("texto");
    let formulario = document.querySelector('.formulario');

    // agregar el event listener al formulario
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

        if (!formulario.reportValidity()) {   // para que funcione la validacion
            return;
        }

        // recolecta la información
        let informacion = [
            `Nombre y Apellido: ${nombreApellido.value}`,
            `Correo: ${correo.value}`,
            `Contraseña: ${contraseña.value}`,
            `Teléfono: ${telefono.value}`,
            `Comentario/Consulta: ${consulta.value}`
        ].join('\n'); // une los elementos del array

        // Crea un blob con la información
        let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

        // usa la libreria FileSaver.js para guardar el archivo
        saveAs(blob, "contacto.txt");

        console.log('Archivo generado: contacto.txt');
    });
});


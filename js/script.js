document.addEventListener("DOMContentLoaded", () => {

    // CONTACTO

    const validators = {
        nombre: (value) =>
            value.trim().length >= 3 ? null : "El nombre debe tener más de 3 caracteres",

        apellido: (value) =>
            value.trim().length >= 3 ? null : "El apellido debe tener más de 3 caracteres",

        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value.trim()) ? null : "Ingresar un email válido";
        }
    };

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        form.querySelector(".error")?.remove();

        const errors = Object.entries(validators)
            .map(([field, validate]) => validate(form[field].value))
            .filter(error => error !== null);

        if (errors.length > 0) {
            const ul = document.createElement("ul");
            ul.classList.add("error");
            ul.classList.remove("oculto");


            errors.forEach(msg => {
                const li = document.createElement("li");
                li.textContent = `Error: ${msg}`;
                ul.appendChild(li);
            });

            form.prepend(ul);
        } 
        else {
            alert("Formulario enviado con éxito");
            form.reset();
        }
    });
});
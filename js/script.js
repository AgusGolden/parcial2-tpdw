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


    // SERVICIOS
document.addEventListener("DOMContentLoaded", () => {

    // VALIDACIÓN DE FORMULARIO DE CONTACTO
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

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            form.querySelector(".error")?.remove();

            const errors = Object.entries(validators)
                .map(([field, validate]) => validate(form[field]?.value || ""))
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
            } else {
                alert("Formulario enviado con éxito");
                form.reset();
            }
        });
    }

    // LÓGICA DE BOTONES LEER MÁS / LEER MENOS
    const max_height = 100; // altura inicial en px

    document.querySelectorAll("article").forEach(articulo => {
        const p = articulo.querySelector("p");
        const btnMas = articulo.querySelector(".btn-leer-mas");
        const btnMenos = articulo.querySelector(".btn-leer-menos");

        if (!p || !btnMas || !btnMenos) return;

        // Aplicar estilo inicial
        p.style.maxHeight = max_height + "px";
        p.style.overflow = "hidden";
        p.style.transition = "max-height 0.3s ease";

        // Mostrar botón si el contenido se desborda
        if (p.scrollHeight > max_height) {
            btnMas.classList.remove("oculto");
        }

        // Leer más
        btnMas.addEventListener("click", () => {
            p.style.maxHeight = p.scrollHeight + "px";
            btnMas.classList.add("oculto");
            btnMenos.classList.remove("oculto");
        });

        // Leer menos
        btnMenos.addEventListener("click", () => {
            p.style.maxHeight = max_height + "px";
            btnMenos.classList.add("oculto");
            btnMas.classList.remove("oculto");
        });
    });

});


});
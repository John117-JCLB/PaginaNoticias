// =====================================
// INICIAR
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("noticias.js cargado");

    const formulario =
        document.querySelector(".admin-form");

    console.log("Formulario encontrado:", formulario);

    if(formulario){

        formulario.addEventListener(
            "submit",
            publicarNoticia
        );

    }

    cargarNoticias();

});


// =====================================
// PUBLICAR NOTICIA
// =====================================

function publicarNoticia(e){

    e.preventDefault();

    console.log("Entró a publicarNoticia()");

    const formulario =
        document.querySelector(".admin-form");

    if(!formulario.reportValidity()){
        return;
    }

    const inputs =
        formulario.querySelectorAll(
            "input, textarea, select"
        );

    console.log("Cantidad de inputs:", inputs.length);
    console.log(inputs);

    const noticia = {

        id: Date.now(),

        titulo:
            inputs[0].value.trim(),

        categoria:
            inputs[1].value.trim(),

        autor:
            inputs[2].value.trim(),

        fecha:
        inputs[3].value,

        resumen:
            inputs[4].value.trim(),

        contenido:
            inputs[5].value.trim(),

        imagen:
            "https://picsum.photos/600/400"

    };

    console.log("Noticia creada:");
    console.log(noticia);

    const noticias =
        obtenerNoticias();

    noticias.unshift(
        noticia
    );

    guardarNoticias(
        noticias
    );

    console.log("Noticias guardadas:");
    console.log(
        obtenerNoticias()
    );

    alert(
        "Noticia publicada correctamente"
    );

    formulario.reset();
    window.location.href = "dashboard.html";
}
// =====================================
// CARGAR NOTICIAS EN INDEX
// =====================================

function cargarNoticias(){

    const contenedor =
        document.querySelector(
            ".noticias"
        );

    if(!contenedor){

        console.log(
            "No existe .noticias en esta página."
        );

        return;

    }

    const noticias =
        obtenerNoticias();

    console.log(
        "Noticias encontradas:",
        noticias
    );

    contenedor.innerHTML = "";

    if(noticias.length === 0){

        contenedor.innerHTML = `

            <h3>
                No existen noticias.
            </h3>

        `;

        return;

    }

    noticias.forEach(noticia => {

        contenedor.innerHTML += `

            <article class="card">

                <img
                    src="${noticia.imagen}"
                    alt="Imagen">

                <span class="etiqueta">

                    ${noticia.categoria}

                </span>

                <h3>

                    ${noticia.titulo}

                </h3>

                <p>

                    ${noticia.resumen}

                </p>

                <a href="pages/noticia.html?id=${noticia.id}">

                    Leer más

                </a>

            </article>

        `;

    });
}


document.addEventListener(
    "DOMContentLoaded",
    cargarCategoria
);

function cargarCategoria(){

    const contenedor =
        document.querySelector(
            ".contenedor-noticias"
        );

    if(!contenedor) return;

    const categoria =
        document.body.dataset.categoria;

    const noticias =
        obtenerNoticias();
    console.log(noticias);
    console.log(categoria);

    const filtradas =
        noticias.filter(

            noticia =>

                noticia.categoria &&
                noticia.categoria
                    .trim()
                    .toLowerCase()

                ===

                categoria
                    .trim()
                    .toLowerCase()

        );

    contenedor.innerHTML = "";

    if(filtradas.length === 0){

        contenedor.innerHTML = `

            <div class="sin-noticias">

                <h3>
                    No hay noticias disponibles
                </h3>

            </div>

        `;

        return;
    }

    filtradas.forEach(noticia => {

        contenedor.innerHTML += `

            <article class="card-pagina">

                <img
                    src="${
            noticia.imagen ||
            'https://picsum.photos/600/400'
        }">

                <div class="contenido">

                    <span class="badge">
                        ${noticia.categoria}
                    </span>

                    <h3>
                        ${noticia.titulo}
                    </h3>

                    <p>
                        ${noticia.resumen}
                    </p>

                    <a href="noticia.html?id=${noticia.id}">
                        Leer más
                    </a>

                </div>

            </article>

        `;

    });

}
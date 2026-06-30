document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        const params =
            new URLSearchParams(
                window.location.search
            );

        const id =
            params.get("id");

        const noticia =
            obtenerNoticia(id);

        const detalle =
            document.querySelector(
                ".detalle"
            );

        if(!noticia) return;

        detalle.innerHTML=`

            <h1>
                ${noticia.titulo}
            </h1>

            <p>
                ${noticia.fecha}
            </p>

            <h4>
                ${noticia.autor}
            </h4>

            <p>
                ${noticia.contenido}
            </p>

        `;

    });
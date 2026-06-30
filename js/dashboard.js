document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        const tabla=
            document.querySelector(
                ".tabla-admin tbody"
            );

        if(!tabla) return;

        const noticias=
            JSON.parse(
                localStorage.getItem(
                    "noticias"
                )
            ) || [];

        tabla.innerHTML="";

        noticias.forEach(
            noticia=>{

                tabla.innerHTML+=`

        <tr>

            <td>${noticia.id}</td>

            <td>${noticia.titulo}</td>

            <td>${noticia.categoria}</td>

            <td>${noticia.autor}</td>

            <td>${noticia.fecha}</td>

            <td>
                <span class="estado publicado">
                    Publicado
                </span>
            </td>

            <td>

                <button
                    class="btn-eliminar"
                    onclick="
                    eliminarNoticia(
                        ${noticia.id}
                    )">

                    🗑️

                </button>

            </td>

        </tr>

        `;

            });

    });

function eliminarNoticia(id){

    let noticias=
        JSON.parse(
            localStorage.getItem(
                "noticias"
            )
        ) || [];

    borrarNoticia(id);
    location.reload();

    localStorage.setItem(
        "noticias",
        JSON.stringify(noticias)
    );

    location.reload();

}
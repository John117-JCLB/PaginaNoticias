document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        cargarUltimaHora();

    }
);

function cargarUltimaHora(){

    const marquee =
        document.querySelector(
            ".marquee"
        );

    if(!marquee) return;

    const noticias =
        obtenerNoticias();

    if(noticias.length===0){

        marquee.innerHTML =
            "No hay noticias recientes";

        return;
    }

    let texto="";

    noticias
        .slice(0,10)
        .forEach(noticia=>{

            texto +=
                noticia.titulo +
                " • ";

        });

    marquee.innerHTML=texto;

}
// ======================================
// OBTENER NOTICIAS
// ======================================

function obtenerNoticias(){

    return JSON.parse(
        localStorage.getItem("noticias")
    ) || [];

}

// ======================================
// GUARDAR NOTICIAS
// ======================================

function guardarNoticias(noticias){

    localStorage.setItem(
        "noticias",
        JSON.stringify(noticias)
    );

}
// ======================================
// OBTENER UNA NOTICIA
// ======================================

function obtenerNoticia(id){

    const noticias =
        obtenerNoticias();

    return noticias.find(
        n => n.id == id
    );

}

// ======================================
// ELIMINAR NOTICIA
// ======================================

function borrarNoticia(id){

    let noticias =
        obtenerNoticias();

    noticias =
        noticias.filter(
            n => n.id != id
        );

    guardarNoticias(noticias);

}
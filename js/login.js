document.addEventListener("DOMContentLoaded",()=>{

    const form=document.querySelector("form");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const usuario=
            document.querySelector(
                'input[type="text"]'
            ).value;

        const clave=
            document.querySelector(
                'input[type="password"]'
            ).value;

        if(
            usuario==="admin" &&
            clave==="123456"
        ){

            localStorage.setItem(
                "admin",
                "true"
            );

            window.location.href=
                "dashboard.html";

        }
        else{

            alert(
                "Usuario o contraseña incorrectos"
            );

        }

    });

});
var personas = [];
window.onload = () => {

    let personaHTMLElemento = document.getElementById("persona");
    let montoHTMLElemento = document.getElementById("monto");
    let totalHTMLElemento = document.getElementById("total");
    let listaPersonaHTMLElemento = document.getElementById("final");
    let totalDivididoHTMLElemento = document.getElementById("aporte");

    document.getElementById("enviar").addEventListener("click", personaEstablecida);

    function personaEstablecida() {
        let persona = personaHTMLElemento.value;
        let monto = montoHTMLElemento.value;

        personas.push ({
            nombre:persona,
            monto:parseFloat(monto)
        });

        personaHTMLElemento.value = "";
        montoHTMLElemento.value = "";

        establecerTotal();
    }


 function establecerTotal() {

    totalHTMLElemento.innerHTML = "";

    let listaPersona = "";
    let total = 0;
    for (let i = 0; i < personas.length; i++){
        total += personas[i].monto;
        listaPersona += `${personas[i].nombre}: ${personas[i].monto} <br>`;
    }

    totalHTMLElemento.innerHTML = listaPersona;
    listaPersonaHTMLElemento.innerHTML = total;
    totalDivididoHTMLElemento.innerHTML = total / personas.length;
 }
}
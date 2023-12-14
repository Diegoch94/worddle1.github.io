let palabra = "APPLE" ;
let intento = 6;

function leerIntento(){
    console.log("Intento!")
}
const boton = document.getElementById("guess-button");
boton.addEventListener("click", () => {
 const intento = leerIntento();
 for (const i  in palabra){
    if(palabra[i] == intento[i]){
        console.log (intento[i], "verde");
    }else if (palabra.includes (intento[i])){
        console.log (intento[i], "amarillo");
    }else{
        console.log (intento[i], "gris");
    }
 }
});
function leerIntento(){
    const input = document.getElementById("guess-input");
    return input.value.toUpperCase();
}
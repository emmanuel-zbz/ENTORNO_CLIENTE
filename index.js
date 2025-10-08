document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-notas');
    const respuesta = document.getElementById('respuesta');

    let controladorHTML = '';

    for (let i = 1; i <= 4; i++){
        controladorHTML += `<input id="nota${i}">
                            <br><br>`;
    }

    controladorHTML += `<button id="boton">Calcular media</button>`;

    contenedor.innerHTML = controladorHTML;

    const boton = document.getElementById('boton');
    boton.addEventListener('click', event => {
        let esValido = true;
        let sumadorNotas = 0

        for (let i = 1; i <= 4; i++){
            let elemento = document.getElementById(`nota${i}`);
            let nota = parseFloat(elemento.value);

            if (isNaN(nota)){
                esValido = false;
                break;
            }
            sumadorNotas += nota;
        }

        if (esValido){
            let media = sumadorNotas / 4;
            let calificacion = '';

            if (media >= 5 && media < 6){
                calificacion += "un suficiente"
            }

            if (media >= 6 && media < 7){
                calificacion += "un aprobado"
            }

            if (media >= 7 && media < 9){
                calificacion += "una buena nota"
            }

            if (media >= 9){
                calificacion += "un sobresaliente"
            }

            respuesta.innerHTML = `La nota media es de ${media}, tiene ${calificacion}`;
        } else {
            respuesta.innerHTML = `Introduzca un numero valido`;

        }
    })

})
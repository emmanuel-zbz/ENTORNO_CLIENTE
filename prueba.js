
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-notas');
    const resultadoParrafo = document.getElementById('resultado');


    let htmlControles = '';
    for (let i = 1; i <= 4; i++) {
        htmlControles += `<label for="nota${i}">Nota ${i}:</label>
                          <input type="number" id="nota${i}" min="0" max="10" step="0.01">
                          <br><br>`; // <br><br> para saltos de línea y mejor presentación
    }

    htmlControles += `<button id="boton-calcular">Calcular Media</button>`;

    contenedor.innerHTML = htmlControles;



    const botonCalcular = document.getElementById('boton-calcular');

    botonCalcular.addEventListener('click', () => {
        let sumaNotas = 0;
        const totalNotas = 4;
        let esValido = true;

        for (let i = 1; i <= totalNotas; i++) {
            const inputId = `nota${i}`;
            const inputElement = document.getElementById(inputId);

            const nota = parseFloat(inputElement.value);

            if (isNaN(nota) || inputElement.value.trim() === '') {
                esValido = false;
                break;
            }

            sumaNotas += nota;
        }

        if (esValido) {
            const media = sumaNotas / totalNotas;
            resultadoParrafo.textContent = `La suma de las notas es: ${sumaNotas}. 
                                            La media es: ${media.toFixed(2)}`;
        } else {
            resultadoParrafo.textContent = 'Por favor, introduce las 4 notas para calcular la media.';
        }
    });
});
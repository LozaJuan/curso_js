let numeros;
numeros = parseInt(numeros=prompt('Ingrese un número hasta del 1 al 3'));

switch (numeros) {
    case 1: document.write('El valor es 1');
        break;
    case 2: document.write('El valor es 2');
        break;
    case 3: document.write('El valor es 3');
        break;

    default: document.write('El valor es inválido o supera lo establecido.');
        break;
}
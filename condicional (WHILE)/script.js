/*
let x;
x = 1;
while (x<=10) {document.write('El bucles es: ',x);
    document.write('<br>');
    x++;
}
document.write('Fin del bucle');
*/

/*
let y;
y = 1;
while (y<=10) {document.write('El valor es: ', y);
    document.write('<br>');
    y++;
}
document.write('El bucle se ha detenido');
*/
/*
let z;
z = 10;
while (z>=0) {document.write('El número es: ', z);
    document.write('<br>');
    z--;
}
document.write('El bucle ha terminado');
*/

let x = 1;
let suma = 0;
let valor;
while (x<=5) { 
    valor = parseInt(prompt('INTRODUZCA SU VALOR'));
    suma = suma + valor;
    x++;
}
document.write('EL RESULTADO DE LA SUMA ES: ', suma, '<br>');

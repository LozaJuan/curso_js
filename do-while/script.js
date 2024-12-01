/*
let valor;
do {
    valor = parseInt(prompt('Ingrese valor 1 para salir...'));
    document.write('Ingreso valor: ', valor);
    document.write('<br>');
} while (valor != 1);
document.write('Fin del bucle');
*/
/*
let usuario, clave, control;
control = 0;
usuario = prompt('Ingresa tu Usuario');
clave = prompt('Ingresa tu clave');

do {
    if (clave != 123) {
        clave = prompt('Contraseña incorrecta\n' + 
            'Intente de nuevo');
            control = 0;
    } else {
        control = 1;
    }
} while (control != 1);
document.write('Bienvenido');
*/
/*
let usuario, clave, control;
control = 0;
usuario = prompt('Ingrese Usuario:');
clave = prompt('Ingrese Clave:');

do {
    if (clave != 'patatas') {
    clave = prompt('Clave "Erronea"\n' + 
            'Intente nuevamente');        
    control = 0;
    } else {
        control = 1;
    }
} while (control !=1);
document.write('Bienvenido!');
*/

/*
let clave, usuario, control;
control = 0;
usuario = prompt('Que usuario eres?');
clave = prompt('Cual es tu clave?');

do {
    if (clave != 'patatas') {
        clave = prompt('Hey '+ usuario + ' ' +'clave incorrecta, intenta nuevamente:');
        control = 0;
    } else {
        control = 1;
    }
} while (control !=1);
document.write('Bienvenido ', usuario);
*/

let clave, usuario, control;
usuario = prompt('Ingrese Usuario: ');
clave = prompt('Ingrese Clave: ');
control = 0;

do {
    if (clave != 'patatas') {
        clave = prompt('Clave erronea, try again:');
        control = 0;
    } else {
        control = 1;
    }
} while (control !=1);
document.write('Bienvenido!');
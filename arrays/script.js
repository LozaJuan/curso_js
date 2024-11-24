//DECLARACIÓN DE ARRAYS
let numeros = [];
numeros = [5,25,50.25,75,-100];
document.write('Elementos: ', numeros);
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
numeros[0] = 15;
document.write('Número remplazado posicion 0: ',numeros[0]);
document.write('<br>-------------------');

document.write('<br>');
let frutas = [];
frutas = ['Manzana','Pera','Sandía','Banana','Fresa']
document.write('Frutas: ',frutas);
document.write('<br>');

//MÉTODOS DE LOS ARRAYS

//ver cantidad de Elementos
document.write('Cantidad: ', frutas.length);
document.write('<br>');

//saber la ultima posición de un array.
document.write('Ultima posición: ', frutas[frutas.length-1]);
document.write('<br>');

//formatear números a texto
document.write('En string: ', numeros.toString());
document.write('<br>');

//unir tipos de arrays
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
let alfanumerico = letras.concat(numeros2)
document.write('Datos alfanúmericos: ', alfanumerico);
document.write('<br>');

//borrar ultimo elemento
alfanumerico.pop();
document.write('Último array borrado: ', alfanumerico);
document.write('<br>');

//agregar elemento al final
alfanumerico.push('patas');
document.write('Último array agregado: ', alfanumerico);
document.write('<br>')

//eliminar el primer elemento
alfanumerico.shift();
document.write('Primer array eliminado: ', alfanumerico)
document.write('<br>')

//agregar el primer elemento
alfanumerico.unshift('xd');
document.write('Primer array agregado: ', alfanumerico)
document.write('<br>')

//eliminar elementos a partir de un punto
alfanumerico.splice(1,4);
document.write('Eliminando array de una posicion específica: ', alfanumerico)
document.write('<br>')

//como copiar un array
let cantidades = [100,200,300,400,500];
let copia = cantidades.slice(2,4);
document.write('Array copia: ', copia)
document.write('<br>')

//organizar arrays alfabéticamente
let vocales = ['i','e','u','o','a'];
document.write('Vocales desorganizadas: ',vocales);
document.write('<br>')
document.write('Vocales organizadas: ',vocales.sort());
document.write('<br>');

//organizar de reversa
document.write('Vocales en reversa: ',vocales.reverse());
document.write('<br>');
let sum,res,mult,divi,resid,poten
a= parseInt(prompt('Primer número')); //USAMOS EL "parseInt" para transformar de una cadena a numerico
b= parseInt(prompt('Segundo número'));

sum =   a+b;
res =   a-b;
mult =  a*b;
divi =  a/b;
resid = a%b;
poten = a**b;

document.write('La suma es:', sum);
document.write('<br>');
document.write('La resta es:', res);
document.write('<br>');
document.write('La multiplicacion es:', mult);
document.write('<br>');
document.write('La division es:', divi);
document.write('<br>');
document.write('El residuo es:', resid);
document.write('<br>');
document.write('La potencia es:', poten);
let nombre, edad;
nombre = prompt('INGRESE SU NOMBRE:');
edad = prompt('INGRESE SU EDAD: ');
edad = parseInt(edad);

if (edad >=18) {document.write("Bienvendido ", nombre);}
    else{
        if(edad < 18){document.write('FUERA DE AQUI NIÑO ', nombre);}
        else{document.write('NO HAS INGRESADO DATOS ');}
    }
        /*
        FUNCIONES STRINGS
        .length: Cuenta caracteres
        .slice(0,0): Ajusta el rango de caracteres a mostrar
        .substring(0,0): Ajusta el rango de caracteres a mostrar
        .replace(): Remplazamos el caracter deseado
        .toUpperCase(): MAYUSCULAS
        .toLowerCase(): minusculas
        .concat(): Unimos caracteres
        .trimStart(): Cortamos espacios del inicio
        .trimEnd(): Cortamos espacios al final
        .trim(): Cortamos espacio de ambos lados
        .split(): Cortamos cantidad de caracteres
        */

        let palabra = "JavaScript";
        let palabra2= "Hola a todos";
        let palabra3= "Curso de "
        let palabra4= "      Hola      "

        document.write('La palabra es: '+palabra);
        document.write('<br>');
        document.write('Cantidad de letras es: '+palabra.length);
        document.write('<br>');
        document.write('Primeras 4 letras: ',palabra.slice(0,4));
        document.write('<br>');
        document.write('Ultimas 6 letras: ', palabra.substring(4,10));
        document.write('<br>');
        document.write(palabra2.replace('Hola','Adios'));
        document.write('<br>');
        document.write('En mayusculas: ',palabra.toUpperCase());
        document.write('<br>');
        document.write('En minusculas: ',palabra.toLowerCase());
        document.write('<br>');
        document.write('unir palabras: ',palabra3.concat(palabra));
        document.write('<br>');
        document.write(palabra4.trimStart());
        document.write('<br>');
        document.write(palabra4.trimEnd());
        document.write('<br>');
        document.write(palabra4.trim());
        document.write('<br>')
        document.write(palabra.split('Java'));
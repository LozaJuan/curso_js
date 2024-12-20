        /*
        En JavaScript, concatenar significa unir dos o más cadenas de texto (strings) en una sola. 
        Es una operación muy común al trabajar con texto.
        */

        let nombre = "Juan";
        let apellido = "Loza";
        let precio = 50.25;
        
        document.write(nombre+' '+apellido); //+
        let saludo = nombre.concat(apellido); //concatena sin espacios
        document.write('<br>');
        document.write('Su nombre es: '+nombre+' '+apellido); //texto concatenado con variables
        document.write('<br>');
        document.write(saludo);
        document.write('<br>');
        document.write('El precio es: '+precio);
        document.write('<br>');
        document.write('=============== <br>');
        document.write('El precio es ',precio);  // la "," sirve como el +
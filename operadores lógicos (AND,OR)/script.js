//OPERADOR && (y)
/*
let nombre, apellido;
nombre = prompt('Ingrese correctamente el nombre configurado');
apellido = prompt('Ingrese correctamente el apellido configurado');

if(nombre=='Juan' && apellido=='Loza'){document.write('Nombre correcto!');}
    else{
        document.write('Uno de los datos ingresados no es el correcto');
    }
*/

//OPERADOR || (or)

let day, month, year;
day = prompt('INGRESE UN DIA');
month = prompt('INGRESE UN MES');
year = prompt('INGRESE UN AÑO');

if( month==1 || month==2 || month==3 ){document.write('Pertences al primer trimestre');}
    else{
        if(month==4 || month==5 || month==6){document.write('Pertences al segundo trimestre');}
        else{
            if( month==7 || month==8 || month==9){document.write('Pertences al tercer trimestre');}
            else{
                if( month==10 || month==11 || month==12){document.write('Pertences al cuarto trimestre');}
                else{document.write('Detalles inválidos');}
            }
        }
    }
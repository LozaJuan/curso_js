let limite;
limite = prompt("Igrese del 1 al 10");
limite = parseInt(limite);

if(limite<=10){document.write('Tu límite es: ',limite);}
    else{
        if(limite>10){document.write('Has superado el limite');}
        else{document.write('Creo que no has escrito nada');}
    };
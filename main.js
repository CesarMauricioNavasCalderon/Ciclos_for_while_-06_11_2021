
let nombre = prompt("Ingrese su nombre:",'profe miguel :D');

switch (nombre){  
    case 'profe miguel :D':
    console.log (`;)`);
    case 'miguel':
    console.log (`:)`)    
    break;
default:
    console.warn( `: |`);
    break;
}



Ciclo5:
    for (let i = 0; i <= 5; i++) {
        if(i==3){
            continue Ciclo5;
        }
        console.log(i);
}


let data = ["maicol", "maria", "Cesar", "alexander"];
    
    for (let indice in data){
        console.log(`Indice del array ${indice}`);
    }
    console.log(" ");
    for (let datos of data){
        console.log(`Valor del array ${datos}`);
    }
    console.log(" ");
    for(let [idice, valor] of Object.entries(data)){
        console.log(`Indice: ${idice}, Valor: ${valor} del array`);
    }



for(let w = 0; 0<5 ;w++){
    console.log(`Variabole de avance: ${w}`)
    break;
}


for(let i = true; i;){
       i = parseInt(prompt(`Deseas repetir el ciclo
       1. Si
       0. No
       `));
 }
 
// in : saca el indese 
// of : saca el dato ( del indice)
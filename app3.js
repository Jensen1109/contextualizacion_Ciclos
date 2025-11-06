let nino = 1
let total_ninos = 10
let dulces_repartidos = 0 

function tienedulce(nino) {
    return nino !==5
}

while(nino<=total_ninos){
    dulces_repartidos += 1;
    console.log(`Dulce asignado al niño ${nino} total repartidos ${dulces_repartidos}`);

    if(!tienedulce(nino)){
        console.log(`El niño ${nino} no tiene dulce. Fin del programa `);
        break;
    }
    nino += 1

    if(nino>total_ninos){
        nino =1;
    }
}
console.log(`proceso finalizado`);

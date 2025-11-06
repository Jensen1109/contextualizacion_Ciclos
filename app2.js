let multiplicacion = 0
let bandera = false
for(let i = 0; i<=5; i++)
{
    for(let j = 1; j<=10; j++){
        multiplicacion = (5*j);
        let valor = prompt(`Ingrese el valor de 5 * ${j}`)
        if(valor == multiplicacion)
        {
            alert(`imprime el resultado de la ${multiplicacion}`)
        }
        else{
            bandera=true
            break;
        }
    }
    if(bandera){
        break
    }
}
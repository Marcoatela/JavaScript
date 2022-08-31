let numero = Number(prompt("Ingresá un importe"));
let porcentaje = Number(prompt("Ingresá el descuento a calcular"));


function descuento(numero, porcentaje) { 
    return (numero * porcentaje / 100);
}
 
let resultado = descuento(numero, porcentaje);

let precioFinal = numero - resultado;

alert (`El precio final con el descuento del ${porcentaje}%` + ` ` + `es de ` + precioFinal + ` ` + `pesos`);
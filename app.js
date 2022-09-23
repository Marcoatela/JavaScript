/* 

const vinos = [
    {nombre: "Pispi", bodega: "Mosquita Muerta", variedad: "Malbec", año: 2010, precio: 1600},
    {nombre: "Coleccion Rutini", bodega: "Rutini", variedad: "Malbec", año: 2018, precio: 2700},
    {nombre: "DvCatena", bodega: "Catena Zapata", variedad: "Cabernet", año: 2009, precio: 5900},
    {nombre: "El enemigo", bodega: "Aleanna", variedad: "Malbec", año: 2020, precio: 4860},
    {nombre: "Solito Va", bodega: "El cepillo", variedad: "Cabernet Franc", año: 2022, precio: 1140},

]

let nombresVinos = vinos.map(function(vino){
    return vino.nombre;
    
})

vinoSelect = prompt(`Elegi un vino de la siguiente lista: ${nombresVinos}`);

function precioVino(){
    for (let vino of vinos){
        if(vino.nombre == vinoSelect){
            if(vino.precio >= 3000){
                alert(`El vino seleccionado tiene envío gratis, porque cuesta mas de $2999`)
            } else{
                alert(`El costo del envío es de $800`)
                
            }
        }
    }
}


precioVino(); */

const btnAgregar = document.querySelector(".btn-secondary")
const span = document.getElementById('span')
let contador = 0;



btnAgregar.addEventListener('click',() => {
    console.log('Agregaste producto al carrito')
    contador++
    span.textContent = contador
    
  
}); 

function stock(){
    alert("Producto sin stock")
}

let sinStock = document.getElementById("sinstock");
console.log(sinStock.innerHTML);
sinStock.addEventListener('click', stock);

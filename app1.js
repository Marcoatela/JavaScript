const vinos = [
    {nombre:"rutini", variedad: "malbec", precio: 1850},
    {nombre:"luigi bosca", variedad: "malbec", precio: 3800},
    {nombre:"pispi", variedad: "cabernet", precio: 1300},
    {nombre:"solito va", variedad: "cabernet franc", precio: 1250},
    {nombre:"el enemigo", variedad: "malbec", precio: 4090},
    {nombre:"cosecha tardia", variedad: "chardonnay", precio: 760},
    {nombre:"coleccion", variedad: "sauvignon blanc", precio: 12850},
    {nombre:"perro callejero", variedad: "malbec", precio: 680},
];

let carrito = []

let seleccion = prompt("Bievenidos! Deseas comprar algun vino?");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese Si o No")
    seleccion = prompt("Hola, desear comprar algun vino?")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de vinos disponibles")
    let vinosDisponibles = vinos.map((vino) => vino.nombre + " " + "$" + vino.precio);
         alert(vinosDisponibles.join(" - "));
    }else if(seleccion == "no"){
        alert("Gracias por su visita, lamentamos no poder ayudarte 😢")
}

while(seleccion != "no"){
    let vino = prompt("Agrega un vino a tu carrito")
    let precio = 0;

    if (vino == "rutini" || vino == "luigi bosca" || vino == "pispi" || vino == "solito va" || vinos == "el enemigo" || vino == "cosecha tardia" || vino == "coleccion" || vino == "perro callejero"){
        switch(vino){
            case "rutini":
                precio = 1850
                break;
             case "luigi bosca":
                precio = 3800
                break;
             case "pispi":
                precio = 1300
                break;
             case "solito va":
                precio = 1250
                break;
             case "rel enemigo":
                precio = 4090
                break; case "cosecha tardia":
                precio = 760
                break;
             case "perro callejero":
                precio = 12850
                break;
             case "rutini":
                precio = 680
                break;
        
        }
    let unidades = parseInt(prompt("Cuantas unidades vas a llevar?"))

    carrito.push({vino, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos este producto en stock")
    }

    seleccion = prompt("Queres seguir comprando?")
    while (seleccion === "no") {
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.vino}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })

    break;
    }
}

const total = carrito.reduce((acumulador, elem) => acumulador + elem.precio * elem.unidades,0)
alert(`El total a pagar es de: ${total}`);

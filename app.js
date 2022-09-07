const vino = {
    id: 1,
    bodega: "Luigi Bosca",
    cosecha: 2010,
    precio: 1750,
    variedad: "Malbec",
    disponible : true,
    oferta:["Descuento 15%", "Envio gratis"],
};

const {bodega, precio, variedad, oferta} = vino;

console.log(bodega, variedad, precio, oferta[1]);

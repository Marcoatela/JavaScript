const productos = [
    {id:1,producto:'Catena Zapata',img:'/img/catena.png',precio: 3800},
    {id:2,producto:'Solito Va',img:'/img/solitova.png',precio: 1900},
    {id:3,producto:'Luigi Bosca',img:'/img/luigi.png',precio: 2500},
    {id:4,producto:'El Enemigo',img:'/img/elenemigo.png',precio: 5040},
    {id:5,producto:'Rutini',img:'/img/rutini.png',precio: 2100},
    {id:6,producto:'Santa Julia',img:'/img/sincargar.png',precio: 1500},
]

let carritoList = [
    
    
];


const contenedorProductos = document.getElementById('contenedorProductos')
const carrito = document.getElementById('carrito')

productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('producto')
    div.innerHTML =  `
    <img class="card-img-top" src=${producto.img}>
    <h5 class="card-title">${producto.producto}</h5>
    <p class="card-text">$ ${producto.precio}</p>
    <button id="agregar${producto.id}" type="button" class="btn btn-primary">Agregar al carrito</button>
    `
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}




const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carritoList.push(item)
    actualizarCarrito()
    // alert('Producto Agregado al carrito', 'alert-primary')
    swal("Producto agregado con éxito");
    console.log(carritoList)
}

const eliminarDelCarrito = (prodId) => {

    swal({
        title: "Estás Seguro?",
        text: "Está Seguro que desa elimiar este producto del carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            const item = carritoList.find((prod) => prod.id === prodId)
            const indice = carritoList.indexOf(item)
            carritoList.splice(indice, 1)
            actualizarCarrito()
          swal("Producto eliminado con éxito", {
            icon: "success",
          });
        }
      });
    
}


const actualizarCarrito = () => {
    carrito.innerHTML = ""

    carritoList.forEach((producto)=> {
        const divCarrito = document.createElement('div')
        divCarrito.classList.add('productosCarrito');
        divCarrito.innerHTML = `
            <div class="productoCarrito">
            <img class="imgCarrito" src="${producto.img}" alt="">
            <div class="infoCarrito">
                <p>${producto.producto}</p>
                <p>$ ${producto.precio}</p>
            </div>
            <div ><button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar">eliminar</button></div>
            </div>
        `
        carrito.appendChild(divCarrito)
    
    })
}





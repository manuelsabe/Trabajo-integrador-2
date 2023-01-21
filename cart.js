let productsCart= localStorage.getItem("products-in-cart");
productsCart = JSON.parse(productsCart);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelector(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
   
    if (productsCart && productsCart.length > 0 ) {
    
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productsCart.forEach( products => {

            const div = document.createElement("div")
            div.classList.add("carrito-producto")
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${products.imgSrc}" alt="${products.name}">
                <div class="carrito-producto-titulo">
                    <small>Títle</small>
                    <h3>${products.name}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Quantity</small>
                    <p>${products.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Price</small>
                    <p>$${products.price}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${products.price * products.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${products.id}"><i class="bi bi-trash-fill"></i></button>
            `
            contenedorCarritoProductos.append(div);

        });



    } else {

        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }
    
    actualizarBotonesEliminar();
    actualizarTotal ();
}

cargarProductosCarrito()



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
   
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCart);
    });
}

function eliminarDelCart(e) {
    const idBoton = e.currentTarget.id;
    const index = productsCart.findIndex(producto => producto.id === idBoton);

    productsCart.splice(index, 1);
    cargarProductosCarrito()

    localStorage.setItem("products-in-cart", JSON.stringify(productsCart));
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito () {

    productsCart.length = 0;
    localStorage.setItem("products-in-cart", JSON.stringify(productsCart));
    cargarProductosCarrito()
}

function actualizarTotal () {

    const totalCalculado = productsCart.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0)
    total.innerText = `$${totalCalculado}`;

}


botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito () {

    productsCart.length = 0;
    localStorage.setItem("products-in-cart", JSON.stringify(productsCart));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}
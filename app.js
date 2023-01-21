const products = [
    {
        id: "0",
        name: "Zapatillas Nike Dunk Hi Retro",
        price: "220",
        imgSrc: "img/products/zapa1.png",
    },
    {
        id: "1",
        name: "Zapatillas Nike Air Max 97 Se",
        price: "200",
        imgSrc: "img/products/zapa2.png",
    },
    {
        id: "2",
        name: "Zapatillas Nike Blazer Mid 77",
        price: "180",
        imgSrc: "img/products/zapa3.png",
    },
    {
        id: "3",
        name: "Zapatillas Nike Air Vapormax Flyknit",
        price: "280",
        imgSrc: "img/products/zapa4.png",
    },
    {
        id: "4",
        name: "Zapatillas Nike GTS 97",
        price: "100",
        imgSrc: "img/products/zapa5.png",
    },
    {
        id: "5",
        name: "Zapatillas Nike Air Max Flyknit",
        price: "230",
        imgSrc: "img/products/zapa6.png",
    },
    {
        id: "6",
        name: "Zapatillas Nike Blazer Low 77",
        price: "200",
        imgSrc: "img/products/zapa7.png",
    },
    {
        id: "7",
        name: "Zapatillas Nike Air Force 1 High 07",
        price: "270",
        imgSrc: "img/products/zapa8.png",
    },
    {
        id: "8",
        name: "Zapatillas Jordan Series 06",
        price: "240",
        imgSrc: "/img/products/zapa10.png",
    },
    {
        id: "9",
        name: "Zapatillas Nike Air Max Pre-Day Se",
        price: "310",
        imgSrc: "img/products/zapa11.png",
    },
    {
        id: "10",
        name: "Zapatillas Jordan Air 1 Low",
        price: "350",
        imgSrc: "img/products/zapa12.png",
    },
    {
        id: "11",
        name: "Zapatillas Nike Air More Uptempo 96",
        price: "400",
        imgSrc: "img/products/zapa13.png",
    },
    {
        id: "12",
        name: "Zapatillas Nike LeBron 19",
        price: "330",
        imgSrc: "img/products/zapa9.png",
    },
    {
        id: "13",
        name: "BZapatillas Jordan Air Xxxvi Low",
        price: "360",
        imgSrc: "img/products/zapa14.png",
    },
    {
        id: "14",
        name: "Zapatillas Nike Air Huarache",
        price: "265",
        imgSrc: "img/products/zapa15.png",
    },
    {
        id: "15",
        name: "Zapatillas Nike Air Max 97 Se",
        price: "345",
        imgSrc: "img/products/zapa16.png",
    },
    
]





const productsEl = document.querySelector(".pro-container");
let botonesAgregar = document.querySelectorAll(".add-tocart");
const numerito = document.querySelector("#numerito");





function renderProdcuts() {
    products.forEach((products) => {
      productsEl.innerHTML += `
      <div class="pro">
        <img src="${products.imgSrc}" alt="">
        <div class="des">
            <span>nike</span>
            <h5>${products.name}</h5>

            <h4>$${products.price}</h4>
        </div>
      <button class="add-tocart" id="${products.id}">Agregar</button>
    </div>
         `;
    });
    actualizarBotonesAgregar()
  }


renderProdcuts();




function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".add-tocart");
   
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", addToCart);
    });
}

let productsInCart;

let productsCartLS = localStorage.getItem("products-in-cart");


if (productsCartLS) {

    productsInCart =  JSON.parse(productsCartLS);
    actualizarNumerito()
} else {
    productsInCart = [];
};



function addToCart(e) {

    const idBoton = e.currentTarget.id;
    const productosAdd = products.find(producto => producto.id === idBoton);
    
    if(productsInCart.some(producto => producto.id === idBoton)){
        const index = productsInCart.findIndex(producto => producto.id === idBoton)
        productsInCart[index].cantidad++;
    } else {
        productosAdd.cantidad = 1;
        productsInCart.push(productosAdd);
    }

    actualizarNumerito();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

function actualizarNumerito() {
    let nuevoNumerito = productsInCart.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



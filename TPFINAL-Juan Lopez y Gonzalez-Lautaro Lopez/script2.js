"use strict";

// array de objetos con nombre, precio y stock del producto.
const productos = [
    { 
    nombre: 'Fideos Matarazzo tirabuzon', 
    precio: 2000, 
    stock: 12 },
    { nombre: 'Fideos Matarazzo moñito', precio: 2000, stock: 10 },
    { nombre: 'Fideos Matarazzo Tallarin', precio: 2000, stock: 10 },
    { nombre: 'Fideos Molto Spaguetti', precio: 2000, stock: 10 },
    { nombre: 'Arroz Gallo Largo fino', precio: 1200, stock: 20 },
    { nombre: 'Arroz Primor Largo fino', precio: 1600, stock: 16 },
    { nombre: 'Pure de tomate Arcor', precio: 2000, stock: 12 },
    { nombre: 'Pure de tomate Molto', precio: 2000, stock: 10 },
    { nombre: 'Harina Pureza 0000', precio: 3000, stock: 8 },
    { nombre: 'Harina Pureza 000', precio: 1200, stock: 20 },
    { nombre: 'Harina Cañuelas 0000', precio: 1600, stock: 16 },
    { nombre: 'Harina para pizzas', precio: 2000, stock: 12 },
    { nombre: 'Aceite Natura 1,5L', precio: 3000, stock: 8 },
    { nombre: 'Aceite Natura de 3L', precio: 1200, stock: 20 },
    { nombre: 'Aceite Familiar 1,5L', precio: 1600, stock: 16 },
    { nombre: 'Mayonesa Natura 250g', precio: 2000, stock: 10 },
    { nombre: 'Mayonesa Hellmanns 450ml', precio: 2000, stock: 10 },
    { nombre: 'Savora 500g', precio: 2000, stock: 10 },
    { nombre: 'Ketchup Natura 500g', precio: 1200, stock: 20 },
    { nombre: 'Papas Lays clasicas 115g', precio: 1600, stock: 16 },
    { nombre: 'Papas Pehuamar 115g', precio: 2000, stock: 12 },
    { nombre: 'Cheetos Queso 151g', precio: 2000, stock: 10 },
    { nombre: 'Palitos Pehuamar 125g', precio: 3000, stock: 8 },
    { nombre: 'Coca Cola 2,25L', precio: 1200, stock: 20 },
    { nombre: 'Coca Cola 3L', precio: 1600, stock: 16 },
    { nombre: 'Sprite 2,25L', precio: 2000, stock: 12 },
    { nombre: 'Sprite 3L', precio: 3000, stock: 8 },
    { nombre: 'Fanta 2,25L', precio: 1200, stock: 20 },
    { nombre: 'Fanta 3L', precio: 1600, stock: 16 },
    { nombre: 'Maple de huevos', precio: 3000, stock: 8 },
    { nombre: 'Lata de garbanzo Molto', precio: 1200, stock: 20 },
    { nombre: 'Lata de choclo Arcor', precio: 1600, stock: 16 },
    { nombre: 'Lata de lentejas Arcor', precio: 3000, stock: 8 },
    { nombre: 'Leche Veronica Entera', precio: 1200, stock: 20 },
    { nombre: 'Leche Milkaut chocolatada', precio: 3000, stock: 8 },
    { nombre: 'Yogurt Yogurisimo frutilla', precio: 1200, stock: 20 },
    { nombre: 'Yogurt Yogurisimo vainilla', precio: 1600, stock: 16 },
    { nombre: 'Queso castello', precio: 3000, stock: 8 },
    { nombre: 'Carne 1Kg', precio: 1200, stock: 20 },
    { nombre: 'Jamon 1Kg', precio: 1600, stock: 16 },
    { nombre: 'Tomate 1Kg', precio: 3000, stock: 8 },
    { nombre: 'Manzana1Kg', precio: 1200, stock: 20 },
    { nombre: 'Banana, 1Kg', precio: 1600, stock: 16 },
    { nombre: 'Durazno 1Kg', precio: 1200, stock: 20 },
    { nombre: 'Damasco 1Kg', precio: 1600, stock: 16 },
    { nombre: 'Frutilla 1Kg', precio: 3000, stock: 8 },
    { nombre: 'Palta 1kg', precio: 1200, stock: 20 },
    { nombre: 'Detergente Ala', precio: 3000, stock: 8 },
    { nombre: 'Detergente Magistral', precio: 1200, stock: 8 },
    { nombre: 'Jabon liquido Skip', precio: 1600, stock: 16 },
    { nombre: 'Lavandina Ayudin 2L', precio: 3000, stock: 8 },
    { nombre: 'Cif crema Bioactive', precio: 1600, stock: 12 },
    { nombre: 'Trapo de piso', precio: 3000, stock: 6 },
    { nombre: 'Franela', precio: 1200, stock: 8 },
];

// carrito de compras
let carrito = [];

//creo una funcion para cargar los productos en la página.
function pintarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    productos.forEach((producto, index) => { //recorro el arreglo usando un foreach
        const productDiv = document.createElement('div');
        productDiv.className = 'producto';

        //creo los divs de los productos, inputs, y boton a cada una.
        const productName = document.createElement('span');
        productName.className = 'nombre-producto';
        productName.textContent = `${producto.nombre} - ${producto.precio} $ (Stock: ${producto.stock})`;

//creo un input de tipo numero y como minimo 0.
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = '0';
        cantidadInput.value = '0';
        cantidadInput.className= 'input'
        cantidadInput.dataset.index = index; // indentifico el producto

        const comprarBtn = document.createElement('button');
        comprarBtn.textContent = 'Comprar';
        comprarBtn.className = 'btnComprar';
        comprarBtn.addEventListener('click', () => agregarAlCarrito(index, parseFloat(cantidadInput.value)));

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'acciones';
        actionsDiv.appendChild(cantidadInput);
        actionsDiv.appendChild(comprarBtn);

        productDiv.appendChild(productName);
        productDiv.appendChild(actionsDiv);
        
        listaProductos.appendChild(productDiv);
    });
}

//creo una funcion para agregar productos al carrito
function agregarAlCarrito(index, cantidad) {
    const errorMessageDiv = document.getElementById('error-mensaje');
    errorMessageDiv.textContent = '';  // Limpiar mensaje de error previo

    //condicionales
    if (cantidad > 0) {
        const producto = productos[index];        
        if (cantidad <= producto.stock) {//si la cantidad esta disponible en el stock
            const itemEnCarrito = carrito.find(item => item.nombre === producto.nombre);

            if (itemEnCarrito) {
                    itemEnCarrito.cantidad += cantidad; // le sumo la cantidad nueva del usuario al carrito
                } else {
                    
                carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: cantidad });
            }

            // actualizar stock y total
            producto.stock -= cantidad;
            actualizarTotal();
            actualizarStock();
        } else {
            errorMessageDiv.textContent = `La cantidad ingresada supera el stock disponible para ${producto.nombre}.`;
        }
    } else {
        errorMessageDiv.textContent = 'La cantidad debe ser mayor a 0.';
    }
}

// función para mostrar el total de la compra
function actualizarTotal() {
    let total = 0;
    carrito.forEach(item => {
        total += item.cantidad * item.precio;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

// función para actualizar el stock
function actualizarStock() {
    const listaProductos = document.getElementById('lista-productos'); //selecciono los divs
    const productosDivs = listaProductos.getElementsByClassName('producto');
    
    productos.forEach((producto, index) => {
        const productDiv = productosDivs[index];
        const productName = productDiv.querySelector('.nombre-producto');//selecciono el span dentro del div
        productName.textContent = `${producto.nombre} - ${producto.precio} $ (Stock: ${producto.stock})`;//se actualiza la info del span
    });
}

// uso un addEventListener para cargar la pagina y se ejecuta la funcion
document.addEventListener('DOMContentLoaded', pintarProductos);






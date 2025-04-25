

const productos = [
{nombre: "Laptop", precio: 1200},
{nombre: "Mouse", precio: 25},
{nombre: "Teclado", precio: 50},
{nombre: "Monitor", precio: 300},
{nombre: "Silla Gamer", precio: 450},
{nombre: "Audifonos", precio: 80},
{nombre: "Webcam", precio: 60},
{nombre: "USB 128GB", precio: 30},
{nombre: "Impresora", precio: 200},
{nombre: "Tablet", precio: 500},
];


productos.forEach((productos) => console.log(productos.nombre, productos.precio))

let productosDisponibles = productos.map(producto => producto.nombre)

console.log(productosDisponibles)

//verificar si un producto existe XD

   let productoBuscado = prompt("Que producto esta buscando?")
   if(productosDisponibles.includes(productoBuscado)){
    alert(`${productoBuscado} esta disponible`)
   }
   else{
    alert(`${productoBuscado} no esta disponible`)
   }


   let descuento = productos.map(precio => precio.precio * 0.9)

   console.log(descuento)



//filtrar productos por precio
let precioMaximo = 100
let productosFiltrados = productos.filter(producto => producto.precio <= precioMaximo)

console.log(productosFiltrados) 






//Obtener los primeros 2 productos
let primerosProductos = productos.slice(0, 2)

console.log(primerosProductos)




//Ordenar productos por precio de menor a mayor
let productosOrdenados = productos.sort((a, b) => a.precio - b.precio)
console.log(productosOrdenados)





//Invertir el orden de los productos 

let productosInvertidos = productos.reverse()

console.log(productosInvertidos)



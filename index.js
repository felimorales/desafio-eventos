let precioTotal = 0;

//function suma para calcular precio total
const suma = (a, b) => a + b;

//funcion constructora de productos
class Producto {
  constructor(nombre, precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 0;
  }

  vender(cantidad) {
    precioTotal = suma(precioTotal, cantidad * this.precio);
    this.cantidad = this.cantidad + cantidad;
  }
}

//Productos
const productos = [
  new Producto("Lasagna de acelga", 10, "../img/carne1.jpeg"),
  new Producto("Guiso de lentejas", 20, "../img/carne1.jpeg"),
  new Producto("Malfatti de espinaca", 30, "../img/carne1.jpeg"),
  new Producto("Fideos de zucchini y zanahoria", 40, "../img/carne1.jpeg"),
  new Producto("Fideos de repollo", 50, "../img/carne1.jpeg"),
  new Producto("Pan de carne relleno", 60, "../img/carne1.jpeg"),
  new Producto("Rollito de cerdo c/pure de coliflor", 70, "../img/carne1.jpeg"),
  new Producto("Pechuga rellena", 80, "../img/carne1.jpeg"),
  new Producto("Tacos de pollo", 90, "../img/carne1.jpeg"),
  new Producto(
    "Empanadas de carne c/ masa de calabaza",
    100,
    "../img/carne1.jpeg"
  ),
];

/* console.log(productos[]); */

let contenedor = document.getElementsById("platos-padre");
for (const prod of productos) {
  let prods = document.createElement("div");
  prods.innerHTML = `<img class="plato" src="${prod.img}" alt="${prod.nombre}">
                      <p>${prod.nombre}</p>
                      <!-- Button trigger modal -->
                      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalComprar">
                      Comprar </button>
                      <input type="number" class="cantidad">
                      `;
  contenedor.append(prods);
  prods.className = "platos";
}
console.log(productos[0]);

/* alert(
  "Bienvenidos a la tienda de Que Rico Soli! \nElija sus productos y empiece a disfrutar!"
); */

/* const nombres = [
  "Elija un producto:",
  ...productos.map((prod, i) => `(${i + 1}) ${prod.nombre}`),
  "(0) Cancelar compra.",
];
cantidad = document.getElementsByClassName("cantidad"); */
/* 
function ingresoDatos() {
   let eleccionProducto = parseInt(prompt(nombres.join("\n"))); 
  let seguirComprando = true;
  while (eleccionProducto !== 0 && seguirComprando) {
    
    if (eleccionProducto >= 1 && eleccionProducto <= productos.length) {
       let cantidad = parseInt(prompt("Indique una cantidad de viandas.")); 
      if (isNaN(cantidad)) {
        alert("Ingresar cantidad válida");
      } else {
        productos[eleccionProducto - 1].vender(cantidad);
      }
    } else {
      alert("Ingrese opcion válida");
    }
    seguirComprando = confirm("¿Desea seguir comprando?");
   
    if (seguirComprando) {
      return ingresoDatos();
    }
  }

  if (precioTotal != 0) {
    
    let listaVendidos = productos
    .filter((prod) => prod.cantidad > 0)
    .map((prod) => `# ${prod.cantidad} ${prod.nombre}`)
    .join("\n");

  alert(
    `Has comprado: \n${listaVendidos} \n\nEl total a pagar es de $ ${precioTotal}.\n\n¡Muchas Gracias por su compra!`
  );
  }

  alert("Gracias por visitar Que Rico Soli!! Esperamos volver a verte pronto.");
} */
/* 
ingresoDatos(); */

/* console.log(precioTotal);
productos
  .filter((prod) => prod.cantidad > 0)
  .map((prod) => `Se vendieron ${prod.cantidad} ${prod.nombre}`)
  .forEach((resultadoVentaProd) => console.log(resultadoVentaProd));

   */

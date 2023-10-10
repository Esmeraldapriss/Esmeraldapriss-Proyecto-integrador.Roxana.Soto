let codigo = location.search;
let dataSlide = -1;
let imagenCelular = -1;

let codigoProducto = new URLSearchParams(codigo);

let imagenDetalleHTML = document.querySelector(".productosDetalle");
let productosIndicadorDetalle = document.querySelector(
  ".productosIndicadorDetalle"
);
let codigoSeleccionado = codigoProducto.get("codigo");
let descripcionDetalle = document.querySelector(".descripcionDetalle");

let detalleProducto = JSON.parse(localStorage.getItem("detallesProducto"));
let arrayDetalle = JSON.parse(detalleProducto[0]);
let imagenDetalle = JSON.stringify(arrayDetalle["imagen"]);
let arrayImagenDetalle = JSON.parse(imagenDetalle);
arrayImagenDetalle.forEach((producto, index) => {
  let activo = "";
  if (index == 0) {
    activo = "active";
  }
  productosIndicadorDetalle.innerHTML += `
             <button type="button" data-bs-target="#carruselviajeDetalles" data-bs-slide-to="${(dataSlide += 1)}" class="${activo}" aria-current="${
    producto.ariaCurrent
  }" aria-label="Slide ${slide + 1}"></button>
             `;
  imagenDetalleHTML.innerHTML += `         
         <div class="carousel-item ${activo}">
             <img src="${producto}" class="d-block w-100" alt="${producto.nombre}">
             </div>
                `;
});
descripcionDetalle.innerHTML = `

<div class="d-block d-md-block">
<div class="descripcion detalle my-5 fs-6">
    <h4 class="text-center text-white ">Código del Producto: ${codigoSeleccionado}</h4>
    <h4 class="text-center text-white " id="nombre">${arrayDetalle.nombre}</h4>
    <p class="text-center text-white  fs-5">${arrayDetalle.descripcion}</p>
    <p class="text-center text-white  fs-1">$ ${arrayDetalle.precio}</p>
</div>
</div>
`;

let botonRegresar = document.getElementById("botonRegresar");
botonRegresar.addEventListener("click", function () {
  localStorage.clear();
  location.href = "index.html";
});

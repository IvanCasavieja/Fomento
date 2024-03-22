let contenedorTargetas = document.querySelector(".contenedorTargetas");

let listaDeTargetas = [
  { nombre: "Lavado Uno", imagen: "img/ropalavada.png", descripcion: "Lavado completo de ropa" },
  { nombre: "Secado Uno", imagen: "img/secado.jpg", descripcion: "Secado de ropa" },
  { nombre: "Planchado Tres", imagen: "img/plancha.png", descripcion: "Planchado de la ropa" },
  { nombre: "Personalizado", imagen: "img/ropalavada.png", descripcion: "Lavado personalizado de ropa" },
];

function crearTarjetas() {
  let contenido = "";

  for (const tarjeta of listaDeTargetas) {
    contenido += `<div class="card" data-aos="zoom-in">
                        <div class="contenedorImg">
                            <img src="${tarjeta.imagen}" clas="imagenDeServicios" alt="">
                        </div>
                        <div class="contenedorTituloCard">
                            <p >${tarjeta.nombre}</p>
                        </div>
                        <div class="contenedorDescripcionCard">
                        <p class="text-light">${tarjeta.descripcion}</p>
                    </div>
                    </div>`;
  }

  contenedorTargetas.innerHTML += contenido;
}

crearTarjetas();
AOS.init();



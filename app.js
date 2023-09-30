let listaTarea = JSON.parse(localStorage.getItem("tareas")) || [];
let botonInput = document.getElementById("botonText");
let contenedorTarjetas = document.getElementById("contenedor");
let contador = document.getElementById("contador");

const agregarTarea = function () {
  botonInput.addEventListener("click", function (e) {
    e.preventDefault();

    let tarea = document.getElementById("textArea");
    console.log(tarea.value);
    if (!tarea.value) {
      alert("El campo es obligatorio");
    } else {
      listaTarea.push(tarea.value);

      localStorage.setItem("tareas", JSON.stringify(listaTarea));
      tarea.value = "";
      tarea.select();
      mostrarTarea();
    }
  });
};

const mostrarTarea = function () {
  contenedorTarjetas.innerHTML = " ";

  listaTarea.forEach(function (tarea, index) {
    let tarjeta = document.createElement("div");
    tarjeta.classList = "card";
    let contenidoTarjeta = `<div
    class="card-body d-flex justify-content-between align-items-center"
  >
    📌TAREA PENDIENTE: ${index + 1} - ${tarea}
    <button class="btn btn-danger" onclick= "borrarTarea(${index})">X</button>
  </div>`;

    tarjeta.innerHTML = contenidoTarjeta;
    contenedorTarjetas.appendChild(tarjeta);
  });

  contador.innerText = `Tareas pendientes ${listaTarea.length}`;
};

const borrarTarea = function (index) {
  listaTarea.splice(index, 1);

  localStorage.setItem("tareas", JSON.stringify(listaTarea));

  mostrarTarea();
};

agregarTarea();
mostrarTarea();

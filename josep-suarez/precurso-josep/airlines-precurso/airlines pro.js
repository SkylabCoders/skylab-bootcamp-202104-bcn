//skylab airlines
var flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function vuelos(name) {
  console.log("Welcome " + name + "!");

  let sumatorio_coste = 0;
  let promedio = 0;
  let escalas = [];

  console.log("-------");
  for (let flight = 0; flight < flights.length; flight++) {
    if (flights[flight].scale === true) {
      console.log(
        "El vuelo con origen: " +
          flights[flight].from +
          ", y destino: " +
          flights[flight].to +
          " tiene un coste de: " +
          flights[flight].cost +
          " y realiza escala"
      );

      escalas.push(flight);
    } else {
      console.log(
        "El vuelo con origen: " +
          flights[flight].from +
          ", y destino: " +
          flights[flight].to +
          " tiene un coste de: " +
          flights[flight].cost +
          " y no realiza ninguna escala"
      );
    }

    sumatorio_coste += flights[flight].cost;
  }

  console.log("-------");
  promedio = sumatorio_coste / flights.length;
  console.log(
    "El coste medio de los vuelos es de: " + promedio.toFixed(2).toString()
  );
  console.log("-------");

  console.log("Los vuelos que efectuan escalas son: ");
  for (let i = 0; i < escalas.length; i++) {
    console.log(
      "  -- From: " +
        flights[escalas[i]].from +
        " to: " +
        flights[escalas[i]].to
    );
  }

  console.log("-------");
  console.log("Ultimos destinos del dia tienen destino a: ");
  for (
    let last_flights = flights.length - 1;
    last_flights >= flights.length - 5;
    last_flights--
  ) {
    console.log(" -- " + flights[last_flights].to);
  }

  console.log("");
  console.log("Gracias por volar con nosotros");
}
//llamada a las funciones
pregunta();
function pregunta() {
  let user = prompt("Bienvenido eres admin o user?");
  if (user === null) {
    alert("No has introducido un valor correcto");
    pregunta();
  } else if (user.toLowerCase() === "admin") {
    admin();
  } else if (user.toLowerCase() === "user") {
    usuario();
  } else {
    alert("No has introducido un valor correcto");
    pregunta();
  }
}
function admin() {
  let accion = prompt("Quieres agregar o borrar un vuelo? a/b");
  if (accion === null) {
    admin();
  } else if (accion.toLowerCase() === "a") {
    agregar_vuelo();
  } else if (accion.toLowerCase() === "b") {
    borrar();
  } else {
    alert("Introduce a o b");
    admin();
  }
  //agregar vuelo
  function agregar_vuelo() {
    let nuevo_vuelo = [{ id: "", to: "", from: "", cost: "", scale: Boolean }];
    if (flights.length <= 15) {
      nuevo_vuelo.id = flights.length;
      nuevo_vuelo.to = prompt("Introduce el destino");
      while (nuevo_vuelo.to === null || !isNaN(nuevo_vuelo.to)) {
        nuevo_vuelo.to = prompt("Introduce el destino");
      }
      nuevo_vuelo.from = prompt("Introduce el lugar de salida");
      while (nuevo_vuelo.from === null || !isNaN(nuevo_vuelo.from)) {
        nuevo_vuelo.from = prompt("Introduce el lugar de salida");
      }
      nuevo_vuelo.cost = parseInt(prompt("Introduce el coste"));
      while (isNaN(nuevo_vuelo.cost) || nuevo_vuelo.cost === null) {
        nuevo_vuelo.cost = prompt("Introduce el coste");
      }
      nuevo_vuelo.scale = confirm(
        "Introduce si hace escala en algun sitio con true/false"
      );
      flights.push(nuevo_vuelo);
      console.log("Actualmente hay disponibles estos vuelos: ");
      for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
          console.log(
            "El vuelo con origen: " +
              flights[i].from +
              ", y destino: " +
              flights[i].to +
              " tiene un coste de: " +
              flights[i].cost +
              " y realiza escala"
          );
        } else {
          console.log(
            "El vuelo con origen: " +
              flights[i].from +
              ", y destino: " +
              flights[i].to +
              " tiene un coste de: " +
              flights[i].cost +
              " y no realiza ninguna escala"
          );
        }
      }
    } else {
      console.log("No puedes introducir mas de 15 vuelos");
    }
    let repito = confirm("Quieres introducir más vuelos?");
    if (repito === true) {
      console.clear();
      agregar_vuelo();
    } else {
      alert("Adios! Vuelva pronto");
      return false;
    }
  }
  //borrar vuelo
  function borrar() {
    console.clear();
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].scale === true) {
        console.log(
          "La id del vuelo es: " +
            flights[i].id +
            " ,origen: " +
            flights[i].from +
            ", y destino: " +
            flights[i].to +
            " tiene un coste de: " +
            flights[i].cost +
            " y realiza escala"
        );
      } else {
        console.log(
          "La id del vuelo es: " +
            flights[i].id +
            " ,origen: " +
            flights[i].from +
            ", y destino: " +
            flights[i].to +
            " tiene un coste de: " +
            flights[i].cost +
            " y no realiza ninguna escala"
        );
      }
    }
    let id_borrar = prompt("Introduce la id del vuelo que quieres borrar");
    if (id_borrar === null) {
      alert("No has introducido un valor válido");
      borrar();
    } else if (!isNaN(id_borrar) && id_borrar <= flights.length) {
      flights.splice(id_borrar, 1);
      let repetir = confirm("Quieres borrar algun vuelo mas? si/no");
      if (repetir === true) {
        borrar();
      } else {
        alert("Gracias, vuelva pronto");
      }
    } else {
      alert("Esta ID no es valida");
      borrar();
    }
  }
}
//Buscar por precio
function usuario() {
  let precioBuscado = parseInt(
    prompt("Inserta el precio de vuelo que quieres")
  );
  while (isNaN(precioBuscado)) {
    precioBuscado = parseInt(prompt("Inserta el precio del vuelo que quieres"));
  }
  let comparacion = prompt(
    "Quieres mostras vuelos mas caros, mas baratos o del mismo precio? c/b/i"
  );
  while (comparacion === null) {
    comparacion = prompt(
      "Quieres mostras vuelos mas caros, mas baratos o del mismo precio? c/b/i"
    );
  }
  if (comparacion.toLowerCase() === "c") {
    let precioAlto = flights.filter((value) => value.cost > precioBuscado);
    if (precioAlto.length === 0) {
      alert("No se han encontrado mas vuelos");
    } else {
      console.log("Los vuelos mas caros son:");
      for (let i = 0; i < precioAlto.length; i++) {
        if (precioAlto[i].scale === true) {
          console.log(
            "El vuelo con id: " +
              precioAlto[i].id +
              " y origen: " +
              precioAlto[i].from +
              ", y destino: " +
              precioAlto[i].to +
              " tiene un coste de: " +
              precioAlto[i].cost +
              " y realiza escala"
          );
        } else {
          console.log(
            "El vuelo con id: " +
              precioAlto[i].id +
              " y origen: " +
              precioAlto[i].from +
              ", y destino: " +
              precioAlto[i].to +
              " tiene un coste de: " +
              precioAlto[i].cost +
              " y no realiza escala"
          );
        }
      }
    }
  } else if (comparacion.toLowerCase() === "b") {
    let precioBajo = flights.filter((value) => value.cost < precioBuscado);
    if (precioBajo.length === 0) {
      alert("No se han encontrado mas vuelos");
    } else {
      console.log("Los vuelos mas baratos son:");
      for (let i = 0; i < precioBajo.length; i++) {
        if (precioBajo[i].scale === true) {
          console.log(
            "El vuelo con id: " +
              precioBajo[i].id +
              " y origen: " +
              precioBajo[i].from +
              ", y destino: " +
              precioBajo[i].to +
              " tiene un coste de: " +
              precioBajo[i].cost +
              " y realiza escala"
          );
        } else {
          console.log(
            "El vuelo con id: " +
              precioBajo[i].id +
              " y origen: " +
              precioBajo[i].from +
              ", y destino: " +
              precioBajo[i].to +
              " tiene un coste de: " +
              precioBajo[i].cost +
              " y no realiza escala"
          );
        }
      }
    }
  } else if (comparacion.toLowerCase() === "c") {
    let precioIgual = flights.filter((value) => value.cost === precioBuscado);
    if (precioIgual.length === 0) {
      alert("No se han encontrado vuelos con este precio");
    } else {
      console.log("Los vuelos con el mismo precio son:");
      for (let i = 0; i < precioIgual.length; i++) {
        if (precioIgual[i].scale === true) {
          console.log(
            "El vuelo con id: " +
              precioIgual[i].id +
              "origen: " +
              precioIgual[i].from +
              ", y destino: " +
              precioIgual[i].to +
              " tiene un coste de: " +
              precioIgual[i].cost +
              " y realiza escala"
          );
        } else {
          console.log(
            "El vuelo con id: " +
              precioIgual[i].id +
              " y origen: " +
              precioIgual[i].from +
              ", y destino: " +
              precioIgual[i].to +
              " tiene un coste de: " +
              precioIgual[i].cost +
              " y no realiza escala"
          );
        }
      }
    }
  } else {
    alert("El valor introducido no es correcto");
    usuario();
  }
  //mostrar vuelos y decidir cual comprar
  let indexCompra = prompt("Que ID del vuelo quiere comprar?");
  while (isNaN(indexCompra) || indexCompra >= flights.length) {
    indexCompra = prompt("Que ID del vuelo quiere comprar?");
  }
  alert("Gracias por su compra: Has comprado el vuelo con id: " + indexCompra);
}

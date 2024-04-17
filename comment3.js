
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

const costoBoleta = 10; 


let balanceSala1 = 0;
let balanceSala2 = 0;

function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    balanceSala1 += costoBoleta;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado. Costo: $${costoBoleta}`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    balanceSala2 += costoBoleta;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado. Costo: $${costoBoleta}`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}


function verPelicula() {

  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  

  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);


  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfruta mucho de la peli!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}


function verBalance() {
  alert(`Balance Sala 1: $${balanceSala1}`);
  alert(`Balance Sala 2: $${balanceSala2}`);
  alert(`Balance Total: $${balanceSala1 + balanceSala2}`);
}


while (true) {
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Ver balance" + " 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}
//Cree un arreglo tipado para agregar los primeros clientes que me pide el ejercicio
const reservations: Reservacion[] = [
    {
        id: 1,
        cliente: "Jose Paloma",
        personas: 6,
        zona: "interior",
    },
    {
        id: 2,
        cliente: "Winie the pohh",
        personas: 5,
        zona: "terraza",

    },

    {
        id: 3,
        cliente: "Chancho",
        personas: 7,
        zona: "interior",
    },

    {
        id: 4,
        cliente: "MBZ Tunign",
        personas: 9,
        zona: "terraza",
    },

];

console.log(`Arreglo antes de agregar otros datos nuevos:`, reservations);
//Ahora agrego una reservacion mas alfinal del arreglo anteriormente creado
reservations.push({

    id: 5,
    cliente: "El parche",
    personas: 3,
    zona: "terraza",

})

//Ahora agrego una con prioridad 
reservations.unshift({

    id: 6,
    cliente: "La rata",
    personas: 2,
    zona: "interior",

})
//Muestro el arreglo antes de comenzar lass
console.log(`Lista de reservas antes de comenzar a atender a las personas$`, reservations)

//Ahora atiendo al primer cliente registrado que en este caso es el que tenia prioridad


// Busca una reservación por su identificador.
function buscarReservacion(idBuscado: number): void {
    // Recorre el arreglo y devuelve la reservación cuyo id coincide.
    const encontrada = reservations.find(
        (reserva) => reserva.id === idBuscado
    );

    // Si se encontró, muestra sus datos.
    if (encontrada) {
        console.log("Reservación encontrada:");
        console.table(encontrada);
    } else {
        // Si no hay coincidencias, muestra un mensaje.
        console.log(`No existe una reservación con el id ${idBuscado}.`);
    }
}
// Prueba un identificador existente y otro que no existe.
buscarReservacion(2);
buscarReservacion(99);



//con .shift() eliminas al primer registro del arreglo el de la posicion 0 y lo almaceno en atendido
const atendido = reservations.shift();

if (atendido) {
    console.log(
        `
        Cliente antendido: ${atendido.cliente}, personas: ${atendido.personas}, zona: ${atendido.zona}
        `
    );
} else {
    console.log("No hay reservaciones pendientes");
}

// Guardamos la cantidad de reservaciones del arreglo original antes de filtrar.
const cantidadAntesDeFiltrar = reservations.length;

// filter crea un arreglo nuevo con las reservaciones de terraza para cinco o más personas.
// El parámetro "reserva" representa cada elemento que se revisa en "reservations".
const pendiente = reservations.filter((reserva) => {
    return reserva.zona === "terraza" && reserva.personas >= 5;
});

// Consultamos otra vez la cantidad del arreglo original para comprobar que filter no lo modificó.
const cantidadDespuesDeFiltrar = reservations.length;

console.log(`Cantidad original antes de filtrar: ${cantidadAntesDeFiltrar}`);
console.log(`Cantidad original después de filtrar: ${cantidadDespuesDeFiltrar}`);
console.log(`Coincidencias producidas por el filtro: ${pendiente.length}`);

// Mostramos el arreglo filtrado, o un mensaje si no hubo coincidencias.
if (pendiente.length > 0) {
    console.table(pendiente);
} else {
    console.log("No hay reservaciones de terraza con cinco o más personas.");
}

//Ahora ya voy por la parte 6 de este parcial, que  pues basicamente es mostrar todo mis arreglos de reservaciones para poder observar cuantas quedan pendientes
if (reservations.length > 0) {
    console.log(`
        Reservaciones pendientes de solventar
        ${reservations.length}`
    )
    console.table(reservations)
} else {
    console.log("No hay reservaciones pendientes");
}

// Guardamos los ids que esperamos que queden en reservations después de atender
// la reservación prioritaria (id 6).
const idsFinalesEsperados = [1, 2, 3, 4, 5];

// map recorre reservations y crea un nuevo arreglo que contiene solo los ids.
const idsFinales = reservations.map((reserva) => reserva.id);

// Comprobamos que los arreglos tengan la misma cantidad de ids y que cada id
// esté en la posición esperada. every devuelve true solo si todas las comparaciones coinciden.
const estadoFinalCorrecto =
    idsFinales.length === idsFinalesEsperados.length &&
    idsFinales.every((id, indice) => id === idsFinalesEsperados[indice]);

// Verificamos que atendido exista y que sea la reservación prioritaria, cuyo id es 6.
const atencionCorrecta = atendido !== undefined && atendido.id === 6;

// Estos son los ids que esperamos encontrar en el arreglo pendiente.
const idsFiltradosEsperados = [2, 4];

// Comprobamos que pendiente tenga la cantidad de reservaciones esperada y que
// sus ids coincidan, en orden, con los ids de idsFiltradosEsperados.
const filtroCorrecto =
    pendiente.length === idsFiltradosEsperados.length &&
    pendiente.every((reserva, indice) => reserva.id === idsFiltradosEsperados[indice]);

// Mostramos el encabezado y el contenido actual del arreglo reservations.
console.log("Estado final del arreglo:");
console.table(reservations);

// Mostramos true si el arreglo final conserva exactamente los ids esperados.
console.log(`¿El arreglo conserva los ids esperados? ${estadoFinalCorrecto}`);

// Mostramos true si se atendió correctamente la reservación con id 6.
console.log(`¿Se atendió la reservación prioritaria (id 6)? ${atencionCorrecta}`);

// Mostramos true si el filtro encontró las reservaciones con ids 2 y 4.
console.log(`¿El filtro encontró los ids esperados (2 y 4)? ${filtroCorrecto}`);
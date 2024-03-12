/*import inquirer from 'inquirer';
import { ColeccionMuebles } from './coleccion_muebles.js';
import { Silla } from './silla.js';
import { Comoda } from './comoda.js';

// Instanciar la clase Stock para gestionar la información del sistema
const mueble_1 :Silla = new Silla(5, "Silla1", "Una bonita silla",'Madera', "5x5x5", 30, "Marrón");
const mueble_2 :Comoda = new Comoda(6, "Silla1", "Una bonita comoda",'Madera', "5x5x5", 30, 5);
const muebles = new ColeccionMuebles([mueble_1, mueble_2]);

// Función principal para interactuar con la aplicación
async function main() {
    console.log('Bienvenido al sistema de gestión de muebles, proveedores y clientes.');

    // Mostrar el menú principal
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Gestionar muebles',
            'Gestionar proveedores',
            'Gestionar clientes',
            'Salir'
        ]
    });

    switch (option) {
        case 'Gestionar muebles':
            await gestionarMuebles();
            break;
        case 'Gestionar proveedores':
            await gestionarProveedores();
            break;
        case 'Gestionar clientes':
            await gestionarClientes();
            break;
        case 'Salir':
            console.log('Gracias por usar el sistema. ¡Hasta luego!');
            return;
    }
}

// Función para gestionar los muebles
async function gestionarMuebles() {
    console.log('\nGestión de muebles:');

    // Mostrar opciones para gestionar los muebles
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Añadir mueble',
            'Borrar mueble',
            'Modificar mueble',
            'Buscar mueble',
            'Volver'
        ]
    });

    switch (option) {
        case 'Añadir mueble':
            // Implementar lógica para añadir un mueble
            break;
        case 'Borrar mueble':
            // Implementar lógica para borrar un mueble
            break;
        case 'Modificar mueble':
            // Implementar lógica para modificar un mueble
            break;
        case 'Buscar mueble':
            await buscarMueble();
            break;
        case 'Volver':
            // Volver al menú principal
            await main();
            break;
    }
}

async function buscarMueble() {
    console.log('\nBuscar mueble:');

    // Mostrar opciones para buscar un mueble
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Buscar por nombre',
            'Buscar por tipo',
            'Buscar por descripción',
            'Volver'
        ]
    });

    switch (option) {
        case 'Buscar por nombre':
            console.table(muebles.searchByNombre('Silla1'));
            await ordenar();
            break;
        case 'Buscar por tipo':
            // Implementar lógica para buscar un mueble por tipo
            break;
        case 'Buscar por descripción':
            // Implementar lógica para buscar un mueble por descripción
            break;
        case 'Volver':
            // Volver al menú de gestión de muebles
            await gestionarMuebles();
            break;
    }
}

async function ordenar() {
    console.log('\nOrdenar muebles:');

    // Mostrar opciones para ordenar los muebles
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Ordenar por precio ascendente',
            'Ordenar por precio descendente',
            'Ordenar alfabéticamente ascendente',
            'Ordenar alfabéticamente descendente',
            'Volver'
        ]
    });

    switch (option) {
        case 'Ordenar por precio ascendete':
            console.table(muebles.orderByPrecio(false));
            break;
        case 'Ordenar por precio descendente':
            console.table(muebles.orderByPrecio());    
            break;
        case 'Ordenar alfabéticamente ascendente':
            // Implementar lógica para ordenar los muebles alfabéticamente
            console.table(muebles.orderByAlfabeticamente(false));
            break;
        case 'Ordenar alfabéticamente descendente':
            // Implementar lógica para ordenar los muebles alfabéticamente
            console.table(muebles.orderByAlfabeticamente());
            break;
        case 'Volver':
            // Volver al menú de búsqueda de muebles
            await buscarMueble();
            break;
    }
}

// Función para gestionar los proveedores
async function gestionarProveedores() {
    console.log('\nGestión de proveedores:');

    // Mostrar opciones para gestionar los proveedores
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Añadir proveedor',
            'Borrar proveedor',
            'Modificar proveedor',
            'Buscar proveedor',
            'Volver'
        ]
    });

    switch (option) {
        case 'Añadir proveedor':
            // Implementar lógica para añadir un proveedor
            break;
        case 'Borrar proveedor':
            // Implementar lógica para borrar un proveedor
            break;
        case 'Modificar proveedor':
            // Implementar lógica para modificar un proveedor
            break;
        case 'Buscar proveedor':
            // Implementar lógica para buscar un proveedor
            break;
        case 'Volver':
            // Volver al menú principal
            await main();
            break;
    }
}

// Función para gestionar los clientes
async function gestionarClientes() {
    console.log('\nGestión de clientes:');

    // Mostrar opciones para gestionar los clientes
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Selecciona una opción:',
        choices: [
            'Añadir cliente',
            'Borrar cliente',
            'Modificar cliente',
            'Buscar cliente',
            'Volver'
        ]
    });

    switch (option) {
        case 'Añadir cliente':
            // Implementar lógica para añadir un cliente
            break;
        case 'Borrar cliente':
            // Implementar lógica para borrar un cliente
            break;
        case 'Modificar cliente':
            // Implementar lógica para modificar un cliente
            break;
        case 'Buscar cliente':
            // Implementar lógica para buscar un cliente
            break;
        case 'Volver':
            // Volver al menú principal
            await main();
            break;
    }
}

// Iniciar la aplicación
main();
*/
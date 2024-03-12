import { Cliente } from './cliente.js';

export class ColeccionClientes {
	protected _clientes: Cliente[];

	constructor(clientes? : Cliente[]) {
		if (clientes) {
			this._clientes = clientes;
		} else {
			this._clientes = [];
		}
	}

	
	get clientes(): Cliente[] {
		return this._clientes;
	}
	
	addCliente(cliente: Cliente): void {
		this._clientes.push(cliente);
	}

	removeClienteById(id :number): void {
		const index = this._clientes.findIndex(cliente => cliente.id === id);
		if (index > -1) {
			this._clientes.splice(index, 1);
		} else {
			throw new Error('No se ha encontrado el cliente con el id proporcionado');
		}
	}

	searchByName(nombre: string): Cliente[] {
		return this._clientes.filter((c) => c.nombre === nombre);
	}

	searchByContacto(contacto: string): Cliente[] {
		return this._clientes.filter((c) => c.contacto === contacto);
	}

	searchByDireccion(direccion: string): Cliente[] {	
		return this._clientes.filter((c) => c.direccion === direccion);
	}
}
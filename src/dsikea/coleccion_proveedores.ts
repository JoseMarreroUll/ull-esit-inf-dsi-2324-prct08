import { Proveedor } from './proveedor.js';

export class ColeccionProveedores {
	protected _proveedores: Proveedor[];

	constructor(proveedores? : Proveedor[]) {
		if (proveedores) {
			this._proveedores = proveedores;
		} else {
			this._proveedores = [];
		}
	}

	get proveedores(): Proveedor[] {
		return this._proveedores;
	}


	
	addProveedor(proveedor: Proveedor): void {
		this._proveedores.push(proveedor);
	}

	removeProveedorById(id :number): void {
		const index = this._proveedores.findIndex(proveedor => proveedor.id === id);
		if (index > -1) {
			this._proveedores.splice(index, 1);
		} else {
			throw new Error('No se ha encontrado el proveedor con el id proporcionado');
		}
	}

	searchByName(nombre: string): Proveedor[] {
		return this._proveedores.filter((p) => p.nombre === nombre);
	}

	searchByContacto(contacto: string): Proveedor[] {
		return this._proveedores.filter((p) => p.contacto === contacto);
	}

	searchByDireccion(direccion: string): Proveedor[] {	
		return this._proveedores.filter((p) => p.direccion === direccion);
	}
}
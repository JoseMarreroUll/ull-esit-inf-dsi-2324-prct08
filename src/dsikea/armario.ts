import { Mueble } from './mueble.js';

export class Armario extends Mueble {
  private _puertas: number;

  constructor(id: number, nombre: string, descripcion: string, material: string, dimensiones: string, precio: number, puertas: number) {
    super(id, nombre, descripcion, material, dimensiones, precio);
    this._puertas = puertas;
  }

  get puertas() {
    return this._puertas;
  }
}
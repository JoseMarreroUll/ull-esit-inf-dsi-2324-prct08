import { Mueble } from './mueble.js';

export class Comoda extends Mueble {
  private _cajones: number;

  constructor(id: number, nombre: string, descripcion: string, material: string, dimensiones: string, precio: number, cajones: number) {
    super(id, nombre, descripcion, material, dimensiones, precio);
    this._cajones = cajones;
  }

  get cajones() {
    return this._cajones;
  }
}
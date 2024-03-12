import { Mueble } from './mueble.js';

export class Silla extends Mueble {
  private _tipo: string;

  constructor(id: number, nombre: string, descripcion: string, material: string, dimensiones: string, precio: number, tipo: string) {
    super(id, nombre, descripcion, material, dimensiones, precio);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}
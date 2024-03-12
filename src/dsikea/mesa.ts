import { Mueble } from './mueble.js';

export class Mesa extends Mueble {
  private _forma : string;

  constructor(id: number, nombre: string, descripcion: string, material: string, dimensiones: string, precio: number, forma: string) {
    super(id, nombre, descripcion, material, dimensiones, precio);
    this._forma = forma;
  }

  get forma() {
    return this._forma;
  }
}
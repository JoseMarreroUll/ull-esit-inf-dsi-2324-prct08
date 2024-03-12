import { Mueble } from './mueble.js';

type MuebleCantidad = [Mueble, number];

export class ColeccionMuebles {
  private _muebles: MuebleCantidad[];
  private _ultima_busqueda: MuebleCantidad[] = [];

  constructor(muebles? : MuebleCantidad[]) {
    if (muebles) {
      this._muebles = muebles;
    } else {
      this._muebles = [];
    }
  }

  get muebles() {
    return this._muebles;
  }

  addMueble(new_mueble: Mueble, cantidad: number = 1) {
    this._muebles.push([new_mueble, cantidad]);
  }
  
  addMuebleById(id: number, cantidad: number = 1) {
    const index = this._muebles.findIndex(mueble => mueble[0].id === id);
    if (index > -1) {
      this._muebles[index][1] += cantidad;
    } else {
      throw new Error('No se ha encontrado el mueble con el id proporcionado');
    }
  }

  removeMueble(new_mueble: Mueble, cantidad: number = 1) {
    const index = this._muebles.findIndex(mueble => mueble[0].id === new_mueble.id);
    if (index > -1) {
      this._muebles[index][1] -= cantidad;
      if (this._muebles[index][1] <= 0) {
        this._muebles.splice(index, 1);
      }
    }
  }

  removeMuebleById(id :number, cantidad: number = 1) {
    const index = this._muebles.findIndex(mueble => mueble[0].id === id);
    if (index > -1) {
      this._muebles[index][1] -= cantidad;
      if (this._muebles[index][1] <= 0) {
        this._muebles.splice(index, 1);
      }
    }
  }

  searchByNombre(nombre: string) :MuebleCantidad[] {
    this._ultima_busqueda = this._muebles.filter(mueble => mueble[0].nombre === nombre);
    return this._ultima_busqueda;
  }

  searchByTipo(type: string) :MuebleCantidad[] {
    this._ultima_busqueda = this._muebles.filter(mueble => mueble[0].constructor.name.toLowerCase() === type.toLowerCase());
    return this._ultima_busqueda;
  }

  searchCoincidences(keyword: string) :MuebleCantidad[] {
    this._ultima_busqueda = this._muebles.filter(mueble => mueble[0].descripcion.toLowerCase().includes(keyword.toLowerCase()));
    return this._ultima_busqueda;
  }

  orderByPrecio(descendente :boolean = true) :MuebleCantidad[] {
    if (descendente) {
      return this._ultima_busqueda.sort((a, b) => b[0].precio - a[0].precio);
    } else {
      return this._ultima_busqueda.sort((a, b) => a[0].precio - b[0].precio);
    }
  }

  orderByAlfabeticamente(descendente :boolean = true) :MuebleCantidad[] {
    if (descendente) {
      return this._ultima_busqueda.sort((a, b) => b[0].nombre.localeCompare(a[0].nombre));
    } else {
      return this._ultima_busqueda.sort((a, b) => a[0].nombre.localeCompare(b[0].nombre));
    }
  }
}
import { Mueble } from "./mueble.js";
import { Proveedor } from "./proveedor.js";
import { Cliente } from "./cliente.js";

import { ColeccionMuebles } from "./coleccion_muebles.js";
import { ColeccionProveedores } from "./coleccion_proveedores.js";
import { ColeccionClientes } from "./coleccion_clientes.js";
import { Transaccion } from "./transaccion.js";

import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";

type InfoMueble = 'nombre' | 'descripcion' | 'material' | 'dimensiones' | 'precio';

type InfoEntidad = 'nombre' | 'direccion' | 'contacto';

type DBStock = {
  Muebles: ColeccionMuebles;
  Proveedores: ColeccionProveedores;
  Clientes: ColeccionClientes;
  Transacciones: Transaccion[];
}

export class Stock {
	private _db: lowdb.LowdbSync<DBStock>;
	private _stock: DBStock;
	
  private static StockInstance: Stock;

	constructor() {
		this._db = lowdb(new FileSync("stock.json"));
    if (this._db.has("Muebles").value()) {
      this._stock.Muebles = this._db.get("Muebles").value();
    } else {
      this._db.set("Muebles", []).write();
      this._stock.Muebles = this._db.get("Muebles").value();
    }

    if (this._db.has("Proveedores").value()) {
      this._stock.Proveedores = this._db.get("Proveedores").value();
    } else {
      this._db.set("Proveedores", []).write();
      this._stock.Proveedores = this._db.get("Proveedores").value();
    }
    
    if (this._db.has("Clientes").value()) {
      this._stock.Clientes = this._db.get("Clientes").value();
    } else {
      this._db.set("Clientes", []).write();
      this._stock.Clientes = this._db.get("Clientes").value();
    }
    
    if (this._db.has("Transacciones").value()) {
      this._stock.Transacciones = this._db.get("Transacciones").value();
    } else {
      this._db.set("Transacciones", []).write();
      this._stock.Transacciones = this._db.get("Transacciones").value();
    }
  }

  public static getInstance(): Stock {
    if (!Stock.StockInstance) {
      Stock.StockInstance = new Stock();
    }
    return Stock.StockInstance;
  }

  get db() {
    return Stock.StockInstance._db;
  }

  get stock() {
    return Stock.StockInstance._stock;
  }

  saveDB() {
    Stock.StockInstance._db.set("Muebles", Stock.StockInstance._stock.Muebles).write();
    Stock.StockInstance._db.set("Proveedores", Stock.StockInstance._stock.Proveedores).write();
    Stock.StockInstance._db.set("Clientes", Stock.StockInstance._stock.Clientes).write();
    Stock.StockInstance._db.set("Transacciones", Stock.StockInstance._stock.Transacciones).write();
  }

  addNewMueble(mueble: Mueble, cantidad? :number) {
    Stock.StockInstance._stock.Muebles.addMueble(mueble, cantidad);
    this.saveDB()
  }

  addMuebleExistente(id: number, cantidad: number) {
    Stock.StockInstance._stock.Muebles.addMuebleById(id, cantidad);
    this.saveDB()
  }

  removeMueble(id: number) {
    Stock.StockInstance._stock.Muebles.removeMuebleById(id);
    this.saveDB()
  }

	modifyMueble(id: number, parametro :InfoMueble, valor :string | number) {
    const indexMueble = Stock.StockInstance._stock.Muebles.muebles.findIndex(mueble => mueble[0].id === id);
    switch (parametro) {
      case 'nombre':
        Stock.StockInstance._stock.Muebles.muebles[indexMueble][0].nombre = valor as string;
        break;
      case 'descripcion':
        Stock.StockInstance._stock.Muebles.muebles[indexMueble][0].descripcion = valor as string;
        break;
      case 'material':
        Stock.StockInstance._stock.Muebles.muebles[indexMueble][0].material = valor as string;
        break;
      case 'dimensiones':
        Stock.StockInstance._stock.Muebles.muebles[indexMueble][0].dimensiones = valor as string;
        break;
      case 'precio':
        Stock.StockInstance._stock.Muebles.muebles[indexMueble][0].precio = valor as number;
        break;
      default:
        break;
    }
    this.saveDB()
  }

  addProveedor(proveedor: Proveedor) {
    Stock.StockInstance._stock.Proveedores.addProveedor(proveedor);
    this.saveDB()
  }

  removeProveedor(id: number) {
    Stock.StockInstance._stock.Proveedores.removeProveedorById(id);
    this.saveDB()
  }

  modifyProveedor(id: number, parametro :InfoEntidad, valor :string) {
    const indexProveedor = Stock.StockInstance._stock.Proveedores.proveedores.findIndex(proveedor => proveedor.id === id);
    switch (parametro) {
      case 'nombre':
        Stock.StockInstance._stock.Proveedores.proveedores[indexProveedor].nombre = valor;
        break;
      case 'direccion':
        Stock.StockInstance._stock.Proveedores.proveedores[indexProveedor].direccion = valor;
        break;
      case 'contacto':
        Stock.StockInstance._stock.Proveedores.proveedores[indexProveedor].contacto = valor;
        break;
      default:
        break;
    }
    this.saveDB()
  }

  addCliente(cliente: Cliente) {
    Stock.StockInstance._stock.Clientes.addCliente(cliente);
    this.saveDB()
  }

  removeCliente(id: number) {
    Stock.StockInstance._stock.Clientes.removeClienteById(id);
    this.saveDB()
  }

  modifyCliente(id: number, parametro :InfoEntidad, valor :string) {
    const indexCliente = Stock.StockInstance._stock.Clientes.clientes.findIndex(cliente => cliente.id === id);
    switch (parametro) {
      case 'nombre':
        Stock.StockInstance._stock.Clientes.clientes[indexCliente].nombre = valor;
        break;
      case 'direccion':
        Stock.StockInstance._stock.Clientes.clientes[indexCliente].direccion = valor;
        break;
      case 'contacto':
        Stock.StockInstance._stock.Clientes.clientes[indexCliente].contacto = valor;
        break;
      default:
        break;
    }
    this.saveDB()
  }

  ventaMueble(idMueble: number, idCliente: number, cantidad: number) {
    const mueble = Stock.StockInstance._stock.Muebles.muebles.find(mueble => mueble[0].id === idMueble);
    const cliente = Stock.StockInstance._stock.Clientes.clientes.find(cliente => cliente.id === idCliente);
    if (!mueble) throw new Error('No se ha encontrado el mueble con el id proporcionado');
    if (!cliente) throw new Error('No se ha encontrado el cliente con el id proporcionado');
    /// Existe el mueble y el cliente
    Stock.StockInstance._stock.Muebles.removeMuebleById(idMueble, cantidad);
    const transaccion: Transaccion = {
      date: new Date(),
      id_mueble: idMueble,
      id_implicado: idCliente,
      type: 'Venta',
      amount: cantidad
    };
    Stock.StockInstance._stock.Transacciones.push(transaccion);
    this.saveDB()
  }
}
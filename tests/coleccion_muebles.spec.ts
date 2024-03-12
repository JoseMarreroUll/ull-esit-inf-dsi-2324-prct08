import 'mocha';
import { expect } from 'chai';

import { Mueble } from '../src/dsikea/mueble.js';
import { Armario } from '../src/dsikea/armario.js';
import { Comoda } from '../src/dsikea/comoda.js';
import { Mesa } from '../src/dsikea/mesa.js';
import { Silla } from '../src/dsikea/silla.js';

import { ColeccionMuebles } from '../src/dsikea/coleccion_muebles.js';

describe('Test de la clase coleccion_muebles', () => {
	let coleccion: ColeccionMuebles;
	let mueble1: Armario;
	let mueble2: Armario;
	let mueble3: Armario;
	let mueble4: Armario;
	let mueble5: Armario;
	let mueble6: Comoda;
	let mueble7: Comoda;
	let mueble8: Comoda;
	let mueble9: Comoda;
	let mueble10: Comoda;
	let mueble11: Mesa;
	let mueble12: Mesa;
	let mueble13: Mesa;
	let mueble14: Mesa;
	let mueble15: Mesa;
	let mueble16: Silla;
	let mueble17: Silla;
	let mueble18: Silla;
	let mueble19: Silla;
	let mueble20: Silla;


	beforeEach(() => {
		mueble1 = new Armario(1, 'Clásico Elegante', 'Un armario de estilo clásico con detalles de molduras y acabado en nogal',
		'Madera', '180 cm de ancho x 220 cm de alto x 60 cm de profundidad', 1000, 3);
		mueble2 = new Armario(2, 'Moderno y Funcional', 'Un armario moderno con líneas limpias y acabado mate, diseñado para optimizar el espacio',
		'Madera', '50 cm de ancho x 200 cm de alto x 50 cm de profundidad.', 400, 2);
		mueble3 = new Armario(3, 'Estilo Industrial', 'Un armario robusto con estructura de metal negro y paneles de madera reciclada.',
		'Metal', '160 cm de ancho x 210 cm de alto x 55 cm de profundidad', 800, 4);
		mueble4 = new Armario(4, 'Minimalista y Funcional', 'Un armario minimalista con diseño modular y acabado en blanco mate.',
		'Madera', '200 cm de ancho x 230 cm de alto x 60 cm de profundidad', 600, 3);
		mueble5 = new Armario(5, 'Rústico y Acogedor', 'Un armario rústico con detalles de madera envejecida y tiradores de hierro forjado.',
		'Madera', '180 cm de ancho x 220 cm de alto x 65 cm de profundidad.', 900, 5);

		mueble6 = new Comoda(6, 'Moderna Minimalista', 'Una cómoda elegante y minimalista con líneas limpias y acabado brillante.', 
		'Madera', '100X90X50(cm)', 300, 4);
		mueble7 = new Comoda(7, 'Vintage Chic', 'Una cómoda vintage con encanto, detalles tallados a mano y patas torneadas.', 
		'Madera', '100 cm de ancho x 90 cm de alto x 50 cm de profundidad', 250, 6);
		mueble8 = new Comoda(8, 'Industrial Loft', 'Una cómoda robusta y urbana inspirada en el estilo industrial, con detalles de metal negro y acabado envejecido.',
		'Metal', '140 cm de ancho x 100 cm de alto x 60 cm de profundidad', 500, 5);
		mueble9 = new Comoda(9, 'Rústica Rural', 'Una cómoda rústica con un acabado desgastado, perfecta para un ambiente campestre.', 
		'Madera', '130 cm de ancho x 85 cm de alto x 55 cm de profundidad', 200, 7);
		mueble10 = new Comoda(10, 'Contemporánea de Lujo', 'Una cómoda lujosa con un diseño contemporáneo, líneas geométricas y acabado lacado.', 
		'Acero', '160 cm de ancho x 110 cm de alto x 50 cm de profundidad', 1000, 8)

		mueble11 = new Mesa(11, 'Elegancia Clásica', 'Una mesa de comedor con un diseño clásico y elegante, perfecta para reuniones formales.',
		'Madera', '180 cm de largo x 90 cm de ancho x 75 cm de alto', 800, 'Rectangular');
		mueble12 = new Mesa(12, 'Minimalista Moderna', 'Una mesa de centro de estilo minimalista con líneas limpias y un acabado en negro mate.',
		'Vidrio', '120 cm de largo x 60 cm de ancho x 45 cm de alto', 300, 'Circular');
		mueble13 = new Mesa(13, 'Estilo Industrial', 'Una mesa auxiliar inspirada en el estilo industrial, con patas de metal y un tablero de madera envejecida.',
		'Metal', '60 cm de diámetro x 55 cm de alto', 150, 'Circular');
		mueble14 = new Mesa(14, 'Funcionalidad Moderna', 'Una mesa de estudio con un diseño moderno y funcional, equipada con estantes de almacenamiento integrados.',
		'Madera', '120 cm de largo x 60 cm de ancho x 75 cm de alto', 200, 'Rectangular');
		mueble15 = new Mesa(15, 'Rústica Al Aire Libre', 'Una mesa de jardín resistente a la intemperie, con un diseño rústico y acabado envejecido.',
		'Madera', '150 cm de largo x 90 cm de ancho x 75 cm de alto', 500, 'Rectangular');

		mueble16 = new Silla(16, 'Ergonómica Comfort', 'Una silla diseñada para proporcionar comodidad durante largas horas de trabajo o estudio, con soporte lumbar ajustable y acolchado ergonómico.',
		'Malla', '60 cm de ancho x 90 cm de alto x 50 cm de profundidad', 150, 'Silla de oficina');
		mueble17 = new Silla(17, 'Vintage Retro', 'Una silla de estilo retro inspirada en los diseños de mediados del siglo XX, con tapizado de cuero sintético y patas de madera de haya.',
		'Cuero sintético', '55 cm de ancho x 80 cm de alto x 50 cm de profundidad', 100, 'Silla de comedor');
		mueble18 = new Silla(18, 'Minimalista Moderna', 'Una silla con líneas limpias y diseño minimalista, perfecta para espacios contemporáneos, con estructura de metal y asiento de plástico moldeado.',
		'Metal', '45 cm de ancho x 85 cm de alto x 50 cm de profundidad', 50, 'Silla de escritorio');
		mueble19 = new Silla(19, 'Campestre Acogedora', 'Una silla con encanto rural, ideal para ambientes acogedores, con respaldo de mimbre tejido a mano y estructura de madera de roble.',
		'Mimbre', '50 cm de ancho x 95 cm de alto x 45 cm de profundidad', 80, 'Silla de cocina');
		mueble20 = new Silla(20, 'Industrial Vintage', 'Una silla robusta con un toque industrial, con estructura de metal envejecido y asiento de madera maciza reciclada.',
		'Metal', '40 cm de ancho x 85 cm de alto x 40 cm de profundidad', 80, 'Silla de bar');

		coleccion = new ColeccionMuebles([[mueble1, 3], [mueble2, 2], [mueble3, 4], [mueble4, 3], [mueble5, 5], 
																			[mueble6, 4], [mueble7, 6], [mueble8, 5], [mueble9, 7], [mueble10, 8], 
																			[mueble11, 6], [mueble12, 2], [mueble13, 3], [mueble14, 2], [mueble15, 2], 
																			[mueble16, 2], [mueble17, 4], [mueble18, 8], [mueble19, 12], [mueble20, 4]]);
	});

	it('Se crea una colección de muebles', () => {
		expect(coleccion).to.be.an.instanceof(ColeccionMuebles);
	});

	it('Se obtiene el número de muebles de la colección', () => {
		expect(coleccion.muebles.length).to.equal(20);
	});
	
	it('Se obtienen los muebles de la colección', () => {
		const solucion : [Mueble, number][] = [[mueble1, 3], [mueble2, 2], [mueble3, 4], [mueble4, 3], [mueble5, 5], 
																				 [mueble6, 4], [mueble7, 6], [mueble8, 5], [mueble9, 7], [mueble10, 8], 
																				 [mueble11, 6], [mueble12, 2], [mueble13, 3], [mueble14, 2], [mueble15, 2], 
																				 [mueble16, 2], [mueble17, 4], [mueble18, 8], [mueble19, 12], [mueble20, 4]];
		expect(coleccion.muebles).to.eql(solucion);
	});

	it('Se añade un mueble a la colección', () => {
		const mueble21: Mesa = new Mesa(21, 'prueba', 'prueba', 'prueba', 'prueba', 100, 'prueba');
		coleccion.addMueble(mueble21, 1);
		const solucion : [Mueble, number][] = [[mueble1, 3], [mueble2, 2], [mueble3, 4], [mueble4, 3], [mueble5, 5], 
																				 [mueble6, 4], [mueble7, 6], [mueble8, 5], [mueble9, 7], [mueble10, 8], 
																				 [mueble11, 6], [mueble12, 2], [mueble13, 3], [mueble14, 2], [mueble15, 2], 
																				 [mueble16, 2], [mueble17, 4], [mueble18, 8], [mueble19, 12], [mueble20, 4], [mueble21, 1]];
		expect(coleccion.muebles).to.eql(solucion);
	});
	
	it('Se elimina un mueble de la colección', () => {
		coleccion.removeMueble(mueble1, 3);
		const solucion : [Mueble, number][] = [[mueble2, 2], [mueble3, 4], [mueble4, 3], [mueble5, 5], 
																				 [mueble6, 4], [mueble7, 6], [mueble8, 5], [mueble9, 7], [mueble10, 8], 
																				 [mueble11, 6], [mueble12, 2], [mueble13, 3], [mueble14, 2], [mueble15, 2], 
																				 [mueble16, 2], [mueble17, 4], [mueble18, 8], [mueble19, 12], [mueble20, 4]];
		expect(coleccion.muebles).to.eql(solucion);
	});

	it('Se añade un mueble a la colección por su id', () => {
		const muebleId = 1;
		const cantidad = 2;
		coleccion.addMuebleById(muebleId, cantidad);
		expect(coleccion.muebles[muebleId - 1][1]).to.equal(5);
	});

	it('Se elimina un mueble de la colección por su id', () => {
		const muebleId = 3;
		const cantidad = 2;
		coleccion.removeMuebleById(muebleId, cantidad);
		expect(coleccion.muebles[muebleId - 1][1]).to.equal(2);
	});

	it('Se busca un mueble por su nombre', () => {
		const nombre = 'Minimalista Moderna';
		const resultado = coleccion.searchByNombre(nombre);
		const solucion = [[mueble12, 2], [mueble18, 8]];
		expect(resultado).to.eql(solucion);
	});

	it('Se busca un mueble por su tipo', () => {
		const tipo = 'Armario';
		const resultado = coleccion.searchByTipo(tipo);
		const solucion = [[mueble1, 3], [mueble2, 2], [mueble3, 4], [mueble4, 3], [mueble5, 5]];
		expect(resultado).to.eql(solucion);
	});

	it('Se busca coincidencias por palabra clave', () => {
		const keyword = 'elegante';
		const resultado = coleccion.searchCoincidences(keyword);
		const solucion = [[mueble6, 4], [mueble11, 6]];
		expect(resultado).to.eql(solucion);
	});

	it('Ordena los muebles buscados por tipo \'Armario\' por precio de forma descendente', () => {
		coleccion.searchByTipo('Armario');
		const resultado = coleccion.orderByPrecio(true);
		const solucion = [
			[mueble1, 3],
			[mueble5, 5],
			[mueble3, 4],
			[mueble4, 3],
			[mueble2, 2]
		];
		expect(resultado).to.eql(solucion);
	});

	it('Ordena los muebles por precio de forma ascendente', () => {
		coleccion.searchByTipo('Armario');
		const resultado = coleccion.orderByPrecio(false);
		const solucion = [
			[mueble2, 2],
			[mueble4, 3],
			[mueble3, 4],
			[mueble5, 5],
			[mueble1, 3]
		];
		expect(resultado).to.eql(solucion);
	});

	it('Ordena los muebles alfabéticamente por nombre de forma descendente', () => {
		coleccion.searchByTipo('Armario');
		const resultado = coleccion.orderByAlfabeticamente(true);
		const solucion = [
			[mueble5, 5],
			[mueble2, 2],
			[mueble4, 3],
			[mueble3, 4],
			[mueble1, 3]
		];
		expect(resultado).to.eql(solucion);
	});

	it('Ordena los muebles alfabéticamente por nombre de forma ascendente', () => {
		coleccion.searchByTipo('Armario');
		const resultado = coleccion.orderByAlfabeticamente(false);
		const solucion = [
			[mueble1, 3],
			[mueble3, 4],
			[mueble4, 3],
			[mueble2, 2],
			[mueble5, 5]
		];
		expect(resultado).to.eql(solucion);
	});

});
/**
 * Interfaz genérica que declara los métodos para que un evento sea observable
 * @method subscribe Subscribe un observer al evento observable.
 * @method unsubscribe Desubscribe un observer del evento observable.
 * @method notify Notifica a los observers del evento.
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event :Event<T>): void;
}

/**
 * Interfaz genérica que declara el método para actualizar un evento a un observer
 * @method update Notifica la información actualizada del evento observado.
 */
export interface Observer<T> {
  update(event: Event<T>): string;
}

/**
 * Interfaz genérica que permite definir eventos de diferente tipo
 * @param T Tipo genérico.
 * @property name Nombre del evento
 * @property data Datos del evento
 */
export interface Event<T> {
  name :string;
  data :T;
}

/**
 * Clase que representa a un evento observable de tipo T.
 * @param T Tipo genérico tanto del observer como del evento.
 * @property _observers Lista de observers de tipo T.
 * @method subscribe Subscribe un observer al evento observable.
 * @method unsubscribe Desubscribe un observer del evento observable.
 * @method notify Notifica a los observers del evento.
 * @method onEvent Dado un evento notifica a los observers suscritos.
 */
export class EventObservable<T> implements Observable<T> {
  private _observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    if (this._observers.includes(observer)) {
      throw new Error('Este Observer ya está suscrito');
    } else {
      this._observers.push(observer);
    }
  }

  unsubscribe(observer: Observer<T>): void {
    const index = this._observers.indexOf(observer);
    if (index === -1) {
      throw new Error('Este Observer no ha sido suscrito');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify(event: Event<T>): string {
    this._observers.forEach(observer => observer.update(event));
    return this.observers[0].update(event);
  }

  onEvent(event :Event<T>): string {
    return this.notify(event);
  }

  get observers() {
    return this._observers;
  }
}

/**
 * Clase que representa a un observer de tipo number
 * @method update Notifica la información actualizada del evento observado
 */
export class EventObserverNumber implements Observer<number> {
  update(observable: Event<number>): string {
    const message = `Received event ${observable.name} with data: ${observable.data}`
    console.log(message);
    return message;
  }
}

/**
 * Clase que representa a un observer de tipo string
 * @method update Notifica la información actualizada del evento observado
 */
export class EventObserverString implements Observer<string> {
  update(observable: Event<string>): string {
    const message = `Received event ${observable.name} with data: ${observable.data}`
    console.log(message);
    return message
  }
}

/**
 * Clase que representa a un observer de tipo number[]
 * @method update Notifica la información actualizada del evento observado
 */
export class EventObserverArrayNumber implements Observer<number[]> {
  update(observable: Event<number[]>): string {
    const message = `Received event ${observable.name} with data: ${observable.data}`
    console.log(message);
    return message
  }
}
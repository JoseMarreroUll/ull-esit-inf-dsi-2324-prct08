import 'mocha';
import { expect } from 'chai';

import { Event, EventObservable, EventObserverNumber, EventObserverArrayNumber, EventObserverString } from '../src/mod/event.js';

describe('EventObservable', () => {
  let observer_number1: EventObserverNumber;
  let observer_number2: EventObserverNumber;
  let observer_number3: EventObserverNumber;
  let observer_string1: EventObserverString;
  let observer_string2: EventObserverString;
  let observer_string3: EventObserverString;
  let observer_array_number1: EventObserverArrayNumber;
  let observer_array_number2: EventObserverArrayNumber;
  let observer_array_number3: EventObserverArrayNumber;

  beforeEach(() => {
    observer_number1 = new EventObserverNumber();
    observer_number2 = new EventObserverNumber();
    observer_number3 = new EventObserverNumber();
    observer_string1 = new EventObserverString();
    observer_string2 = new EventObserverString();
    observer_string3 = new EventObserverString();
    observer_array_number1 = new EventObserverArrayNumber();
    observer_array_number2 = new EventObserverArrayNumber();
    observer_array_number3 = new EventObserverArrayNumber();
  });

  it('Debería notificar a 3 observer de tipo number, un evento observable de tipo number', () => {
    const observable = new EventObservable<number>();
    observable.subscribe(observer_number1);
    observable.subscribe(observer_number2);
    observable.subscribe(observer_number3);
    const event: Event<number> = { name: 'evento numérico', data: 100 };
    observable.onEvent(event);
    expect(observable).to.be.instanceOf(EventObservable);
  });
  
    it('Debería notificar a 3 observer de tipo string, un evento observable de tipo string', () => {
      const observable = new EventObservable<string>();
      observable.subscribe(observer_string1);
      observable.subscribe(observer_string2);
      observable.subscribe(observer_string3);
      const event: Event<string> = { name: 'evento string', data: 'hola' };
      observable.onEvent(event);
      expect(observable).to.be.instanceOf(EventObservable);
    });

    it('Debería notificar a 3 observer de tipo number[], un evento observable de tipo number[]', () => {
      const observable = new EventObservable<number[]>();
      observable.subscribe(observer_array_number1);
      observable.subscribe(observer_array_number2);
      observable.subscribe(observer_array_number3);
      const event: Event<number[]> = { name: 'evento array de números', data: [1, 2, 3] };
      observable.onEvent(event);
      expect(observable).to.be.instanceOf(EventObservable);
    });

    it('Debería desuscribir a un observer de tipo number', () => {
      const observable = new EventObservable<number>();
      observable.subscribe(observer_number1);
      observable.subscribe(observer_number2);
      observable.subscribe(observer_number3);
      observable.unsubscribe(observer_number2);
      const event: Event<number> = { name: 'evento numérico', data: 100 };
      observable.notify(event);
      expect(observable).to.be.instanceOf(EventObservable);
    });

    it('Debería dar error al desuscribir un observer que no está suscrito', () => {
      const observable = new EventObservable<string>();
      observable.subscribe(observer_string1);
      observable.subscribe(observer_string2);
      expect(() => observable.unsubscribe(observer_string3)).to.throw('Este Observer no ha sido suscrito');
    });

    it('Debería dar error al suscribir un observer que ya está suscrito', () => {
      const observable = new EventObservable<number[]>();
      observable.subscribe(observer_array_number1);
      observable.subscribe(observer_array_number2);
      expect(() => observable.subscribe(observer_array_number2)).to.throw('Este Observer ya está suscrito');
    });
});
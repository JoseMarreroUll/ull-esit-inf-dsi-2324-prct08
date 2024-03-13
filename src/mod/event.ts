export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event :Event<T>): void;
}

export interface Observer<T> {
  update(observable: Event<T>): void;
}

export interface Event<T> {
  name :string;
  data :T;
}

export class EventObservable<T> implements Observable<T> {
  private observers: Observer<T>[] = [];

  private event: Event<T>;

  subscribe(observer: Observer<T>): void {
    if (this.observers.includes(observer)) {
      throw new Error('Este Observer ya está suscrito');
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('Este Observer no ha sido suscrito');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify(event: Event<T>): void {
    this.observers.forEach(observer => observer.update(event));
  }

  onEvent(event :Event<T>): void {
    this.notify(event);
  }
}

export class EventObserverNumber implements Observer<number> {
  update(observable: Event<number>): void {
    console.log(`Received event ${observable.name} with data: ${observable.data}`);
  }
}

export class EventObserverString implements Observer<string> {
  update(observable: Event<string>): void {
    console.log(`Received event ${observable.name} with data: ${observable.data}`);
  }
}

export class EventObserverArrayNumber implements Observer<number[]> {
  update(observable: Event<number[]>): void {
    console.log(`Received event ${observable.name} with data: ${observable.data}`);
  }
}
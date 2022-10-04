interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Collection {
  createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number> {
  private _collection: Number[];
  private _index: number = 0;

  constructor(newCollection: Number[]) {
    this._collection = newCollection;
  }

  next(): any {
    const result = this._collection[this._index];
    this._index += 1;
    return result;
  }

  hasNext(): boolean {
    return this._index < this._collection.length;
  }
}

class ConcreteCollection implements Collection {
  private _collection: Number[] = [];

  constructor(collection: Number[]) {
    this._collection = collection;
  }

  createIterator(): Iterator<Number> {
    return new ConcreteIterator(this._collection);
  }
}

export function iterator(): void {
  const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);
  const iterator: Iterator<Number> = collection.createIterator();

  while (iterator.hasNext()) {
    const number: Number = iterator.next();
    console.log(`Element: ${number.valueOf()}`);
  }
}

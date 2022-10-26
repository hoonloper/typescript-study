interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get('key');
stringsStorage.set('hi', 'bye');

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx');
booleansStorage.set('hello', false);

interface PersonType<T> {
  [key: string]: T;
}

class Person<T> {
  private person: PersonType<T>;

  getPerson(info: string): T {
    return this.person[info];
  }

  setPerson(key: string, value: T) {
    this.person[key] = value;
  }
}

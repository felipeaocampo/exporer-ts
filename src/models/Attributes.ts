class Attributes<T extends object> {
  constructor(private data: T) {
    this.get = this.get.bind(this);
  }

  get<K extends keyof T>(key: K): T[K] {
    console.log(this.data);
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

export default Attributes;

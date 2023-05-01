interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  ownFetch(id: number): Promise<any>;
  save(data: T): Promise<any>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger(`change`);
  }

  ownFetch(): void {
    const id = this.attributes.get(`id`);

    if (typeof id !== `number`) {
      throw new Error(`Cannot fetch without an id`);
    }

    this.sync.ownFetch(id).then((data: T) => {
      this.attributes.set(data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res) => {
        this.trigger(`save`);
      })
      .catch((err) => {
        console.error(`There was an error!`);
        this.trigger(`error`);
      });
  }
}

export default Model;

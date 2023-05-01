import Eventing from "./Eventing";
import User, { UserProps } from "./User";

class Collection<T, U> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: U) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  ownFetch(): void {
    fetch(this.rootUrl)
      .then((res) => res.json())
      .then((data: U[]) => {
        data.forEach((value: U) => {
          this.models.push(this.deserialize(value));
        });
        this.trigger(`change`);
      });
  }
}

export default Collection;

import Eventing from "./Eventing";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}

export default User;

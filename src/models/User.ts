interface UserProps {
  name: string;
  age: number;
}

class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
}

export default User;

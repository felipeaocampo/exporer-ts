import Model from "./Models";
import Attributes from "./Attributes";
import ApiSync from "./ApiSync";
import Eventing from "./Eventing";
import Collection from "./Collection";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = `http://localhost:3000/users/`;

class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}

export default User;

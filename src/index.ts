import User from "./models/User";

const user = new User({ name: `unknown`, age: 0 });
console.log(user.get(`age`));
user.set({ name: `Felipe`, age: 32 });
console.log(user);

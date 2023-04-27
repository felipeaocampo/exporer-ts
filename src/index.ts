import User from "./models/User";

const user = new User({ name: `Mark`, age: 0 });

// user.set({ name: `NEW NAME`, age: 100 });

// user.save();

user.events.on(`change`, () => console.log(`changed!`));

user.events.trigger(`change`);

// user.on(`change`, () => console.log(`change #1`));
// user.on(`change`, () => console.log(`change #2`));
// user.on(`asdf`, () => console.log(`change #3`));

// user.ownFetch();

// fetch(`http://localhost:3000/users/1`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// setTimeout(() => {
//   console.log(user);
// }, 4000);

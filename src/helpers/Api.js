if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({ id: 1, firstName: "John", lastName: "Doe" })
  );
}

const random = () => Math.floor(Math.random() * 2000) + 1000;

export const loadUser = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      resolve(user);
    }, random());
  });

export const saveUser = user =>
  new Promise(resolve => {
    setTimeout(() => {
      const savedUser = { ...user };
      localStorage.setItem("user", JSON.stringify(savedUser));
      resolve(savedUser);
    }, random());
  });

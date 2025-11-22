const userItems = [
  {
    user_id: 3609,
    name: "John Doe",
    username: "johndoe",
    email: "john@metropolia.fi",
    role: "user",
    password: "password",
  },
  {
    user_id: 3610,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane@metropolia.fi",
    role: "admin",
    password: "password",
  },
  {
    user_id: 3611,
    name: "Bob Johnson",
    username: "bobjohnson",
    email: "bob@metropolia.fi",
    role: "user",
    password: "password",
  },
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((item) => item.user_id === id);
};

const addUser = (user) => {
  const { name, username, email, role, password } = user;
  if (!name || !username || !email || !role || !password) {
    return {};
  }
  const newId = Math.max(...userItems.map((u) => u.user_id)) + 1;
  userItems.unshift({
    user_id: newId,
    name,
    username,
    email,
    role,
    password,
  });
  return { user_id: newId };
};

export { listAllUsers, findUserById, addUser };

import { useReducer, useState } from "react";

const CheckboxOld = () => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    // eslint-disable-next-line no-shadow
    setChecked((checked) => !checked);
  };

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

export const Checkbox = () => {
  // eslint-disable-next-line no-shadow
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

export const User = () => {
  // const [user, setUser] = useState(firstUser);
  // こうすると admin: true 以外のプロパティがなくなる
  // setUser(user, { admin: true });
  // 正しくはこう
  // setUser({ ...user, admin: true });

  // ... だが、useReducer を使うともっと簡単に書ける
  const [user, setUser] = useReducer(
    // eslint-disable-next-line no-shadow
    (user: typeof firstUser, newDetails: Partial<typeof firstUser>) => ({
      ...user,
      ...newDetails,
    }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button onClick={() => setUser({ admin: true })}>Make Admin</button>
    </div>
  );
};

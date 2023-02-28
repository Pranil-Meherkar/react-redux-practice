import React, { useEffect, useState } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from "./../redux/user/userActions";

function UserComponent() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchUsers()), []);
  return (
    <>
      <h2>ASYNC ACTIONS</h2>
      {userData.loading ? (
        <h4>loading text</h4>
      ) : userData.error ? (
        <h4>{userData.error}</h4>
      ) : (
        userData.data.map((user, index) => {
          return <p key={index}>{JSON.stringify(user)}</p>;
        })
      )}
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <button onClick={() => dispatch(postUsers(user))}>Signup</button>
    </>
  );
}

export default UserComponent;

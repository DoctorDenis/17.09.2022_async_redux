import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/operations";

export function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    const userObj = {
      name,
      email,
      phone,
    };
    dispatch(addUser(userObj));
    setEmail("");
    setName("");
    setPhone("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

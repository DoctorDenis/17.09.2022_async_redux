import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/selectors";
import { deleteUser } from "../../redux/operations";
// import { Button } from "../Button/Button";

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  console.log(users);

  function handleDelete(id) {
    dispatch(deleteUser(id));
  }
  return (
    <ul>
      {users &&
        users.map(({ id, name, email, phone }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{phone}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
    </ul>
  );
}

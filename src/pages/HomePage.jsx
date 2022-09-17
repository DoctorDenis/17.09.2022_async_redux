import { UsersList } from "../components/UsersList/UsersList";
import { Button } from "../components/Button/Button";
import { useSelector } from "react-redux";
import { getUsers } from "../redux/selectors";
import { Link } from "react-router-dom";

export function HomePage({ method, clickHandler }) {
  const users = useSelector(getUsers);

  return (
    <>
      <Button text="Fetch users" clickHandler={clickHandler} />
      {users && (
        <>
          <UsersList />
          <Link to="/form">
            <Button text="Add user" />
          </Link>
        </>
      )}
    </>
  );
}

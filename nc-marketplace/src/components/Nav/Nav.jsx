import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {useContext} from 'react'

const Nav = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <Link to ="/">Home</Link><br></br>
      <Link to="/sell-item">Sell Item</Link>
      <br></br>
      <Link to="/create-user">Create User</Link>
      <br></br>
      <Link to="/users">Users</Link><br></br>
      {loggedInUser !== null ? (
        <Link to={`/users/${loggedInUser.username}/basket`}>Basket</Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
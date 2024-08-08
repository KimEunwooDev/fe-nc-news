import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import { useState } from "react";

const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setLoggedInUser(user);
  };
  return (
    <div className="user-card">
      <h4>{user.username}</h4>
      <img src={user.avatar_url} className="user-umg" />
      <p className="login-button">
        <button onClick={loginHandler}>Log in</button>
      </p>
    </div>
  );
};

export default UserCard;

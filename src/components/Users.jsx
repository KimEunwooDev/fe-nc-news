import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      const userData = users;
      setUsers(userData);
    });
  }, []);
  return (
    <div className="users-list">
      <h3>Select Your Account</h3>
      <h4>Logged In User : {loggedInUser.username}</h4>
      {users.map((user) => {
        return (
          <>
            <section>
              <UserCard key={user.username} user={user} />
            </section>
          </>
        );
      })}
    </div>
  );
};

export default Users;

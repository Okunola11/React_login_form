import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {
      //let isMounted = true;
      //const controller = new AbortController();

      const getUsers = async () => {
        try {
          const response = await axiosPrivate.get(
            "/users" /* {
            signal: controller.signal,
          } */
          );
          const userName = response.data.map((user) => user.username);
          console.log(response.data);
          /* isMounted && */ setUsers(userName);
        } catch (err) {
          console.error(err);
          // To sends the user to login page once the refreshToken expires and return them back to the page they were
          // This runs with the navigate route already PUT in login page.
          navigate("/login", { state: { from: location }, replace: true });
        }
      };
      getUsers();
    }

    return () => {
      effectRan.current = true;
      //isMounted = false;
      ///* isMounted && */ controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No user to display</p>
      )}
    </article>
  );
};

export default Users;

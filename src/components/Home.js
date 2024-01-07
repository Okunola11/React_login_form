import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useLogoutAll from "../hooks/useLogoutAll";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const logoutAll = useLogoutAll();

  const signOut = async () => {
    //This should be in Context if used in more than one component
    //Axios for log out
    await logout();

    navigate("/linkpage");
  };

  const signOutAll = async () => {
    await logoutAll();
    navigate("/linkpage");
  };
  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Go to Editor's page</Link>
      <br />
      <Link to="/admin">Go to Admin's page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the Link Page</Link>
      <div className="flexGrow">
        <button onClick={signOut}>Sign Out</button>
        <button onClick={signOutAll}>Sign Out All</button>
      </div>
    </section>
  );
};

export default Home;

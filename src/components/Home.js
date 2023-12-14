import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const logOut = () => {
    //This should be in Context if used in more than one component
    //Axios for log out
    setAuth({});
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
        <button onClick={logOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default Home;

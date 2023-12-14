import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section>
      <h1>Link Page</h1>
      <h2>Public Links</h2>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <br />
      <h2>Private Links</h2>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor's Page</Link>
      <Link to="/admin">Admin Page</Link>
    </section>
  );
};

export default LinkPage;

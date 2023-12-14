import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section>
      <h1>Admin's Page</h1>
      <br />
      <p>You have been assigned an Admin's role.</p>
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;

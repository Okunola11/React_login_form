import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <br />
      <p>The page doesn't exist</p>
      <div className="flexGrow">
        <Link to="/">Visit our Homepage</Link>
      </div>
    </article>
  );
};

export default Missing;

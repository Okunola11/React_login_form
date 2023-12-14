import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <h1>Editor's Page</h1>
      <br />
      <p>You have been assigned the role of Editor.</p>
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Editor;

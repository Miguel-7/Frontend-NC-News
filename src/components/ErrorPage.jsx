import { Link } from "react-router-dom";

export default function ErrorPage({ status, msg }) {
  status = status || "404";
  return (
    <main>
      <h3>
        {status}: {msg || "Opps, looks like you're lost."}
      </h3>
      <Link to="/articles">Back to Main Page</Link>
    </main>
  );
}

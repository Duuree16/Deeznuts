import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/addlist" style={{ textDecoration: "none" }}>
        <Button variant="outline-light">Create New Playlist</Button>
      </Link>
    </header>
  );
};

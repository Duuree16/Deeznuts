import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Auth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const Header = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/addlist" style={{ textDecoration: "none" }}>
        <Button variant="outline-light">Create New Playlist</Button>
      </Link>
      {authUser ? (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button variant="outline-light">{authUser.username}</Button>
        </Link>
      ) : (
        <Link to="/account/signup" style={{ textDecoration: "none" }}>
          <Button variant="outline-light">Sign Up</Button>
        </Link>
      )}
    </header>
  );
};

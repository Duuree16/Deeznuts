import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { DataContext } from "../Providers/DataProvider";
import styles from "./Designs/design.module.css";

export const AddList = () => {
  const { playlistData, setPlaylistData } = useContext(DataContext);
  const { authUser } = useContext(AuthContext);
  const nameref = useRef();
  const navigator = useNavigate();
  const descripref = useRef();
  const onAdd = () => {
    if (nameref.current.value) {
      axios
        .post("http://localhost:3001/lists", {
          title: nameref.current.value,
          CreatorName: authUser.username,
          creator: authUser._id,
          description: descripref.current.value,
        })
        .then((res) => {
          setPlaylistData([...playlistData, res.data]);
          navigator("/library");
        });
    } else {
      alert("fill them bro");
    }
  };

  if (authUser) {
    return (
      <div className={styles.addOut}>
        <h3>Create a New Playlist</h3>
        <input
          ref={nameref}
          placeholder="Playlist name"
          className={styles.addlistname}
        />
        <input
          ref={descripref}
          placeholder="Description"
          className={styles.addlistname}
        />
        <button onClick={onAdd} className={styles.addbutton}>
          Add List
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.addOut}>
        <h3>Login pls</h3>
      </div>
    );
  }
};

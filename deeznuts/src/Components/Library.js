import { useContext } from "react";
import "../App.css";
import { DataContext } from "../Providers/DataProvider";
import { List } from "./Lists";
import { AuthContext } from "../Providers/AuthProvider";

export const Library = () => {
  const { playlistData } = useContext(DataContext);
  const { authUser } = useContext(AuthContext);

  // console.log(playlistData);
  if (authUser) {
    return (
      playlistData && (
        <div className="display">
          {playlistData.map(
            (el, ind) =>
              el.creator === authUser._id && (
                <List
                  creator={el.CreatorName}
                  key={el._id}
                  _id={el._id}
                  title={el.title}
                />
              )
          )}
        </div>
      )
    );
  } else {
    return (
      <div className="display">
        <h2>You are not logged in</h2>
      </div>
    );
  }
};

import { useContext } from "react";
import "../App.css";
import { DataContext } from "../Providers/DataProvider";
import { List } from "./Lists";

export const Library = () => {
  const { playlistData } = useContext(DataContext);

  console.log(playlistData);
  return (
    playlistData && (
      <div className="display">
        {playlistData.map((el, ind) => (
          <List
            creator={el.CreatorName}
            key={el._id}
            _id={el._id}
            title={el.title}
          />
        ))}
      </div>
    )
  );
};

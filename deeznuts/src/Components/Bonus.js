import { useContext } from "react";
import "../App.css";
import { DataContext } from "../Providers/DataProvider";
import { Song } from "./Song";
import styles from "./Designs/design.module.css";

export const Bonus = () => {
  const { songData } = useContext(DataContext);

  return (
    <div className={styles.addOut}>
      <h2>Explore Songs</h2>
      {songData &&
        songData.map((El, Ind) => {
          return <Song element={El} index={Ind} />;
        })}
    </div>
  );
};

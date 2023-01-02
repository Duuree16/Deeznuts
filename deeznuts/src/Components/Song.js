import styles from "./Designs/design.module.css";

export const Song = ({ element, index }) => {
  return (
    <div className={styles.singleSong}>
      {index != NaN && <h5 className={styles.num}>{index + 1}.</h5>}
      <div>
        <h6 className={styles.songname}>{element.name}</h6>
        <p className={styles.arter}>{element.artist.name}</p>
      </div>
    </div>
  );
};

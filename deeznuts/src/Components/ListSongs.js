import { useParams } from "react-router-dom";
import styles from "./Designs/design.module.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Song } from "./Song";
import { DataContext } from "../Providers/DataProvider";

export const ListSongs = (props) => {
  const parama = useParams();
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const { songData, setPlaylistData } = useContext(DataContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/list/" + parama.id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToPlaylist = (songId) => {
    console.log(songId, parama.id);
    axios
      .put(`http://localhost:3001/list/${songId}?playlistId=${parama.id}`)
      .then(() => {
        axios
          .get("http://localhost:3001/list/" + parama.id)
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  return (
    data && (
      <div className={styles.ListSong}>
        <h2 className={styles.Title}>{data.title}</h2>
        <h4 className={styles.Title}>from {data.CreatorName}</h4>
        {data.songs.map((element, index) => (
          <Song element={element} index={index} />
        ))}
        <h4 className={styles.Title}>Add Something To Your Playlist</h4>
        <input
          onChange={(e) => {
            return setSearch(e.target.value);
          }}
          placeholder="Description"
          className={styles.addlistname}
        />
        {songData &&
          songData.map((element, index) => {
            if (search) {
              return (
                (element.name.toLowerCase().includes(search.toLowerCase()) ||
                  element.artist.name
                    .toLowerCase()
                    .includes(search.toLowerCase())) && (
                  <div className={styles.stiker}>
                    <Song element={element} index={index} />
                    <button
                      onClick={() => addToPlaylist(element._id)}
                      className={styles.addbutton2}
                    >
                      Add to playList
                    </button>
                  </div>
                )
              );
            }
          })}
      </div>
    )
  );
};

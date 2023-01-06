import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [playlistData, setPlaylistData] = useState();
  const [songData, setSongData] = useState();
  useEffect(() => {
    axios.get("https://goy-tea.onrender.com/lists").then((response) => {
      setPlaylistData(response.data);
    });
    axios.get("https://goy-tea.onrender.com/songs").then((response) => {
      setSongData(response.data);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        playlistData,
        setPlaylistData,
        songData,
        setSongData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

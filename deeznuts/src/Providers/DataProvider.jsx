import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [playlistData,setPlaylistData] = useState()
    
    useEffect(() => {
      axios.get('http://localhost:3001/lists').then((response) => {
        setPlaylistData(response.data)
      })
    }, [])

    return (
        <DataContext.Provider
          value={{
            playlistData,
            setPlaylistData
          }}
        >
          {props.children}
        </DataContext.Provider>
      );
}
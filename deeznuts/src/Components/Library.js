import { useContext, useEffect, useState } from "react";
import "../App.css"
import { Playlist } from "./Playlist"
import "axios"
import axios from "axios";
import { DataContexts } from "./DataContext";


export const Library = () => {
    const [data, setData] = useState([]);
    const infos = useContext(DataContexts)
    console.log(infos)
    useEffect(() => {
        (async () => {
          const response = await axios.get(
            `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists`
          );
    
          setData(response.data);
        })();
      }, []);

    return <div className="display">
        {
            data.map((el,ind) => {
                return <Playlist id={ind} name={el.listName} maker={el.userId.name} votes={el.totalVote} key={'' + ind + el.listName}></Playlist>
            })
        }
        
    </div>
}
import { useEffect, useState } from "react";
import "../App.css"
import { Playlist } from "./Playlist"
import "axios"
import axios from "axios";


export const Library = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get(
            `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists`
          );
    
          console.log(response.data);
          setData(response.data);
        })();
      }, []);

    return <div className="display">
        {
            data.map((el,ind) => {
                return <Playlist id={ind} name={el.listName} votes={el.totalVote}></Playlist>
            })
        }
        
    </div>
}
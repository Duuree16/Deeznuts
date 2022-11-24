import img from "../images/Playlist.svg"
import "../App.css"
import { Link } from "react-router-dom"

export const Playlist = (props) => {
    return <div className="Outer">
        <img src={img} className='playimg'/>
        <Link to={`/playlist/${props.id + 1}`} style={{textDecoration: 'none'}}>
            <h4 className="playName">{props.name}</h4>
        </Link>
        <h5 className="playArtist">Votes: {props.votes}</h5>
    </div>
}
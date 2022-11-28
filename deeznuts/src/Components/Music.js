import '../App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { BsPlay } from 'react-icons/bs'

export const Music = (props) => {
  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists`,
      )
    })()
  }, [])
  return (
    <div className="piece">
      <div className="piece1">
        <h5 style={{ padding: '5px', width: '30px' }}>{props.id + 1}.</h5>
        <BsPlay className="icon"></BsPlay>
      </div>
      <div className="divider">
        <div>
          <h6>{props.name}</h6>
          <p className="artist">{props.artist}</p>
        </div>
        <button className='btnUpdate'>Update</button>
      </div>
    </div>
  )
}

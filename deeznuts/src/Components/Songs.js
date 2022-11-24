import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Music } from './Music'

export const Songs = () => {
  const [data, setData] = useState(null)
  const params = useParams()
  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists`,
      )

      console.log(response.data)
      setData(response.data)
    })()
  }, [])
  return (
    <div>
       .      Playlist #{params.number}
      <br/>
      {data !== null && data[params.number - 1].songs.map((el, ind) => {
        <Music name={el.name} artist={el.artist} id={ind}></Music>
      })
      }
    </div>
  )
}

import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const Header = () => {
  const updatePlaylist = async () => {
    const res = await axios.put(
      `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists/23`,
      { songs: [{ id: '6969', name: 'Hotline Bling', link: 'songLink', artist: 'Drake' }, { id: '6969', name: 'Spinnin`', link: 'songLink', artist: 'Connor Price' }, { id: '6969', name: 'Mockingbird', link: 'songLink', artist: 'Eminem' }] },
    )
    console.log(res)
  }

  return (
    <header className="header">
      <Button variant="outline-light" onClick={updatePlaylist}>
        Sub to Pewdiepie
      </Button>
    </header>
  )
}

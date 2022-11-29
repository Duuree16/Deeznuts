import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const Header = () => {
  const updatePlaylist = async () => {
    const res = await axios.put(
      `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/17/playlists`,
      {songs:{ artist: 'Drake', id: '6969', link: 'songLink', name: 'Hotline Bling',cardon:'temka' }},
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

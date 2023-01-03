import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './Auth'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'

export const Header = () => {
  const { setUserId, userId, setAuthUser } = useContext(AuthContext)
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logged out')
        setUserId('')
        setAuthUser(null)
      })
      .catch((error) => {})
  }
  return (
    <header className="header">
      <Link to="/addlist" style={{ textDecoration: 'none' }}>
        <Button variant="outline-light">Create New Playlist</Button>
      </Link>
      {userId ? (
        <Button variant="outline-light" onClick={logout}>
          Log Out
        </Button>
      ) : (
        <Link to="/account/signup" style={{ textDecoration: 'none' }}>
          <Button variant="outline-light">Sign Up</Button>
        </Link>
      )}
    </header>
  )
}

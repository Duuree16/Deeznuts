import { Link } from 'react-router-dom'
import logo from '../images/Group 29.svg'
export const Sidebar = () => {
  return (
    <div className="SideBar">
      <img src={logo} className="Logo" />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h4 className="option">Home</h4>
      </Link>
      <Link to="/search" style={{ textDecoration: 'none' }}>
        <h4 className="option">Search</h4>
      </Link>
      <Link to="/library" style={{ textDecoration: 'none' }}>
        <h4 className="option">My playlists</h4>
      </Link>
      <Link to="/bonus" style={{ textDecoration: 'none' }}>
        <h4 className="option">Explore</h4>
      </Link>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <h4 className="option">Your Account</h4>
      </Link>
    </div>
  )
}

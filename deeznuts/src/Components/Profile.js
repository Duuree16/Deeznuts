// import styles from './Designs/design.module.css'
import { Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { auth } from './Auth'
import { AuthContext } from '../Providers/AuthProvider'
import { useContext } from 'react'
export const Profile = () => {
  const { userId, setUserId, authUser, setAuthUser } = useContext(AuthContext)
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
    <>
      {userId && (
        <>
          <br />
          <h3 className="profile">Username: {authUser && authUser.username}</h3>
          <br />
          <Button onClick={logout} variant="secondary">
            Log out
          </Button>
        </>
      )}{' '}
      {!userId && <h3>You're not even logged in lmao</h3>}
    </>
  )
}

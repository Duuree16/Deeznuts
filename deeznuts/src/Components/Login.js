import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Designs/design.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Button } from 'react-bootstrap'
import { auth } from './Auth'
import axios from 'axios'
export const Login = () => {
  const navigate = useNavigate()

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <div className={styles.addOut}>
      <br />
      <h3>Log In</h3>
      <br />
      <label>Email</label>
      <input
        className={styles.addlistname}
        onChange={(e) => setMail(e.target.value)}
        placeholder="mail"
      />
      <label>Password</label>
      <input
        type={'password'}
        className={styles.addlistname}
        onChange={(e) => setPass(e.target.value)}
        placeholder="pass"
      />
      <br />
      <Button variant="dark" onClick={onSubmit}>
        Create Account
      </Button>
      <br />
      <br />

      <p>
        Don't have an account? Then go to{' '}
        <Link to="/account/signup">Sign Up </Link>
        page you sucker.
      </p>
    </div>
  )
}

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Designs/design.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button } from 'react-bootstrap'
import { auth } from './Auth'
import axios from 'axios'
export const SignUp = () => {
  const navigate = useNavigate()

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        axios
          .post('http://localhost:3001/users', {
            username: name,
            firebaseId: user.uid,
            email: user.email,
          })
          .then((res) => {
            console.log(res.data)
          })
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
      <h3>Sign Up</h3>
      <br />
      <label>Kimi No Nawa</label>
      <input
        className={styles.addlistname}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
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
        Already have an account? Go to <Link to="/account/login">Login</Link>{' '}
        page
      </p>
    </div>
  )
}

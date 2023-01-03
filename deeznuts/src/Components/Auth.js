import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCyWWI-LHdQkoWzOdk2q3xJADKZUddJUGA',
  authDomain: 'mocj-71645.firebaseapp.com',
  projectId: 'mocj-71645',
  storageBucket: 'mocj-71645.appspot.com',
  messagingSenderId: '938912691850',
  appId: '1:938912691850:web:76573641d7636b3adc9f73',
  measurementId: 'G-GMZRH6RYXK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }

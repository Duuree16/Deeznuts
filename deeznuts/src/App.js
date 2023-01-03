import './App.css'
import {
  Header,
  Home,
  Library,
  Bonus,
  Search,
  Sidebar,
  ListSongs,
  AddList,
  SignUp,
  Login,
  Profile,
} from './Components'
import { DataProvider } from './Providers/DataProvider'
import { AuthProvider } from './Providers/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Sidebar />
            <div className="Container">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/bonus" element={<Bonus />} />
                <Route path="/playlist/:id" element={<ListSongs />} />
                <Route path="/account/signup" element={<SignUp />} />
                <Route path="/account/login" element={<Login />} />
                <Route path="/addlist" element={<AddList />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  )
}

export default App

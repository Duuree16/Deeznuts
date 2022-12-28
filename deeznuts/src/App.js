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
} from './Components'
import { DataProvider } from './Providers/DataProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
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
              <Route path="/addlist" element={<AddList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App

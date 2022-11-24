import './App.css';
import { Header ,Home,Library,Bonus,Search, Sidebar,Songs} from './Components';

import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>




    <div className="App">
      <Sidebar/>
      <div className="Container">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/bonus' element={<Bonus/>}/>
          <Route path='/playlist'>
          <Route path=":number" element={<Songs />} />
          </Route>
        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import List from './List'
import { BrowserRouter, Routes,Route, Link, Outlet,} from "react-router-dom";
import NavBar from './NavBar'
import AboutApp from "./AboutApp"
import Info from "./Info"

function App(){
    return(
        <BrowserRouter>
        <header className="nav-link">
          <NavBar/>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/About" element={<AboutApp/>}/>
            <Route path="/Info" element={<Info/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
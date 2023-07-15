import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";

import Characters from "./pages/Characters";
import CharactersDetails from "./pages/CharactersDetails";
import Films from "./pages/Films";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Startships";
import Vehicles from "./pages/Vehicles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="Navbar-container">
      <BrowserRouter>
        <nav className="NavBar">
          <h1><Link to="/">Star Wars Wiki</Link></h1>
          <ul>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/planets">Planets</Link></li>
            <li><Link to="/species">Species</Link></li>
            <li><Link to="/starships">Starships</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:charID' element={<CharactersDetails />} />
          <Route path='/films' element={<Films />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/species' element={<Species />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/vehicles' element={<Vehicles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

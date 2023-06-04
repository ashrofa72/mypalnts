import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Searchplant from "./pages/Searchplant";
import Potnumname from "./pages/Potnumname";
import Info from "./pages/Info"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>My Plants Room</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Feeding</Link>
        <Link to='/potnumname'>Pots Number</Link>
        <Link to='/info'>Feed Info</Link>
        <Link to="/searchplant">Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/potnumname" element={<Potnumname/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/searchplant" element={<Searchplant/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

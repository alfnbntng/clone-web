import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kaos from "./pages/Kaos";
import Shirt from "./pages/Shirt";
import Sweater from "./pages/Sweater";
import Jacket from "./pages/Jacket";
import Poloshirt from "./pages/Poloshirt";
import Pants from "./pages/Pants";
import Accressories from "./pages/Accressories";
import Pistols from "./pages/Pistols";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Kaos />} />
        <Route path="/shirt" element={<Shirt />} />
        <Route path="/sweater" element={<Sweater />} />
        <Route path="/jacket" element={<Jacket />} />
        <Route path="/poloshirt" element={<Poloshirt />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/accesories" element={<Accressories />} />
        <Route path="/thesexpistolsedition" element={<Pistols />} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

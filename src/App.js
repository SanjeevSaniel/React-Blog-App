import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Bollywood from "./components/pages/Bollywood";
import Technology from "./components/pages/Technology";
import Hollywood from "./components/pages/Hollywood";
import Fitness from "./components/pages/Fitness";
import Food from "./components/pages/Food";
import Error from "./components/pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="/Bollywood" element={<Bollywood />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
          <Route path="/Hollywood" element={<Hollywood />}></Route>
          <Route path="/Fitness" element={<Fitness />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

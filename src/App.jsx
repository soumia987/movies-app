// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componnents/Navbar";
import Footer from "./Componnents/Footer";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
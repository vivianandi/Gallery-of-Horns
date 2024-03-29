import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HornedBeast.css';
import beasts from './data.json'; // Import the 'beasts' array from data.json

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleShow = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="main-container">
      <Header />
      <Gallery beasts={beasts} handleShow={handleShow} />
      <SelectedBeast show={showModal} handleClose={handleClose} selectedBeast={selectedBeast} />
      <Footer />
    </div>
  );
}

export default App;

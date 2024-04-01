import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HornedBeast.css';
import beasts from './data.json';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [selectedHorns, setSelectedHorns] = useState(null);

  const handleShow = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleHornsChange = (e) => {
    setSelectedHorns(parseInt(e.target.value));
  };

  // Filter beasts based on selected number of horns
  const filteredBeasts = selectedHorns ? beasts.filter(beast => beast.horns === selectedHorns) : beasts;

  return (
    <div className="main-container">
      <Header />
      <Form.Group controlId="formSelectHorns">
        <Form.Label>Select number of horns:</Form.Label>
        <Form.Control as="select" onChange={handleHornsChange}>
          <option value="">All</option>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          {/* Add more options for different numbers of horns */}
        </Form.Control>
      </Form.Group>
      <Gallery beasts={filteredBeasts} handleShow={handleShow} />
      <SelectedBeast show={showModal} handleClose={handleClose} selectedBeast={selectedBeast} />
      <Footer />
    </div>
  );
}

export default App;

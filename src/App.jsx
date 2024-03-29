import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

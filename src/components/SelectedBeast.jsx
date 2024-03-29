// SelectedBeast.jsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function SelectedBeast({ show, handleClose, selectedBeast }) {
  if (!selectedBeast) {
    return null;
  }

  const { title, imageUrl, description } = selectedBeast;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;

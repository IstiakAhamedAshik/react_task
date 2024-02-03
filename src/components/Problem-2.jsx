import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import AllContacts from './AllContacts'
import UsContact from './UsContact'

const Problem2 = () => {
  const [show, setShow] = useState({
    state: false,
    id: null,
  })

  const handleClose = () =>
    setShow({
      state: false,
      id: null,
    })
  const handleShow = (value) =>
    setShow({
      state: true,
      id: value,
    })
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
        <div className='d-flex justify-content-center gap-3'>
          <button
            onClick={() => handleShow(1)}
            className='btn btn-lg btn-outline-primary modal-a'
            type='button'
          >
            All Contacts
          </button>
          <button
            onClick={() => handleShow(2)}
            className='btn btn-lg btn-outline-warning modal-b'
            type='button'
          >
            US Contacts
          </button>
        </div>
      </div>

      {/* modal  */}
      <Modal show={show.state && show.id === 1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AllContacts />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='close-btn'
            variant='secondary'
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show.state && show.id === 2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Us Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UsContact />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Problem2

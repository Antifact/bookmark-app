import { React, useState } from 'react';
import { useLinksContext } from '../hooks/useLinksContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const EnterLink = () => {
  const { dispatch } = useLinksContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [icon, setIcon] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const link = {title, url, icon};

    const response = await fetch('/api/links', {
      method: 'POST',
      body: JSON.stringify(link),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json()

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle('');
      setUrl('');
      setIcon('');
      setError(null);
      console.log('new link added', json);
      dispatch({type: 'CREATE_LINK', payload: json});
      handleClose();
    }
  }


  return (
    <div className='text-center new-link-button'>

      <Button variant='outline-primary' onClick={handleShow} className='text-center'>
        Add New Link
      </Button>

      <Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Link Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="url-input mb-3 p-1">
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Title" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formURL">
            <Form.Label>Enter URL</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="URL" 
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formIcon">
            <Form.Label>Upload Icon</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Icon" 
              onChange={(e) => setIcon(e.target.value)}
              value={icon}
              />
          </Form.Group>

            {/* <Form.Group controlId="formIcon" className="mb-3">
              <Form.Label>Upload Icon</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setIcon(e.target.value)}
                value={icon}
                />
            </Form.Group> */}

          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add Link
          </Button>
        </Modal.Footer>

        {error && <div className='error'>{error}</div>}
      </Modal>
      </Form>
    </div>
  );
}

export default EnterLink;
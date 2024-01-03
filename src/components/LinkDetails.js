import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useLinksContext } from '../hooks/useLinksContext';

const LinkDetails = ({ link }) => {
  const { dispatch } = useLinksContext();

  const handleClick = async () => {
    const response = await fetch('/api/links/' + link._id, {
      method: 'DELETE'
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_LINK', payload: json })
    }
  }

  return (
    <Row className='m-1 p-2 link'>
      <Col>
        <img src={link.icon} alt='link icon' className='link-icon' /> <a href={link.url}>{link.title}</a>
        <button type="button" class="btn-close" aria-label="Close" onClick={handleClick}></button>
      </Col>
    </Row>
  )
}

export default LinkDetails;
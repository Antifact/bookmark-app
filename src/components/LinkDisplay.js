import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import EnterLink from '../components/EnterLink';
import LinkDetails from './LinkDetails';
import { useLinksContext } from '../hooks/useLinksContext';



const LinkDisplay = () => {
  const {links, dispatch} = useLinksContext();

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch('/api/links')
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_LINKS', payload: json});
      }
    }

    fetchLinks();
  }, []);

  return (
      <Container className='p-2 bg-light link-container'>
        <EnterLink />
        <div className='link-list'>
          {links && links.map((link) => (
              <LinkDetails key={link._id} link={link}/>
            ))}
        </div>
      </Container>
  );
}

export default LinkDisplay;
import React from 'react';
import Container from 'react-bootstrap/Container';
// import LinkForm from '../components/Form';
// import EnterLink from '../components/EnterLink';
import LinkDisplay from '../components/LinkDisplay';


const Home = () => {
  return (
    <>
      <Container className="p-3 mb-4 rounded-3">
        {/* <LinkForm /> */}
        {/* <EnterLink /> */}
        <LinkDisplay />
      </Container>
    </>
  );
}

export default Home;
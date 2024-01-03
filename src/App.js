import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';


const App = () => (
  <div className='App'>
    <BrowserRouter>
    <NavBar />
    <Container className="p-3">
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        />
      </Routes>
      </Container>
    </BrowserRouter>
  </div>
  
);

export default App;



// import './App.css';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

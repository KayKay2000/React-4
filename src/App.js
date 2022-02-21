import './App.css';
import { Heading, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Oneplayer from './Pages/Oneplayer';
import Twoplayer from './Pages/Twoplayer';
import Instructions from './Pages/Instructions';

function App() {
  return (
    <div className="page">
      <Flex p={10} bg='rgb(41	44	51)	' color="rgb(130	215	247	)" justify="center" direction="column">
        <Heading size='4xl' textAlign="center" justify="center" ><img src="../logo192.png" alt="react logo" width="50px" /><Link to="/">React 4</Link></Heading>
          <ul className="links">
            <li><Link to="/instructions" >Instructions</Link></li>
            <li><Link to="/single-player" >Single Player</Link></li>
            <li><Link to="/two-player">Two Player</Link></li>
          </ul>

      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/single-player" element={<Oneplayer />} />
        <Route path="/two-player" element={<Twoplayer />} />
      </Routes>
    </div>

    
      
  );
}

export default App;

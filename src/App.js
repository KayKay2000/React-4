import './App.css';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Oneplayer from './Pages/Oneplayer';
import Twoplayer from './Pages/Twoplayer';

function App( {}) {
  return (
    <div className="page">
      <Flex p={10} bg='rgb(51	75	247)	' color="rgb(255	207	0	)" justify="center" direction="column">
        <Heading size='4xl' textAlign="center" ><Link to="/">Connect 4</Link></Heading>
          <ul className="links">
            <li><Link to="/singleplayer" >Single Player</Link></li>
            <li><Link to="/twoplayer">Two Player</Link></li>
          </ul>

      </Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer" element={<Oneplayer />} />
        <Route path="/twoplayer" element={<Twoplayer />} />
      </Routes>
    </div>

    
      
  );
}

export default App;

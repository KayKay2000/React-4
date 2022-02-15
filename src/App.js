import './App.css';
import { Heading, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Oneplayer from './Pages/Oneplayer';
import Twoplayer from './Pages/Twoplayer';

function App( {}) {
  return (
    <div className="page">
      <Box p={10} bg='black' color="white">
        <Heading size='4xl' textAlign="center" ><Link to="/">Connect 4</Link></Heading>
          <Link to="/singleplayer" >Single Player</Link>
          <Link to="/2player">2 Player</Link>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleplayer" element={<Oneplayer />} />
        <Route path="/twoplayer" element={<Twoplayer />} />
      </Routes>
    </div>

    
      
  );
}

export default App;

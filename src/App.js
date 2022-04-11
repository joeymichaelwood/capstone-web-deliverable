import './App.css';
import styled from "styled-components"
import Introduction from './Introduction';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutUs from './AboutUs';
import Data from './Data';
import TechnicalApproach from './TechnicalApproach';

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #282c34;
  color: white;
  height: 3em;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
`

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/introduction">Introduction</Link>
              <Link to="/data">Data</Link> 
              <Link to="/technical">Technical Approach</Link> 
              <Link to="/team">Team</Link>
            </Navigation> 
        </nav>
        <Routes>
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/data" element={<Data />}/>
          <Route path="/technical" element={<TechnicalApproach />}/>
          <Route path="/team" element={<AboutUs />} />
          <Route path="/" element={<HomeScreen />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

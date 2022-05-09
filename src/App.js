import './App.css';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
// import Sidebar from './components/SideBar'
import house from './components/images/house.jpg'
function App() {
    return (
      <Router>
        <Navbar />
      <div>
        <img src ={house} alt="sample estate"/>
      </div>
      </Router>

  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/SideBar'
import house from './components/images/image1.jpg'
function App() {
    return (
      <Router>
        <Navbar />
        <Sidebar />
      <div>
        <img src ={house} alt="sample estate" class="center"/>
      </div>
      </Router>

  );
}

export default App;

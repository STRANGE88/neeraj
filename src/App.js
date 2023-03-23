import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Ssss from './components/Ssss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addst from './components/Addst';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/read' element={<Read></Read>} />
    <Route path='/ssss' element={<Ssss></Ssss>} />
    <Route path='/add' element={<Addst data={{id:"",name:"",grade:""}} 
    method="post"></Addst> } />
    
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

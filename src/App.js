import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReg from './components/AddReg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddReg/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReg from './components/AddReg';
import ViewUsers from './components/ViewUsers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddReg/>}/>
        <Route path='/view' element={<ViewUsers/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

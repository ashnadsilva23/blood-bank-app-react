import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddReg from './components/AddReg';
import ViewUsers from './components/ViewUsers';
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddReg/>}/>
        <Route path='/view' element={<ViewUsers/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

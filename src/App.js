import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Success from './Pages/Success';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/success' element={<ProtectedRoute element={<Success/>}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

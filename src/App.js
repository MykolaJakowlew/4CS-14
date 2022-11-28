import './App.css';
import LoginPage from './components/login';
import MainPage from './components/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

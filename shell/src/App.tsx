import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShellPage } from './pages'
import { HomePage } from './pages/home';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<ShellPage />} />
        <Route path='/home/*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

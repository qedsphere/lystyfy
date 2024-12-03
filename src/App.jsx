import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 
import { PlaylistProvider } from './contexts/PlaylistContext';
import { OrganizedPlaylistProvider } from './contexts/OrganizedContext';
import Callback from "./components/pages/login/Callback"
import LoginPage from './components/pages/login/LoginPage'
import Home from './components/pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <OrganizedPlaylistProvider>
    <PlaylistProvider>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
    </PlaylistProvider>
    </OrganizedPlaylistProvider>
    
  );
}

export default App

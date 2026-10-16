import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserGuidePage from './pages/UserGuidePage';

// Marcador de posición: en esta versión reducida no hay backend.
function NoBackend() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '80px 20px' }}>
      <h2>Demo sin backend</h2>
      <p>Esta versión reducida solo incluye la landing y la guía de usuario.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user-guide" element={<UserGuidePage />} />
      <Route path="/login" element={<NoBackend />} />
      <Route path="/register" element={<NoBackend />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

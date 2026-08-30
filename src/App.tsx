import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from './components/Game';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
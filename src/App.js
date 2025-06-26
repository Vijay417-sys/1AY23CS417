import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortenerPage from './components/ShortenerPage';
import StatsPage from './components/StatsPage';
import RedirectHandler from './components/RedirectHandler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortCode" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListPage from './pages/ListPage';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // замените на свой главный компонент
import MemesPage from "./MemesPage"; // мы создадим этот компонент

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memes" element={<MemesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

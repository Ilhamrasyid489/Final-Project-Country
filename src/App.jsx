import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CompareForm from "./components/CompareForm"; // Tambahkan CompareForm
import ComparePage from "./pages/ComparePage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compare" element={<CompareForm />} />{" "}
        <Route path="/compare/result" element={<ComparePage />} />{" "}
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CompareForm from "../components/CompareForm";
import ComparePage from "../pages/ComparePage";
import LandingPage from "../pages/LandingPage";
import NewsPage from "../pages/NewsPage";

const AppRoutes = () => {
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
};

export default AppRoutes;

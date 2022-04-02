import React, { lazy, Suspense } from "react";
import "./resources/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shares from "./pages/Shares";
import About from "./pages/About";
const Home = lazy(() => import("./pages/Home"));

const Loading = () => (
  <div className="text-gray-400 flex flex-col text-center items-center justify-center">
    <div className="my-auto h-32 mt-52">LOADING</div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="shares" element={<Shares />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

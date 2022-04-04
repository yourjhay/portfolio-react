import React, { lazy, Suspense } from "react";
import "./resources/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shares from "./pages/Shares";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import AuthProvider from "./context/AuthContext";
import RequiredAuth from "./utils/RequiredAuth";
import NewShare from "./pages/NewShare";
const Home = lazy(() => import("./pages/Home"));

const Loading = () => (
  <div className="text-gray-400 flex flex-col text-center items-center justify-center">
    <div className="my-auto h-32 mt-52">LOADING</div>
  </div>
);

const App = () => {
  return (
    <main>
      <AuthProvider>
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
            <Route path="shares" element={<Shares />}></Route>
            <Route
              path="share/new"
              element={
                <RequiredAuth>
                  <NewShare />
                </RequiredAuth>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
};

export default App;

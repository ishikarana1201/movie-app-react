import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import "./App.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

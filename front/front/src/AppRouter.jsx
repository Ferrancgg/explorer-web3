import React from "react";
import Home from "./pages/Home/Home";
import Explorer from "./pages/Explorer/Explorer";
import { Routes, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/explorer" element={<Explorer />} />
    </Routes>
  );
};

export default AppRouter;

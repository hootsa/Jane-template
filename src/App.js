import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Main from "./components/Main";
import "./index.css";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./components/Layout/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

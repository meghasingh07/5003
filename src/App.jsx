import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SendMessagePage from "./components/SendMessage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import News from "./pages/News";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send-message" element={<SendMessagePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/enquiry" element={<Enquiry/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Press from "./pages/Press";
import Safety from "./pages/Safety";

const RouterComponent = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<Aboutus />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/contact" element={<ContactUs />} />

      <Route path="/press" element={<Press />} />

      <Route path="/safety" element={<Safety />} />

    </Routes>
  );
};

export default RouterComponent;
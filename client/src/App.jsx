import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CustomOrder from "./pages/CustomOrder";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/custom-order" element={<CustomOrder />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Products from "./pages/products/products";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
 
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
 
export default App;
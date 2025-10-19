import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/user" element={<User />} /> */}
    </Routes> 
    </ BrowserRouter>
    </>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

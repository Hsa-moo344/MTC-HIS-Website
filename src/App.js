import HealthCss from "././css/department.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import HIS from "./HIS/HIS";
import Health from "./Health/Health";
import Contact from "./Contact/Contact";
import ReactDOM from "react-dom/client";
import Login from "./Login/Login";
import Navigation from "./Navigation/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/health services" element={<Health />}></Route>
        <Route path="/Health Information System" element={<HIS />}></Route>
        <Route path="/Contact" element={<Contact Us />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

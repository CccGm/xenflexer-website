import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Desktop } from "./desktop";
import { Register } from "./desktop/register";
import { ContactUs } from "./desktop/contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="register" element={<Register />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

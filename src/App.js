import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Desktop } from "./desktop";
import { Register } from "./desktop/register";
import { ContactUs } from "./desktop/contactus";
import { Contact_Us } from "./desktop/contact-us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="register" element={<Register />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="contact-us" element={<Contact_Us />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
